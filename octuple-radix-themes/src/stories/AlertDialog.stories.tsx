import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red" variant="soft">
          <Icon name="delete" size={18} />
          Delete Account
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Delete Account</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to delete your account? This action cannot be undone.
          All your data will be permanently removed.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red">
              Yes, Delete Account
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};

export const SaveChanges: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>
          <Icon name="save" size={18} />
          Save Changes
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Save Changes?</AlertDialog.Title>
        <AlertDialog.Description size="2">
          You have unsaved changes. Do you want to save them before leaving this page?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Don't Save
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button>
              Save Changes
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};

export const Logout: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="soft">
          <Icon name="logout" size={18} />
          Logout
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="400px">
        <AlertDialog.Title>Logout</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to logout? You'll need to sign in again to access your account.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button>
              Logout
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="amber" variant="soft">
          <Icon name="warning" size={18} />
          Clear Data
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <Flex direction="column" gap="3" align="center">
          <Icon name="warning" size={48} color="var(--amber-9)" />
          <AlertDialog.Title align="center">Clear All Data?</AlertDialog.Title>
          <AlertDialog.Description size="2" align="center">
            This will remove all cached data from your browser. This action cannot be undone.
          </AlertDialog.Description>

          <Flex gap="3" mt="2" width="100%" justify="center">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="amber">
                Clear Data
              </Button>
            </AlertDialog.Action>
          </Flex>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};

