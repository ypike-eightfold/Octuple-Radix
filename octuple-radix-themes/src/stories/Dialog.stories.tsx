import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, Button, Flex, TextField, Text } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Dialog',
  component: Dialog.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <Icon name="edit" size={18} />
          Edit profile
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root defaultValue="Freja Johnsen" placeholder="Enter your full name" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root defaultValue="freja@example.com" placeholder="Enter your email" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="soft">
          <Icon name="info" size={18} />
          Learn more
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Flex gap="3" direction="column" align="center">
          <Icon name="check_circle" size={48} color="var(--accent-9)" />
          <Dialog.Title align="center">Success!</Dialog.Title>
          <Dialog.Description size="2" align="center">
            Your profile has been updated successfully.
          </Dialog.Description>

          <Flex gap="3" mt="4" width="100%" justify="center">
            <Dialog.Close>
              <Button size="3">Got it</Button>
            </Dialog.Close>
          </Flex>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  ),
};

export const AlertDialog: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color="red" variant="soft">
          <Icon name="delete" size={18} />
          Delete account
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Are you absolutely sure?</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button color="red">Yes, delete account</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  ),
};

