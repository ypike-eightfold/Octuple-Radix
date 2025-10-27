import type { Meta, StoryObj } from '@storybook/react';
import { Popover, Button, Flex, Text, TextField } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Popover',
  component: Popover.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">
          <Icon name="more_horiz" size={18} />
          Open Popover
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 300 }}>
        <Flex direction="column" gap="3">
          <Text size="2" weight="bold">Popover Title</Text>
          <Text size="2" color="gray">
            This is a popover with some content. You can put any content here.
          </Text>
          <Flex gap="2" justify="end">
            <Popover.Close>
              <Button variant="soft" color="gray" size="2">
                Close
              </Button>
            </Popover.Close>
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>
        <Button>
          <Icon name="edit" size={18} />
          Edit Profile
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <Flex direction="column" gap="3">
          <Text size="3" weight="bold">Edit Profile</Text>
          <Flex direction="column" gap="2">
            <Text as="label" size="2" weight="bold">
              Name
            </Text>
            <TextField.Root placeholder="Enter your name" />
          </Flex>
          <Flex direction="column" gap="2">
            <Text as="label" size="2" weight="bold">
              Email
            </Text>
            <TextField.Root type="email" placeholder="Enter your email" />
          </Flex>
          <Flex gap="2" justify="end" mt="2">
            <Popover.Close>
              <Button variant="soft" color="gray" size="2">
                Cancel
              </Button>
            </Popover.Close>
            <Popover.Close>
              <Button size="2">
                Save
              </Button>
            </Popover.Close>
          </Flex>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>
        <Button 
          variant="ghost" 
          size="2"
          style={{ 
            aspectRatio: '1',
            padding: 0,
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Icon name="info" size={20} />
        </Button>
      </Popover.Trigger>
      <Popover.Content style={{ width: 280 }}>
        <Flex direction="column" gap="2">
          <Flex gap="2" align="center">
            <Icon name="info" size={20} color="var(--accent-9)" />
            <Text size="3" weight="bold">Information</Text>
          </Flex>
          <Text size="2" color="gray">
            Click on any item to learn more about it. Hover over icons for quick tooltips.
          </Text>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex gap="3">
      <Popover.Root>
        <Popover.Trigger>
          <Button size="1">Size 1</Button>
        </Popover.Trigger>
        <Popover.Content style={{ width: 200 }}>
          <Text size="1">Small popover content</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger>
          <Button size="2">Size 2</Button>
        </Popover.Trigger>
        <Popover.Content style={{ width: 250 }}>
          <Text size="2">Medium popover content</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger>
          <Button size="3">Size 3</Button>
        </Popover.Trigger>
        <Popover.Content style={{ width: 300 }}>
          <Text size="3">Large popover content</Text>
        </Popover.Content>
      </Popover.Root>
    </Flex>
  ),
};

