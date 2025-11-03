import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxV2 } from '../components/CheckboxV2/CheckboxV2';
import { Flex, Text } from '@radix-ui/themes';

const meta = {
  title: 'Octuple V2.5/Checkbox',
  component: CheckboxV2,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate/partial state',
    },
  },
} satisfies Meta<typeof CheckboxV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start">
      <Flex align="center" gap="3">
        <CheckboxV2 size="large" />
        <Text size="3">Large (24px)</Text>
      </Flex>
      
      <Flex align="center" gap="3">
        <CheckboxV2 size="medium" />
        <Text size="2">Medium (20px)</Text>
      </Flex>
      
      <Flex align="center" gap="3">
        <CheckboxV2 size="small" />
        <Text size="1">Small (16px)</Text>
      </Flex>
    </Flex>
  ),
};

export const States: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start">
      <Flex align="center" gap="3">
        <CheckboxV2 />
        <Text>Unchecked (hover to see cyan background)</Text>
      </Flex>
      
      <Flex align="center" gap="3">
        <CheckboxV2 defaultChecked />
        <Text>Checked (click to uncheck)</Text>
      </Flex>
      
      <Flex align="center" gap="3">
        <CheckboxV2 indeterminate />
        <Text>Indeterminate (partial selection)</Text>
      </Flex>
      
      <Flex align="center" gap="3">
        <CheckboxV2 disabled />
        <Text>Disabled unchecked (40% opacity)</Text>
      </Flex>
      
      <Flex align="center" gap="3">
        <CheckboxV2 defaultChecked disabled />
        <Text>Disabled checked (40% opacity)</Text>
      </Flex>
    </Flex>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <Flex align="center" gap="2">
        <CheckboxV2 id="option1" />
        <label htmlFor="option1" style={{ cursor: 'pointer' }}>
          <Text>Option 1</Text>
        </label>
      </Flex>
      
      <Flex align="center" gap="2">
        <CheckboxV2 id="option2" defaultChecked />
        <label htmlFor="option2" style={{ cursor: 'pointer' }}>
          <Text>Option 2</Text>
        </label>
      </Flex>
      
      <Flex align="center" gap="2">
        <CheckboxV2 id="option3" indeterminate />
        <label htmlFor="option3" style={{ cursor: 'pointer' }}>
          <Text>Option 3 (some items selected)</Text>
        </label>
      </Flex>
      
      <Flex align="center" gap="2">
        <CheckboxV2 id="option4" disabled />
        <label htmlFor="option4" style={{ cursor: 'not-allowed', opacity: 0.4 }}>
          <Text>Option 4 (disabled)</Text>
        </label>
      </Flex>
    </Flex>
  ),
};

export const CheckedStates: Story = {
  render: () => (
    <Flex gap="6">
      <Flex direction="column" gap="3" align="center">
        <Text size="2" weight="bold">Large</Text>
        <CheckboxV2 size="large" />
        <CheckboxV2 size="large" defaultChecked />
        <CheckboxV2 size="large" indeterminate />
      </Flex>
      
      <Flex direction="column" gap="3" align="center">
        <Text size="2" weight="bold">Medium</Text>
        <CheckboxV2 size="medium" />
        <CheckboxV2 size="medium" defaultChecked />
        <CheckboxV2 size="medium" indeterminate />
      </Flex>
      
      <Flex direction="column" gap="3" align="center">
        <Text size="2" weight="bold">Small</Text>
        <CheckboxV2 size="small" />
        <CheckboxV2 size="small" defaultChecked />
        <CheckboxV2 size="small" indeterminate />
      </Flex>
    </Flex>
  ),
};

export const Group: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>(['option2']);
    
    const options = [
      { id: 'option1', label: 'UX Designer' },
      { id: 'option2', label: 'UI Designer' },
      { id: 'option3', label: 'Product Designer' },
      { id: 'option4', label: 'Frontend Developer' },
    ];

    const handleChange = (id: string) => {
      setSelectedItems(prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id]
      );
    };

    const allSelected = selectedItems.length === options.length;
    const someSelected = selectedItems.length > 0 && selectedItems.length < options.length;

    const handleSelectAll = () => {
      if (allSelected) {
        setSelectedItems([]);
      } else {
        setSelectedItems(options.map(opt => opt.id));
      }
    };

    return (
      <Flex direction="column" gap="3" align="start">
        <Flex align="center" gap="2" style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '8px' }}>
          <CheckboxV2
            checked={allSelected}
            indeterminate={someSelected}
            onChange={handleSelectAll}
          />
          <Text weight="bold">Select All</Text>
        </Flex>
        
        <Flex direction="column" gap="2" style={{ paddingLeft: '24px' }}>
          {options.map(option => (
            <Flex key={option.id} align="center" gap="2">
              <CheckboxV2
                checked={selectedItems.includes(option.id)}
                onChange={() => handleChange(option.id)}
              />
              <Text>{option.label}</Text>
            </Flex>
          ))}
        </Flex>
        
        <Text size="1" color="gray" style={{ marginTop: '8px' }}>
          Selected: {selectedItems.length} of {options.length}
        </Text>
      </Flex>
    );
  },
};

export const Interactive: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start">
      <Text size="2" weight="bold">Try interacting with these checkboxes:</Text>
      
      <Flex direction="column" gap="3">
        <Flex align="center" gap="2">
          <CheckboxV2 id="int1" />
          <label htmlFor="int1" style={{ cursor: 'pointer' }}>
            <Text>Click me (hover, press, focus states)</Text>
          </label>
        </Flex>
        
        <Flex align="center" gap="2">
          <CheckboxV2 id="int2" size="medium" defaultChecked />
          <label htmlFor="int2" style={{ cursor: 'pointer' }}>
            <Text>Medium size checked</Text>
          </label>
        </Flex>
        
        <Flex align="center" gap="2">
          <CheckboxV2 id="int3" size="small" indeterminate />
          <label htmlFor="int3" style={{ cursor: 'pointer' }}>
            <Text>Small indeterminate</Text>
          </label>
        </Flex>
      </Flex>
    </Flex>
  ),
};

// Import React for the Group story
import React from 'react';

