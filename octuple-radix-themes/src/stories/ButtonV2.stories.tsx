import type { Meta, StoryObj } from '@storybook/react';
import { ButtonV2 } from '../components/ButtonV2/ButtonV2';
import { Flex } from '@radix-ui/themes';

const meta = {
  title: 'Octuple V2.5/Button',
  component: ButtonV2,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'default', 'neutral', 'system-ui', 'disruptive-primary', 'disruptive-secondary', 'disruptive-default'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
  },
} satisfies Meta<typeof ButtonV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <ButtonV2 variant="primary" size="large">Primary Large</ButtonV2>
      <ButtonV2 variant="primary" size="medium">Primary Medium</ButtonV2>
      <ButtonV2 variant="primary" size="small">Primary Small</ButtonV2>
    </Flex>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <ButtonV2 variant="secondary" size="large">Secondary Large</ButtonV2>
      <ButtonV2 variant="secondary" size="medium">Secondary Medium</ButtonV2>
      <ButtonV2 variant="secondary" size="small">Secondary Small</ButtonV2>
    </Flex>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start">
      <Flex direction="column" gap="2" align="start">
        <ButtonV2 variant="primary">Primary</ButtonV2>
        <ButtonV2 variant="secondary">Secondary</ButtonV2>
        <ButtonV2 variant="default">Default</ButtonV2>
        <ButtonV2 variant="neutral">Neutral</ButtonV2>
        <ButtonV2 variant="system-ui">System UI</ButtonV2>
      </Flex>
      <Flex direction="column" gap="2" align="start">
        <ButtonV2 variant="disruptive-primary">Disruptive Primary</ButtonV2>
        <ButtonV2 variant="disruptive-secondary">Disruptive Secondary</ButtonV2>
        <ButtonV2 variant="disruptive-default">Disruptive Default</ButtonV2>
      </Flex>
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <ButtonV2 size="large">Large</ButtonV2>
      <ButtonV2 size="medium">Medium</ButtonV2>
      <ButtonV2 size="small">Small</ButtonV2>
    </Flex>
  ),
};

export const States: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <ButtonV2 variant="primary">Enabled (hover me)</ButtonV2>
      <ButtonV2 variant="primary" disabled>Disabled</ButtonV2>
    </Flex>
  ),
};

