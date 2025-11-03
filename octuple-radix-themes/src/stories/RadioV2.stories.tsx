import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@radix-ui/themes';
import { RadioV2 } from '../components/RadioV2/RadioV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Radio',
  component: RadioV2,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Radio button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
  },
} satisfies Meta<typeof RadioV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sizes Story
export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start">
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Large (24px)</h3>
        <Flex gap="3" align="center">
          <RadioV2 size="large" name="size-large" />
          <RadioV2 size="large" name="size-large" defaultChecked />
        </Flex>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Medium (20px)</h3>
        <Flex gap="3" align="center">
          <RadioV2 size="medium" name="size-medium" />
          <RadioV2 size="medium" name="size-medium" defaultChecked />
        </Flex>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Small (16px)</h3>
        <Flex gap="3" align="center">
          <RadioV2 size="small" name="size-small" />
          <RadioV2 size="small" name="size-small" defaultChecked />
        </Flex>
      </div>
    </Flex>
  ),
};

// States Story
export const States: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start">
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Enabled</h3>
        <Flex gap="3" align="center">
          <RadioV2 size="large" name="state-enabled" />
          <RadioV2 size="large" name="state-enabled" defaultChecked />
        </Flex>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Disabled</h3>
        <Flex gap="3" align="center">
          <RadioV2 size="large" name="state-disabled" disabled />
          <RadioV2 size="large" name="state-disabled" disabled defaultChecked />
        </Flex>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Hover (hover over these)</h3>
        <Flex gap="3" align="center">
          <RadioV2 size="large" name="state-hover" />
          <RadioV2 size="large" name="state-hover" defaultChecked />
        </Flex>
      </div>
    </Flex>
  ),
};

// With Labels Story
export const WithLabels: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <RadioV2 size="large" name="labeled" label="Option 1" />
      <RadioV2 size="large" name="labeled" label="Option 2" defaultChecked />
      <RadioV2 size="large" name="labeled" label="Option 3" />
      <RadioV2 size="large" name="labeled" label="Option 4 (Disabled)" disabled />
    </Flex>
  ),
};

// Radio Group Example
export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('option2');

    return (
      <Flex direction="column" gap="3" align="start">
        <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>Choose an option:</h3>
        <RadioV2 
          size="large" 
          name="group-example" 
          value="option1"
          label="First Option"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <RadioV2 
          size="large" 
          name="group-example" 
          value="option2"
          label="Second Option"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <RadioV2 
          size="large" 
          name="group-example" 
          value="option3"
          label="Third Option"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <RadioV2 
          size="large" 
          name="group-example" 
          value="option4"
          label="Disabled Option"
          disabled
        />
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#4F5666' }}>
          Selected: <strong>{selected}</strong>
        </p>
      </Flex>
    );
  },
};

// All Sizes in Groups
export const AllSizesGroups: Story = {
  render: () => (
    <Flex direction="column" gap="5" align="start">
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Large Size Group</h3>
        <Flex direction="column" gap="2" align="start">
          <RadioV2 size="large" name="group-large" label="Large Option 1" defaultChecked />
          <RadioV2 size="large" name="group-large" label="Large Option 2" />
          <RadioV2 size="large" name="group-large" label="Large Option 3" />
        </Flex>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Medium Size Group</h3>
        <Flex direction="column" gap="2" align="start">
          <RadioV2 size="medium" name="group-medium" label="Medium Option 1" defaultChecked />
          <RadioV2 size="medium" name="group-medium" label="Medium Option 2" />
          <RadioV2 size="medium" name="group-medium" label="Medium Option 3" />
        </Flex>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Small Size Group</h3>
        <Flex direction="column" gap="2" align="start">
          <RadioV2 size="small" name="group-small" label="Small Option 1" defaultChecked />
          <RadioV2 size="small" name="group-small" label="Small Option 2" />
          <RadioV2 size="small" name="group-small" label="Small Option 3" />
        </Flex>
      </div>
    </Flex>
  ),
};

// Interactive Playground
export const Interactive: Story = {
  args: {
    size: 'large',
    label: 'Radio Button',
    disabled: false,
  },
};

