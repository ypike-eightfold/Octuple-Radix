import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../components/Toggle';
import { Icon } from '../components/Icon';
import { Flex, Text } from '@radix-ui/themes';
import { useState } from 'react';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Toggle me',
  },
};

export const WithIcon: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    
    return (
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        <Icon name="favorite" size={18} />
        {pressed ? 'Liked' : 'Like'}
      </Toggle>
    );
  },
};

export const IconOnly: Story = {
  render: () => (
    <Flex gap="2">
      <Toggle aria-label="Bold">
        <Icon name="format_bold" size={18} />
      </Toggle>
      <Toggle aria-label="Italic">
        <Icon name="format_italic" size={18} />
      </Toggle>
      <Toggle aria-label="Underline">
        <Icon name="format_underlined" size={18} />
      </Toggle>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <Toggle size="1">
        <Icon name="star" size={14} />
        Small
      </Toggle>
      <Toggle size="2">
        <Icon name="star" size={16} />
        Medium
      </Toggle>
      <Toggle size="3">
        <Icon name="star" size={18} />
        Large
      </Toggle>
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    
    return (
      <Flex direction="column" gap="3" align="start">
        <Toggle pressed={pressed} onPressedChange={setPressed}>
          <Icon name={pressed ? 'bookmark' : 'bookmark_border'} size={18} />
          {pressed ? 'Saved' : 'Save'}
        </Toggle>
        <Text size="2" color="gray">
          Status: {pressed ? 'Pressed' : 'Not pressed'}
        </Text>
      </Flex>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Flex gap="2">
      <Toggle disabled>
        <Icon name="thumb_up" size={18} />
        Disabled
      </Toggle>
      <Toggle disabled defaultPressed>
        <Icon name="thumb_up" size={18} />
        Disabled Pressed
      </Toggle>
    </Flex>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <Flex gap="1">
      <Toggle aria-label="Bold">
        <Icon name="format_bold" size={18} />
      </Toggle>
      <Toggle aria-label="Italic">
        <Icon name="format_italic" size={18} />
      </Toggle>
      <Toggle aria-label="Underline">
        <Icon name="format_underlined" size={18} />
      </Toggle>
      <Toggle aria-label="Strikethrough">
        <Icon name="strikethrough_s" size={18} />
      </Toggle>
    </Flex>
  ),
};

