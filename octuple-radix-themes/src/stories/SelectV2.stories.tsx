import type { Meta, StoryObj } from '@storybook/react';
import { SelectV2, SelectOption } from '../components/SelectV2';
import React, { useState, useRef } from 'react';

const meta: Meta<typeof SelectV2> = {
  title: 'Octuple V2.5/Select',
  component: SelectV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Basic select component which supports searching, multi select',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'tags'],
    },
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    showSearch: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SelectV2>;

const defaultOptions: SelectOption[] = [
  { label: 'School', value: 'school' },
  { label: 'Date', value: 'date' },
  { label: 'Supercalifragilisticexpialidocious and another Supercalifragilisticexpialidocious', value: 'verylarge' },
  { label: 'Account', value: 'account' },
  { label: 'Hat', value: 'hat' },
  { label: 'Tie', value: 'tie' },
  { label: 'Date alert', value: 'datealert' },
  { label: 'Bell', value: 'bell' },
];

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <SelectV2
        value={value}
        onChange={(val) => setValue(String(val))}
        options={defaultOptions}
        placeholder="Select an option"
        width={256}
      />
    );
  },
};

export const Dynamic_Width: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: '400px' }}>
        <SelectV2
          value={value}
          onChange={(val) => setValue(String(val))}
          options={defaultOptions}
          placeholder="Select an option"
          width="100%"
        />
      </div>
    );
  },
};

export const With_Default_Value: Story = {
  render: () => {
    const [value, setValue] = useState('hat');
    return (
      <SelectV2
        value={value}
        onChange={(val) => setValue(String(val))}
        options={defaultOptions}
        width={256}
      />
    );
  },
};

export const With_Default_Value_Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<(string | number)[]>(['verylarge', 'account', 'hat']);
    return (
      <SelectV2
        value={values}
        onChange={(val) => setValues(Array.isArray(val) ? val : [val])}
        options={defaultOptions}
        mode="multiple"
        width={324}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <SelectV2
        value="hat"
        options={defaultOptions}
        disabled={true}
        width={256}
      />
    );
  },
};

export const With_Clear: Story = {
  render: () => {
    const [value, setValue] = useState('hat');
    return (
      <SelectV2
        value={value}
        onChange={(val) => setValue(String(val))}
        options={defaultOptions}
        allowClear={true}
        width={256}
      />
    );
  },
};

export const Options_Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const optionsWithDisabled: SelectOption[] = [
      { label: 'Option taken', value: 'option1', disabled: true },
      ...defaultOptions,
    ];
    
    return (
      <SelectV2
        value={value}
        onChange={(val) => setValue(String(val))}
        options={optionsWithDisabled}
        placeholder="Select an option"
        width={256}
      />
    );
  },
};

export const Filterable: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <SelectV2
        value={value}
        onChange={(val) => setValue(String(val))}
        options={defaultOptions}
        showSearch={true}
        allowClear={true}
        placeholder="Search and select"
        width={256}
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '400px' }}>
        <SelectV2
          value={values}
          onChange={(val) => setValues(Array.isArray(val) ? val : [val])}
          options={defaultOptions}
          mode="multiple"
          showSearch={true}
          allowClear={true}
          placeholder="Select multiple"
          width="100%"
        />
      </div>
    );
  },
};

export const Multiple_With_No_Filter: Story = {
  render: () => {
    const [values, setValues] = useState<(string | number)[]>([]);
    return (
      <div style={{ width: '400px' }}>
        <SelectV2
          value={values}
          onChange={(val) => setValues(Array.isArray(val) ? val : [val])}
          options={defaultOptions}
          mode="multiple"
          showSearch={false}
          allowClear={true}
          placeholder="Select multiple"
          width="100%"
        />
      </div>
    );
  },
};

export const Dynamic: Story = {
  render: () => {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [value, setValue] = useState('');
    const [options, setOptions] = useState(defaultOptions);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (searchString: string) => {
      setIsLoading(true);
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        const filtered = defaultOptions.filter((option) =>
          option.label.toLowerCase().includes(searchString.toLowerCase())
        );
        setOptions(filtered);
        setIsLoading(false);
      }, 2000);
    };

    return (
      <SelectV2
        value={value}
        onChange={(val) => setValue(String(val))}
        options={options}
        showSearch={true}
        allowClear={true}
        loading={isLoading}
        placeholder="Type to search (2s delay)"
        width={256}
        filterOption={(inputValue, option) => {
          handleSearch(inputValue);
          return true;
        }}
      />
    );
  },
};
