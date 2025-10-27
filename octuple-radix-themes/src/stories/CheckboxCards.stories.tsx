import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Text, CheckboxCards } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Checkbox Cards',
  component: CheckboxCards.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxCards.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CheckboxCards.Root defaultValue={['1']} columns="1">
      <CheckboxCards.Item value="1">
        <Flex direction="column" gap="1">
          <Text weight="bold">Option 1</Text>
          <Text size="2" color="gray">First choice available</Text>
        </Flex>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="2">
        <Flex direction="column" gap="1">
          <Text weight="bold">Option 2</Text>
          <Text size="2" color="gray">Second choice available</Text>
        </Flex>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="3">
        <Flex direction="column" gap="1">
          <Text weight="bold">Option 3</Text>
          <Text size="2" color="gray">Third choice available</Text>
        </Flex>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <CheckboxCards.Root defaultValue={['design']} columns="1">
      <CheckboxCards.Item value="design">
        <Flex gap="3" align="start">
          <Icon name="palette" size={24} color="var(--indigo-9)" />
          <Flex direction="column" gap="1">
            <Text weight="bold">Design</Text>
            <Text size="2" color="gray">
              UI/UX design, prototyping, and visual design
            </Text>
          </Flex>
        </Flex>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="development">
        <Flex gap="3" align="start">
          <Icon name="code" size={24} color="var(--blue-9)" />
          <Flex direction="column" gap="1">
            <Text weight="bold">Development</Text>
            <Text size="2" color="gray">
              Frontend, backend, and full-stack development
            </Text>
          </Flex>
        </Flex>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="marketing">
        <Flex gap="3" align="start">
          <Icon name="campaign" size={24} color="var(--green-9)" />
          <Flex direction="column" gap="1">
            <Text weight="bold">Marketing</Text>
            <Text size="2" color="gray">
              Digital marketing, content, and SEO
            </Text>
          </Flex>
        </Flex>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ),
};

export const MultiColumn: Story = {
  render: () => (
    <CheckboxCards.Root defaultValue={['1', '2']} columns={{ initial: '1', sm: '2' }}>
      <CheckboxCards.Item value="1">
        <Text weight="bold">Option 1</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="2">
        <Text weight="bold">Option 2</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="3">
        <Text weight="bold">Option 3</Text>
      </CheckboxCards.Item>
      <CheckboxCards.Item value="4">
        <Text weight="bold">Option 4</Text>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 1 (Small)</Text>
        <CheckboxCards.Root defaultValue={['1']} size="1" columns="1">
          <CheckboxCards.Item value="1">Small card 1</CheckboxCards.Item>
          <CheckboxCards.Item value="2">Small card 2</CheckboxCards.Item>
        </CheckboxCards.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 2 (Default)</Text>
        <CheckboxCards.Root defaultValue={['1']} size="2" columns="1">
          <CheckboxCards.Item value="1">Default card 1</CheckboxCards.Item>
          <CheckboxCards.Item value="2">Default card 2</CheckboxCards.Item>
        </CheckboxCards.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 3 (Large)</Text>
        <CheckboxCards.Root defaultValue={['1']} size="3" columns="1">
          <CheckboxCards.Item value="1">Large card 1</CheckboxCards.Item>
          <CheckboxCards.Item value="2">Large card 2</CheckboxCards.Item>
        </CheckboxCards.Root>
      </Flex>
    </Flex>
  ),
};

export const PlanSelection: Story = {
  render: () => (
    <CheckboxCards.Root defaultValue={['pro']} columns={{ initial: '1', sm: '3' }}>
      <CheckboxCards.Item value="free">
        <Flex direction="column" gap="3">
          <Flex direction="column" gap="1">
            <Text size="5" weight="bold">Free</Text>
            <Text size="2" color="gray">For individuals</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Text size="6" weight="bold">$0</Text>
            <Text size="1" color="gray">per month</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">5 projects</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Basic support</Text>
            </Flex>
          </Flex>
        </Flex>
      </CheckboxCards.Item>

      <CheckboxCards.Item value="pro">
        <Flex direction="column" gap="3">
          <Flex direction="column" gap="1">
            <Text size="5" weight="bold">Pro</Text>
            <Text size="2" color="gray">For professionals</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Text size="6" weight="bold">$29</Text>
            <Text size="1" color="gray">per month</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Unlimited projects</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Priority support</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Advanced features</Text>
            </Flex>
          </Flex>
        </Flex>
      </CheckboxCards.Item>

      <CheckboxCards.Item value="enterprise">
        <Flex direction="column" gap="3">
          <Flex direction="column" gap="1">
            <Text size="5" weight="bold">Enterprise</Text>
            <Text size="2" color="gray">For organizations</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Text size="6" weight="bold">Custom</Text>
            <Text size="1" color="gray">Contact sales</Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Everything in Pro</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Dedicated support</Text>
            </Flex>
            <Flex gap="2" align="center">
              <Icon name="check" size={16} color="var(--green-9)" />
              <Text size="2">Custom SLA</Text>
            </Flex>
          </Flex>
        </Flex>
      </CheckboxCards.Item>
    </CheckboxCards.Root>
  ),
};

