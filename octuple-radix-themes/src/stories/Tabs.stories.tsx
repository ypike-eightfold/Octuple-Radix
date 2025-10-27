import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Box, Text, Flex, Card } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="account">
          <Text size="2">Make changes to your account here.</Text>
        </Tabs.Content>

        <Tabs.Content value="documents">
          <Text size="2">Access and manage your documents.</Text>
        </Tabs.Content>

        <Tabs.Content value="settings">
          <Text size="2">Edit your profile or update contact information.</Text>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">
          <Icon name="dashboard" size={18} />
          Overview
        </Tabs.Trigger>
        <Tabs.Trigger value="analytics">
          <Icon name="analytics" size={18} />
          Analytics
        </Tabs.Trigger>
        <Tabs.Trigger value="reports">
          <Icon name="description" size={18} />
          Reports
        </Tabs.Trigger>
        <Tabs.Trigger value="notifications">
          <Icon name="notifications" size={18} />
          Notifications
        </Tabs.Trigger>
      </Tabs.List>

      <Box pt="4">
        <Tabs.Content value="overview">
          <Card>
            <Flex direction="column" gap="3">
              <Text size="4" weight="bold">Overview Dashboard</Text>
              <Text size="2" color="gray">
                Your key metrics and performance indicators at a glance.
              </Text>
            </Flex>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="analytics">
          <Card>
            <Flex direction="column" gap="3">
              <Text size="4" weight="bold">Analytics</Text>
              <Text size="2" color="gray">
                Detailed insights and trends for your business.
              </Text>
            </Flex>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="reports">
          <Card>
            <Flex direction="column" gap="3">
              <Text size="4" weight="bold">Reports</Text>
              <Text size="2" color="gray">
                Generate and download comprehensive reports.
              </Text>
            </Flex>
          </Card>
        </Tabs.Content>

        <Tabs.Content value="notifications">
          <Card>
            <Flex direction="column" gap="3">
              <Text size="4" weight="bold">Notifications</Text>
              <Text size="2" color="gray">
                Manage your notification preferences and alerts.
              </Text>
            </Flex>
          </Card>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs.Root defaultValue="profile" orientation="vertical">
      <Flex gap="4">
        <Tabs.List>
          <Tabs.Trigger value="profile">
            <Icon name="person" size={18} />
            Profile
          </Tabs.Trigger>
          <Tabs.Trigger value="password">
            <Icon name="lock" size={18} />
            Password
          </Tabs.Trigger>
          <Tabs.Trigger value="team">
            <Icon name="group" size={18} />
            Team
          </Tabs.Trigger>
          <Tabs.Trigger value="billing">
            <Icon name="credit_card" size={18} />
            Billing
          </Tabs.Trigger>
        </Tabs.List>

        <Box flexGrow="1">
          <Tabs.Content value="profile">
            <Card>
              <Flex direction="column" gap="3">
                <Text size="4" weight="bold">Profile Settings</Text>
                <Text size="2">Update your profile information and preferences.</Text>
              </Flex>
            </Card>
          </Tabs.Content>

          <Tabs.Content value="password">
            <Card>
              <Flex direction="column" gap="3">
                <Text size="4" weight="bold">Password & Security</Text>
                <Text size="2">Manage your password and security settings.</Text>
              </Flex>
            </Card>
          </Tabs.Content>

          <Tabs.Content value="team">
            <Card>
              <Flex direction="column" gap="3">
                <Text size="4" weight="bold">Team Management</Text>
                <Text size="2">Invite team members and manage permissions.</Text>
              </Flex>
            </Card>
          </Tabs.Content>

          <Tabs.Content value="billing">
            <Card>
              <Flex direction="column" gap="3">
                <Text size="4" weight="bold">Billing & Plans</Text>
                <Text size="2">Manage your subscription and payment methods.</Text>
              </Flex>
            </Card>
          </Tabs.Content>
        </Box>
      </Flex>
    </Tabs.Root>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="6">
      <Box>
        <Text size="2" weight="bold" mb="2">Size 1</Text>
        <Tabs.Root defaultValue="tab1" size="1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">First</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Second</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Third</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Box>

      <Box>
        <Text size="2" weight="bold" mb="2">Size 2 (Default)</Text>
        <Tabs.Root defaultValue="tab1" size="2">
          <Tabs.List>
            <Tabs.Trigger value="tab1">First</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Second</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Third</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Box>
    </Flex>
  ),
};

