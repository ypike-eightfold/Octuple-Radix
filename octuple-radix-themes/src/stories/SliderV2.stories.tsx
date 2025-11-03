import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@radix-ui/themes';
import { SliderV2 } from '../components/SliderV2/SliderV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Slider',
  component: SliderV2,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    showLabels: {
      control: 'boolean',
      description: 'Show min/max labels',
    },
    showValue: {
      control: 'boolean',
      description: 'Show current value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof SliderV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Single Slider Examples
export const SingleSlider: Story = {
  render: () => {
    const [value, setValue] = React.useState(12);

    return (
      <Flex direction="column" gap="5" style={{ width: '400px' }}>
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
            Very Low Value
          </h3>
          <SliderV2 
            value={value} 
            onChange={setValue}
            min={0}
            max={100}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
            Mid Range Value
          </h3>
          <SliderV2 defaultValue={64} />
        </div>

        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
            High Value
          </h3>
          <SliderV2 defaultValue={96} />
        </div>
      </Flex>
    );
  },
};

// Range Slider Examples
export const RangeSlider: Story = {
  render: () => {
    const [range, setRange] = React.useState<[number, number]>([0, 36]);

    return (
      <Flex direction="column" gap="5" style={{ width: '400px' }}>
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
            Very Low Range
          </h3>
          <SliderV2 
            rangeValue={range} 
            onRangeChange={setRange}
            min={0}
            max={100}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
            Mid Range
          </h3>
          <SliderV2 defaultRangeValue={[18, 80]} />
        </div>

        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
            High Range
          </h3>
          <SliderV2 defaultRangeValue={[75, 100]} />
        </div>
      </Flex>
    );
  },
};

// Label Options
export const LabelOptions: Story = {
  render: () => (
    <Flex direction="column" gap="5" style={{ width: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          With Labels and Value
        </h3>
        <SliderV2 
          defaultValue={50} 
          showLabels={true}
          showValue={true}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Value Only
        </h3>
        <SliderV2 
          defaultValue={50} 
          showLabels={false}
          showValue={true}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          No Labels
        </h3>
        <SliderV2 
          defaultValue={50} 
          showLabels={false}
          showValue={false}
        />
      </div>
    </Flex>
  ),
};

// Disabled State
export const DisabledState: Story = {
  render: () => (
    <Flex direction="column" gap="5" style={{ width: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Disabled Single
        </h3>
        <SliderV2 defaultValue={50} disabled />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Disabled Range
        </h3>
        <SliderV2 defaultRangeValue={[25, 75]} disabled />
      </div>
    </Flex>
  ),
};

// Custom Range
export const CustomRange: Story = {
  render: () => (
    <Flex direction="column" gap="5" style={{ width: '400px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          0 to 500 (step 10)
        </h3>
        <SliderV2 
          min={0}
          max={500}
          step={10}
          defaultValue={250}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          -100 to 100 (step 5)
        </h3>
        <SliderV2 
          min={-100}
          max={100}
          step={5}
          defaultValue={0}
        />
      </div>
    </Flex>
  ),
};

// Controlled Example
export const ControlledSlider: Story = {
  render: () => {
    const [singleValue, setSingleValue] = React.useState(30);
    const [rangeValue, setRangeValue] = React.useState<[number, number]>([20, 70]);

    return (
      <Flex direction="column" gap="5" style={{ width: '400px' }}>
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
            Controlled Single Slider
          </h3>
          <SliderV2 
            value={singleValue} 
            onChange={setSingleValue}
          />
          <div style={{ marginTop: '12px', fontSize: '14px', color: '#4F5666' }}>
            Current value: <strong>{singleValue}</strong>
          </div>
          <button 
            onClick={() => setSingleValue(50)}
            style={{ 
              marginTop: '8px',
              padding: '6px 12px', 
              borderRadius: '8px', 
              border: '1px solid #69717f',
              background: 'white',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Reset to 50
          </button>
        </div>

        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
            Controlled Range Slider
          </h3>
          <SliderV2 
            rangeValue={rangeValue} 
            onRangeChange={setRangeValue}
          />
          <div style={{ marginTop: '12px', fontSize: '14px', color: '#4F5666' }}>
            Current range: <strong>{rangeValue[0]} - {rangeValue[1]}</strong>
          </div>
          <button 
            onClick={() => setRangeValue([25, 75])}
            style={{ 
              marginTop: '8px',
              padding: '6px 12px', 
              borderRadius: '8px', 
              border: '1px solid #69717f',
              background: 'white',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Reset to 25-75
          </button>
        </div>
      </Flex>
    );
  },
};

// Interactive Playground
export const Interactive: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 50,
    step: 1,
    showLabels: true,
    showValue: true,
    disabled: false,
  },
};

