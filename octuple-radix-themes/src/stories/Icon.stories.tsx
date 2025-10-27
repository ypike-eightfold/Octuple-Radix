import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Text } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Material Symbol icon name',
    },
    size: {
      control: 'number',
      description: 'Icon size in pixels',
    },
    color: {
      control: 'color',
      description: 'Icon color',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'home',
    size: 24,
  },
};

export const AllSizes: Story = {
  render: () => (
    <Flex gap="4" align="center">
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={16} />
        <Text size="1">16px</Text>
      </Flex>
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={20} />
        <Text size="1">20px</Text>
      </Flex>
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={24} />
        <Text size="1">24px</Text>
      </Flex>
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={32} />
        <Text size="1">32px</Text>
      </Flex>
      <Flex direction="column" align="center" gap="2">
        <Icon name="star" size={48} />
        <Text size="1">48px</Text>
      </Flex>
    </Flex>
  ),
};

export const CommonIcons: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex gap="3" wrap="wrap">
        {[
          'home',
          'settings',
          'person',
          'search',
          'notifications',
          'favorite',
          'shopping_cart',
          'mail',
          'check',
          'close',
          'add',
          'remove',
          'edit',
          'delete',
          'download',
          'upload',
          'visibility',
          'visibility_off',
          'lock',
          'arrow_forward',
          'arrow_back',
          'expand_more',
          'expand_less',
          'info',
        ].map((iconName) => (
          <Flex
            key={iconName}
            direction="column"
            align="center"
            gap="2"
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid var(--gray-6)',
              minWidth: '100px',
            }}
          >
            <Icon name={iconName} size={24} />
            <Text size="1" color="gray" style={{ textAlign: 'center', fontSize: '11px' }}>
              {iconName}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Text size="2" color="gray" align="center">
        Browse 2,500+ icons at{' '}
        <a
          href="https://fonts.google.com/icons"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent-9)' }}
        >
          fonts.google.com/icons
        </a>
      </Text>
    </Flex>
  ),
};

export const Colored: Story = {
  render: () => (
    <Flex gap="4">
      <Icon name="favorite" size={32} color="var(--red-9)" />
      <Icon name="star" size={32} color="var(--amber-9)" />
      <Icon name="check_circle" size={32} color="var(--green-9)" />
      <Icon name="info" size={32} color="var(--blue-9)" />
      <Icon name="ac_unit" size={32} color="var(--cyan-9)" />
      <Icon name="palette" size={32} color="var(--indigo-9)" />
    </Flex>
  ),
};

