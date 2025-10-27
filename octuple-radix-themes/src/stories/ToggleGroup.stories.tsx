import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from '../components/ToggleGroup';
import { Icon } from '../components/Icon';
import { Flex, Text } from '@radix-ui/themes';
import { useState } from 'react';

const meta = {
  title: 'Components/Toggle Group',
  component: ToggleGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Left align">
        <Icon name="format_align_left" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center align">
        <Icon name="format_align_center" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right align">
        <Icon name="format_align_right" size={18} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Icon name="format_bold" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Icon name="format_italic" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <Icon name="format_underlined" size={18} />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
        <Icon name="strikethrough_s" size={18} />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const WithText: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="list">
      <ToggleGroupItem value="list">
        <Icon name="list" size={18} />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="grid">
        <Icon name="grid_view" size={18} />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="compact">
        <Icon name="view_compact" size={18} />
        Compact
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start">
      <ToggleGroup type="single" size="1" defaultValue="left">
        <ToggleGroupItem value="left">Small</ToggleGroupItem>
        <ToggleGroupItem value="center">Small</ToggleGroupItem>
        <ToggleGroupItem value="right">Small</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" size="2" defaultValue="left">
        <ToggleGroupItem value="left">Medium</ToggleGroupItem>
        <ToggleGroupItem value="center">Medium</ToggleGroupItem>
        <ToggleGroupItem value="right">Medium</ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="single" size="3" defaultValue="left">
        <ToggleGroupItem value="left">Large</ToggleGroupItem>
        <ToggleGroupItem value="center">Large</ToggleGroupItem>
        <ToggleGroupItem value="right">Large</ToggleGroupItem>
      </ToggleGroup>
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('center');
    
    return (
      <Flex direction="column" gap="3" align="start">
        <ToggleGroup type="single" value={value} onValueChange={setValue as any}>
          <ToggleGroupItem value="left" aria-label="Left">
            <Icon name="format_align_left" size={18} />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center">
            <Icon name="format_align_center" size={18} />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right">
            <Icon name="format_align_right" size={18} />
          </ToggleGroupItem>
        </ToggleGroup>
        <Text size="2" color="gray">
          Selected: {value || 'none'}
        </Text>
      </Flex>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="single" disabled defaultValue="center">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ),
};

