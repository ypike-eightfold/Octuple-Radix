import type { Meta, StoryObj } from '@storybook/react';
import { DatePickerV2 } from '../components/DatePickerV2';
import React, { useState } from 'react';

const meta: Meta<typeof DatePickerV2> = {
  title: 'Octuple V2.5/Date Picker',
  component: DatePickerV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    picker: {
      control: 'select',
      options: ['date', 'week', 'month', 'quarter', 'year'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    status: {
      control: 'select',
      options: [undefined, 'error', 'warning', 'success'],
    },
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    showToday: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePickerV2>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    const [dateString, setDateString] = useState('');
    
    return (
      <div>
        <DatePickerV2 
          value={date || undefined}
          onChange={(date, dateStr) => {
            setDate(date);
            setDateString(dateStr);
          }} 
        />
        {dateString && (
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#69717f' }}>
            Selected: {dateString}
          </p>
        )}
      </div>
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    
    return <DatePickerV2 value={date || undefined} onChange={(d) => setDate(d)} />;
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Small</p>
          <DatePickerV2 size="small" placeholder="Small date picker" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Medium (Default)</p>
          <DatePickerV2 size="medium" placeholder="Medium date picker" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Large</p>
          <DatePickerV2 size="large" placeholder="Large date picker" />
        </div>
      </div>
    );
  },
};

export const StatusVariants: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Default</p>
          <DatePickerV2 placeholder="Default status" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Error</p>
          <DatePickerV2 status="error" placeholder="Error status" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Warning</p>
          <DatePickerV2 status="warning" placeholder="Warning status" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Success</p>
          <DatePickerV2 status="success" placeholder="Success status" />
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled date picker',
  },
};

export const DisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    
    const disablePastDates = (currentDate: Date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return currentDate < today;
    };

    return (
      <div>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#69717f' }}>
          Past dates are disabled
        </p>
        <DatePickerV2
          value={date || undefined}
          onChange={(d) => setDate(d)}
          disabledDate={disablePastDates}
        />
      </div>
    );
  },
};

export const WithoutClearButton: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    
    return (
      <DatePickerV2 
        value={date || undefined}
        onChange={(d) => setDate(d)}
        allowClear={false}
      />
    );
  },
};

export const CustomFormat: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Format: MM/DD/YYYY (Default)</p>
          <DatePickerV2 
            value={date || undefined}
            onChange={(d) => setDate(d)}
            format="MM/DD/YYYY"
          />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Format: DD/MM/YYYY</p>
          <DatePickerV2 
            value={date || undefined}
            onChange={(d) => setDate(d)}
            format="DD/MM/YYYY"
          />
        </div>
      </div>
    );
  },
};

export const InForm: Story = {
  render: () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            Start Date
          </label>
          <DatePickerV2 
            value={startDate || undefined}
            onChange={(d) => setStartDate(d)}
            placeholder="Select start date" 
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            End Date
          </label>
          <DatePickerV2 
            value={endDate || undefined}
            onChange={(d) => setEndDate(d)}
            placeholder="Select end date" 
          />
        </div>
      </div>
    );
  },
};
