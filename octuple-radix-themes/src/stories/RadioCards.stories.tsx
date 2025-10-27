import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Text, RadioCards } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Radio Cards',
  component: RadioCards.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioCards.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioCards.Root defaultValue="1" columns="1">
      <RadioCards.Item value="1">
        <Flex direction="column" gap="1">
          <Text weight="bold">Option 1</Text>
          <Text size="2" color="gray">First choice available</Text>
        </Flex>
      </RadioCards.Item>
      <RadioCards.Item value="2">
        <Flex direction="column" gap="1">
          <Text weight="bold">Option 2</Text>
          <Text size="2" color="gray">Second choice available</Text>
        </Flex>
      </RadioCards.Item>
      <RadioCards.Item value="3">
        <Flex direction="column" gap="1">
          <Text weight="bold">Option 3</Text>
          <Text size="2" color="gray">Third choice available</Text>
        </Flex>
      </RadioCards.Item>
    </RadioCards.Root>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <RadioCards.Root defaultValue="design" columns="1">
      <RadioCards.Item value="design">
        <Flex gap="3" align="start">
          <Icon name="palette" size={24} color="var(--indigo-9)" />
          <Flex direction="column" gap="1">
            <Text weight="bold">Design</Text>
            <Text size="2" color="gray">
              UI/UX design, prototyping, and visual design
            </Text>
          </Flex>
        </Flex>
      </RadioCards.Item>
      <RadioCards.Item value="development">
        <Flex gap="3" align="start">
          <Icon name="code" size={24} color="var(--blue-9)" />
          <Flex direction="column" gap="1">
            <Text weight="bold">Development</Text>
            <Text size="2" color="gray">
              Frontend, backend, and full-stack development
            </Text>
          </Flex>
        </Flex>
      </RadioCards.Item>
      <RadioCards.Item value="marketing">
        <Flex gap="3" align="start">
          <Icon name="campaign" size={24} color="var(--green-9)" />
          <Flex direction="column" gap="1">
            <Text weight="bold">Marketing</Text>
            <Text size="2" color="gray">
              Digital marketing, content, and SEO
            </Text>
          </Flex>
        </Flex>
      </RadioCards.Item>
    </RadioCards.Root>
  ),
};

export const MultiColumn: Story = {
  render: () => (
    <RadioCards.Root defaultValue="1" columns={{ initial: '1', sm: '2', md: '3' }}>
      <RadioCards.Item value="1">
        <Text weight="bold">Option 1</Text>
      </RadioCards.Item>
      <RadioCards.Item value="2">
        <Text weight="bold">Option 2</Text>
      </RadioCards.Item>
      <RadioCards.Item value="3">
        <Text weight="bold">Option 3</Text>
      </RadioCards.Item>
    </RadioCards.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 1 (Small)</Text>
        <RadioCards.Root defaultValue="1" size="1" columns="1">
          <RadioCards.Item value="1">Small card 1</RadioCards.Item>
          <RadioCards.Item value="2">Small card 2</RadioCards.Item>
        </RadioCards.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 2 (Default)</Text>
        <RadioCards.Root defaultValue="1" size="2" columns="1">
          <RadioCards.Item value="1">Default card 1</RadioCards.Item>
          <RadioCards.Item value="2">Default card 2</RadioCards.Item>
        </RadioCards.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 3 (Large)</Text>
        <RadioCards.Root defaultValue="1" size="3" columns="1">
          <RadioCards.Item value="1">Large card 1</RadioCards.Item>
          <RadioCards.Item value="2">Large card 2</RadioCards.Item>
        </RadioCards.Root>
      </Flex>
    </Flex>
  ),
};

export const PlanSelection: Story = {
  render: () => (
    <RadioCards.Root defaultValue="pro" columns={{ initial: '1', sm: '3' }}>
      <RadioCards.Item value="free">
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
      </RadioCards.Item>

      <RadioCards.Item value="pro">
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
      </RadioCards.Item>

      <RadioCards.Item value="enterprise">
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
      </RadioCards.Item>
    </RadioCards.Root>
  ),
};

export const ShippingMethod: Story = {
  render: () => (
    <RadioCards.Root defaultValue="standard" columns="1">
      <RadioCards.Item value="standard">
        <Flex justify="between" align="center">
          <Flex direction="column" gap="1">
            <Text weight="bold">Standard Shipping</Text>
            <Text size="2" color="gray">5-7 business days</Text>
          </Flex>
          <Text weight="bold">Free</Text>
        </Flex>
      </RadioCards.Item>
      <RadioCards.Item value="express">
        <Flex justify="between" align="center">
          <Flex direction="column" gap="1">
            <Text weight="bold">Express Shipping</Text>
            <Text size="2" color="gray">2-3 business days</Text>
          </Flex>
          <Text weight="bold">$9.99</Text>
        </Flex>
      </RadioCards.Item>
      <RadioCards.Item value="overnight">
        <Flex justify="between" align="center">
          <Flex direction="column" gap="1">
            <Text weight="bold">Overnight Shipping</Text>
            <Text size="2" color="gray">Next business day</Text>
          </Flex>
          <Text weight="bold">$19.99</Text>
        </Flex>
      </RadioCards.Item>
    </RadioCards.Root>
  ),
};

