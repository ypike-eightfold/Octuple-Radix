import type { Meta, StoryObj } from '@storybook/react';
import { TimePickerV2 } from '../components/TimePickerV2';
import React, { useState } from 'react';

const meta: Meta<typeof TimePickerV2> = {
  title: 'Octuple V2.5/Time Picker',
  component: TimePickerV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    use12Hours: { control: 'boolean' },
    inputReadOnly: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TimePickerV2>;

export const Default: Story = {
  render: () => {
    const [time, setTime] = useState<Date | null>(null);
    const [timeString, setTimeString] = useState('');
    
    return (
      <div>
        <TimePickerV2 
          value={time || undefined}
          onChange={(time, timeStr) => {
            setTime(time);
            setTimeString(timeStr);
          }} 
        />
        {timeString && (
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#69717f' }}>
            Selected: {timeString}
          </p>
        )}
      </div>
    );
  },
};

export const Use12Hours: Story = {
  render: () => {
    const [time, setTime] = useState<Date | null>(null);
    const [timeString, setTimeString] = useState('');
    
    return (
      <div>
        <TimePickerV2 
          value={time || undefined}
          onChange={(time, timeStr) => {
            setTime(time);
            setTimeString(timeStr);
          }}
          use12Hours={true}
        />
        {timeString && (
          <p style={{ marginTop: '12px', fontSize: '14px', color: '#69717f' }}>
            Selected: {timeString}
          </p>
        )}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Small</p>
          <TimePickerV2 size="small" placeholder="Small time picker" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Medium (Default)</p>
          <TimePickerV2 size="medium" placeholder="Medium time picker" />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Large</p>
          <TimePickerV2 size="large" placeholder="Large time picker" />
        </div>
      </div>
    );
  },
};

export const WithSeconds: Story = {
  render: () => {
    const [time, setTime] = useState<Date | null>(null);
    
    return (
      <TimePickerV2 
        value={time || undefined}
        onChange={(t) => setTime(t)}
        format="HH:mm:ss"
      />
    );
  },
};

export const HourAndMinuteSteps: Story = {
  render: () => {
    const [time, setTime] = useState<Date | null>(null);
    
    return (
      <div>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#69717f' }}>
          Hour step: 2, Minute step: 15
        </p>
        <TimePickerV2 
          value={time || undefined}
          onChange={(t) => setTime(t)}
          hourStep={2}
          minuteStep={15}
        />
      </div>
    );
  },
};

export const DisabledHours: Story = {
  render: () => {
    const [time, setTime] = useState<Date | null>(null);
    
    const disableNightHours = () => {
      // Disable hours from 10 PM to 6 AM
      return [22, 23, 0, 1, 2, 3, 4, 5, 6];
    };
    
    return (
      <div>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#69717f' }}>
          Night hours (10 PM - 6 AM) are disabled
        </p>
        <TimePickerV2 
          value={time || undefined}
          onChange={(t) => setTime(t)}
          disabledHours={disableNightHours}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled time picker',
  },
};

export const WithoutClearButton: Story = {
  render: () => {
    const [time, setTime] = useState<Date | null>(new Date());
    
    return (
      <TimePickerV2 
        value={time || undefined}
        onChange={(t) => setTime(t)}
        allowClear={false}
      />
    );
  },
};

export const InForm: Story = {
  render: () => {
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            Start Time
          </label>
          <TimePickerV2 
            value={startTime || undefined}
            onChange={(t) => setStartTime(t)}
            placeholder="Select start time" 
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            End Time
          </label>
          <TimePickerV2 
            value={endTime || undefined}
            onChange={(t) => setEndTime(t)}
            placeholder="Select end time" 
          />
        </div>
      </div>
    );
  },
};
