import type { Meta, StoryObj } from '@storybook/react';
import { TabNav, Flex, Card, Text } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Tab Nav',
  component: TabNav.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabNav.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TabNav.Root>
      <TabNav.Link href="#" active>
        Home
      </TabNav.Link>
      <TabNav.Link href="#">Projects</TabNav.Link>
      <TabNav.Link href="#">Team</TabNav.Link>
      <TabNav.Link href="#">Settings</TabNav.Link>
    </TabNav.Root>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <TabNav.Root>
      <TabNav.Link href="#" active>
        <Icon name="home" size={18} />
        Home
      </TabNav.Link>
      <TabNav.Link href="#">
        <Icon name="folder" size={18} />
        Projects
      </TabNav.Link>
      <TabNav.Link href="#">
        <Icon name="group" size={18} />
        Team
      </TabNav.Link>
      <TabNav.Link href="#">
        <Icon name="settings" size={18} />
        Settings
      </TabNav.Link>
    </TabNav.Root>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TabNav.Root>
        <TabNav.Link href="#overview" active>
          Overview
        </TabNav.Link>
        <TabNav.Link href="#activity">Activity</TabNav.Link>
        <TabNav.Link href="#analytics">Analytics</TabNav.Link>
        <TabNav.Link href="#reports">Reports</TabNav.Link>
      </TabNav.Root>

      <Card>
        <Text>
          Overview content would go here. This is where you'd display the main dashboard
          information and key metrics.
        </Text>
      </Card>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 1 (Small)</Text>
        <TabNav.Root size="1">
          <TabNav.Link href="#" active>Tab 1</TabNav.Link>
          <TabNav.Link href="#">Tab 2</TabNav.Link>
          <TabNav.Link href="#">Tab 3</TabNav.Link>
        </TabNav.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 2 (Default)</Text>
        <TabNav.Root size="2">
          <TabNav.Link href="#" active>Tab 1</TabNav.Link>
          <TabNav.Link href="#">Tab 2</TabNav.Link>
          <TabNav.Link href="#">Tab 3</TabNav.Link>
        </TabNav.Root>
      </Flex>
    </Flex>
  ),
};

export const Navigation: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TabNav.Root>
        <TabNav.Link href="#dashboard" active>
          <Icon name="dashboard" size={18} />
          Dashboard
        </TabNav.Link>
        <TabNav.Link href="#projects">
          <Icon name="work" size={18} />
          Projects
        </TabNav.Link>
        <TabNav.Link href="#tasks">
          <Icon name="checklist" size={18} />
          Tasks
        </TabNav.Link>
        <TabNav.Link href="#calendar">
          <Icon name="calendar_month" size={18} />
          Calendar
        </TabNav.Link>
        <TabNav.Link href="#team">
          <Icon name="group" size={18} />
          Team
        </TabNav.Link>
      </TabNav.Root>

      <Card>
        <Flex direction="column" gap="3">
          <Text size="5" weight="bold">Dashboard</Text>
          <Text size="2" color="gray">
            Welcome to your dashboard. Here you'll find an overview of your recent activity
            and important metrics.
          </Text>
        </Flex>
      </Card>
    </Flex>
  ),
};

export const ProfileNavigation: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TabNav.Root>
        <TabNav.Link href="#profile" active>
          Profile
        </TabNav.Link>
        <TabNav.Link href="#account">Account</TabNav.Link>
        <TabNav.Link href="#notifications">Notifications</TabNav.Link>
        <TabNav.Link href="#security">Security</TabNav.Link>
        <TabNav.Link href="#billing">Billing</TabNav.Link>
      </TabNav.Root>

      <Card>
        <Flex direction="column" gap="3">
          <Text size="5" weight="bold">Profile Settings</Text>
          <Text size="2" color="gray">
            Manage your personal information and preferences.
          </Text>
        </Flex>
      </Card>
    </Flex>
  ),
};

export const DocumentTabs: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <TabNav.Root>
        <TabNav.Link href="#readme" active>
          <Icon name="description" size={18} />
          README.md
        </TabNav.Link>
        <TabNav.Link href="#license">
          <Icon name="gavel" size={18} />
          LICENSE
        </TabNav.Link>
        <TabNav.Link href="#contributing">
          <Icon name="code" size={18} />
          CONTRIBUTING.md
        </TabNav.Link>
      </TabNav.Root>

      <Card>
        <Flex direction="column" gap="2">
          <Text size="4" weight="bold"># README</Text>
          <Text size="2" color="gray">
            This is the main documentation file for the project.
          </Text>
        </Flex>
      </Card>
    </Flex>
  ),
};

