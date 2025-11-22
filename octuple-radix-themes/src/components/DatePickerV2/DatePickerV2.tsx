import React, { useState, useEffect } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Icon } from '../Icon';
import './DatePickerV2.css';

export type DatePickerMode = 'date' | 'week' | 'month' | 'quarter' | 'year';
export type DatePickerSize = 'small' | 'medium' | 'large';
export type DatePickerStatus = 'error' | 'warning' | 'success';

export interface DatePickerV2Props {
  /** The picker mode */
  picker?: DatePickerMode;
  /** The selected date value */
  value?: Date;
  /** Default date value */
  defaultValue?: Date;
  /** Callback when date changes */
  onChange?: (date: Date | null, dateString: string) => void;
  /** Date format string */
  format?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Allow clearing the selected date */
  allowClear?: boolean;
  /** Size variant */
  size?: DatePickerSize;
  /** Validation status */
  status?: DatePickerStatus;
  /** Function to disable specific dates */
  disabledDate?: (date: Date) => boolean;
  /** Show "Today" button */
  showToday?: boolean;
  /** Show "Now" button (for datetime picker) */
  showNow?: boolean;
  /** Enable time selection */
  showTime?: boolean | object;
  /** Additional CSS class */
  className?: string;
}

export const DatePickerV2: React.FC<DatePickerV2Props> = ({
  picker = 'date', // TODO: Implement week, month, quarter, year picker modes
  value,
  defaultValue,
  onChange,
  format = 'MM/DD/YYYY',
  placeholder = 'Select date',
  disabled = false,
  allowClear = true,
  size = 'medium',
  status,
  disabledDate,
  showToday = true,
  showNow = false,
  showTime = false,
  className = '',
}) => {
  // Currently only 'date' picker mode is implemented
  // Week, month, quarter, and year modes to be added in future iterations
  void picker;
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value || defaultValue || null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(
    selectedDate || new Date()
  );

  useEffect(() => {
    if (value !== undefined) {
      setSelectedDate(value);
    }
  }, [value]);

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    
    let formatted = format
      .replace('MM', month)
      .replace('DD', day)
      .replace('YYYY', String(year));
    
    if (showTime && typeof showTime === 'object') {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      formatted += ` ${hours}:${minutes}`;
    }
    
    return formatted;
  };

  const handleDateSelect = (date: Date) => {
    if (disabledDate && disabledDate(date)) return;
    
    setSelectedDate(date);
    onChange?.(date, formatDate(date));
    if (!showTime) {
      setIsOpen(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDate(null);
    onChange?.(null, '');
  };

  const handleToday = () => {
    const today = new Date();
    handleDateSelect(today);
    setCurrentMonth(today);
  };

  const renderDatePicker = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return (
      <div className="datepicker-calendar">
        <div className="datepicker-header">
          <button
            onClick={() => setCurrentMonth(new Date(year, month - 1))}
            className="datepicker-nav-button"
            type="button"
          >
            <Icon name="chevron_left" size={20} />
          </button>
          <span className="datepicker-month-year">
            {firstDay.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </span>
          <button
            onClick={() => setCurrentMonth(new Date(year, month + 1))}
            className="datepicker-nav-button"
            type="button"
          >
            <Icon name="chevron_right" size={20} />
          </button>
        </div>
        
        <div className="datepicker-weekdays">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="datepicker-weekday">
              {day}
            </div>
          ))}
        </div>
        
        <div className="datepicker-days">
          {days.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="datepicker-day empty" />;
            }
            
            const isSelected = selectedDate && 
              date.getDate() === selectedDate.getDate() &&
              date.getMonth() === selectedDate.getMonth() &&
              date.getFullYear() === selectedDate.getFullYear();
            
            const isToday = 
              date.getDate() === new Date().getDate() &&
              date.getMonth() === new Date().getMonth() &&
              date.getFullYear() === new Date().getFullYear();
            
            const isDisabled = disabledDate && disabledDate(date);
            
            return (
              <button
                key={index}
                onClick={() => handleDateSelect(date)}
                disabled={isDisabled}
                type="button"
                className={`datepicker-day ${isSelected ? 'selected' : ''} ${
                  isToday ? 'today' : ''
                } ${isDisabled ? 'disabled' : ''}`}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
        
        {showToday && (
          <div className="datepicker-footer">
            <button onClick={handleToday} className="datepicker-today-button" type="button">
              {showNow ? 'Now' : 'Today'}
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <div 
          className={`datepicker-v2 datepicker-v2-${size} ${status ? `datepicker-v2-${status}` : ''} ${
            disabled ? 'disabled' : ''
          } ${className}`}
        >
          <div className="datepicker-input-wrapper">
            <input
              type="text"
              value={formatDate(selectedDate)}
              placeholder={placeholder}
              readOnly
              disabled={disabled}
              className="datepicker-input"
            />
            <div className="datepicker-icons">
              {allowClear && selectedDate && !disabled && (
                <button
                  className="datepicker-clear-button"
                  onClick={handleClear}
                  type="button"
                  aria-label="Clear date"
                >
                  <Icon name="close" size={16} />
                </button>
              )}
              <Icon name="calendar_today" size={20} className="datepicker-calendar-icon" />
            </div>
          </div>
        </div>
      </Popover.Trigger>
      
      <Popover.Portal>
        <Popover.Content
          className="datepicker-dropdown"
          sideOffset={4}
          align="start"
        >
          {renderDatePicker()}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
