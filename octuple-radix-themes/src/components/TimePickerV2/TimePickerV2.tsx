import React, { useState, useEffect } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Icon } from '../Icon';
import './TimePickerV2.css';

export interface TimePickerV2Props {
  /** The selected time value (Date object or string) */
  value?: Date | string;
  /** Default time value */
  defaultValue?: Date | string;
  /** Callback when time changes */
  onChange?: (time: Date | null, timeString: string) => void;
  /** Time format string (e.g., "HH:mm:ss", "h:mm a") */
  format?: string;
  /** Use 12-hour format */
  use12Hours?: boolean;
  /** Hour step */
  hourStep?: number;
  /** Minute step */
  minuteStep?: number;
  /** Second step */
  secondStep?: number;
  /** Function to disable specific hours */
  disabledHours?: () => number[];
  /** Function to disable specific minutes */
  disabledMinutes?: (selectedHour: number) => number[];
  /** Function to disable specific seconds */
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Allow clearing the selected time */
  allowClear?: boolean;
  /** Make input read-only */
  inputReadOnly?: boolean;
  /** Size variant */
  size?: 'small' | 'medium' | 'large';
  /** Additional CSS class */
  className?: string;
}

export const TimePickerV2: React.FC<TimePickerV2Props> = ({
  value,
  defaultValue,
  onChange,
  format = 'HH:mm',
  use12Hours = false,
  hourStep = 1,
  minuteStep = 1,
  secondStep = 1,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  placeholder = 'Select time',
  disabled = false,
  allowClear = true,
  inputReadOnly = true,
  size = 'medium',
  className = '',
}) => {
  const parseTimeValue = (val: Date | string | undefined): Date | null => {
    if (!val) return null;
    if (val instanceof Date) return val;
    // Parse time string (e.g., "14:30" or "2:30 PM")
    const today = new Date();
    const [time, period] = val.split(' ');
    const [hours, minutes, seconds] = time.split(':').map(Number);
    
    let hour = hours;
    if (period === 'PM' && hour < 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    
    today.setHours(hour, minutes || 0, seconds || 0, 0);
    return today;
  };

  const [selectedTime, setSelectedTime] = useState<Date | null>(
    parseTimeValue(value || defaultValue)
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedTime(parseTimeValue(value));
    }
  }, [value]);

  const formatTime = (date: Date | null): string => {
    if (!date) return '';
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    if (use12Hours || format.includes('a') || format.includes('A')) {
      const hour12 = hours % 12 || 12;
      const period = hours < 12 ? 'AM' : 'PM';
      return `${hour12}:${String(minutes).padStart(2, '0')} ${period}`;
    }
    
    let formatted = format
      .replace('HH', String(hours).padStart(2, '0'))
      .replace('mm', String(minutes).padStart(2, '0'));
    
    if (format.includes('ss')) {
      formatted = formatted.replace('ss', String(seconds).padStart(2, '0'));
    }
    
    return formatted;
  };

  const handleTimeSelect = (hours: number, minutes: number, seconds: number = 0) => {
    const newTime = new Date();
    newTime.setHours(hours, minutes, seconds, 0);
    
    setSelectedTime(newTime);
    onChange?.(newTime, formatTime(newTime));
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedTime(null);
    onChange?.(null, '');
  };

  const renderTimePicker = () => {
    const maxHours = use12Hours ? 12 : 24;
    const disabledHoursList = disabledHours ? disabledHours() : [];
    
    const hours: number[] = [];
    for (let h = 0; h < maxHours; h += hourStep) {
      if (!disabledHoursList.includes(h)) {
        hours.push(h);
      }
    }

    const minutes: number[] = [];
    for (let m = 0; m < 60; m += minuteStep) {
      minutes.push(m);
    }

    const showSeconds = format.includes('ss');
    const seconds: number[] = [];
    if (showSeconds) {
      for (let s = 0; s < 60; s += secondStep) {
        seconds.push(s);
      }
    }

    const currentHour = selectedTime?.getHours() || 0;
    const currentMinute = selectedTime?.getMinutes() || 0;
    const currentSecond = selectedTime?.getSeconds() || 0;

    return (
      <div className="timepicker-panel">
        <div className="timepicker-column-wrapper">
          <div className="timepicker-column">
            <div className="timepicker-column-header">Hour</div>
            <div className="timepicker-column-content">
              {hours.map((h) => {
                const displayHour = use12Hours ? (h === 0 ? 12 : h) : h;
                const isSelected = use12Hours 
                  ? (currentHour % 12 || 12) === displayHour
                  : currentHour === h;
                
                return (
                  <button
                    key={h}
                    type="button"
                    onClick={() => handleTimeSelect(h, currentMinute, currentSecond)}
                    className={`timepicker-option ${isSelected ? 'selected' : ''}`}
                  >
                    {String(displayHour).padStart(2, '0')}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="timepicker-column">
            <div className="timepicker-column-header">Minute</div>
            <div className="timepicker-column-content">
              {minutes.map((m) => {
                const isDisabled = disabledMinutes && disabledMinutes(currentHour).includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => handleTimeSelect(currentHour, m, currentSecond)}
                    disabled={isDisabled}
                    className={`timepicker-option ${currentMinute === m ? 'selected' : ''} ${
                      isDisabled ? 'disabled' : ''
                    }`}
                  >
                    {String(m).padStart(2, '0')}
                  </button>
                );
              })}
            </div>
          </div>

          {showSeconds && (
            <div className="timepicker-column">
              <div className="timepicker-column-header">Second</div>
              <div className="timepicker-column-content">
                {seconds.map((s) => {
                  const isDisabled = disabledSeconds && disabledSeconds(currentHour, currentMinute).includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleTimeSelect(currentHour, currentMinute, s)}
                      disabled={isDisabled}
                      className={`timepicker-option ${currentSecond === s ? 'selected' : ''} ${
                        isDisabled ? 'disabled' : ''
                      }`}
                    >
                      {String(s).padStart(2, '0')}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {use12Hours && (
            <div className="timepicker-column">
              <div className="timepicker-column-header">Period</div>
              <div className="timepicker-column-content">
                <button
                  type="button"
                  onClick={() => {
                    const newHour = currentHour < 12 ? currentHour : currentHour - 12;
                    handleTimeSelect(newHour, currentMinute, currentSecond);
                  }}
                  className={`timepicker-option ${currentHour < 12 ? 'selected' : ''}`}
                >
                  AM
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const newHour = currentHour < 12 ? currentHour + 12 : currentHour;
                    handleTimeSelect(newHour, currentMinute, currentSecond);
                  }}
                  className={`timepicker-option ${currentHour >= 12 ? 'selected' : ''}`}
                >
                  PM
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <div className={`timepicker-v2 timepicker-v2-${size} ${disabled ? 'disabled' : ''} ${className}`}>
          <div className="timepicker-input-wrapper">
            <input
              type="text"
              value={formatTime(selectedTime)}
              placeholder={placeholder}
              readOnly={inputReadOnly}
              disabled={disabled}
              className="timepicker-input"
            />
            <div className="timepicker-icons">
              {allowClear && selectedTime && !disabled && (
                <button
                  className="timepicker-clear-button"
                  onClick={handleClear}
                  type="button"
                  aria-label="Clear time"
                >
                  <Icon name="close" size={16} />
                </button>
              )}
              <Icon name="schedule" size={20} className="timepicker-clock-icon" />
            </div>
          </div>
        </div>
      </Popover.Trigger>
      
      <Popover.Portal>
        <Popover.Content
          className="timepicker-dropdown"
          sideOffset={4}
          align="start"
        >
          {renderTimePicker()}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
