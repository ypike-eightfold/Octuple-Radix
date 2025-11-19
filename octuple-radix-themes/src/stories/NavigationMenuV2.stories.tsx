import type { Meta, StoryObj } from '@storybook/react';
import { NavigationMenuV2 } from '../components/NavigationMenuV2';

const meta = {
  title: 'Octuple V2.5/NavigationMenu',
  component: NavigationMenuV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown navigation menu component used in NavbarV2 for tab dropdowns.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showArrow: {
      control: 'boolean',
      description: 'Whether to show the arrow pointer',
    },
    arrowPosition: {
      control: 'number',
      description: 'Position of the arrow (left offset in pixels)',
    },
  },
} satisfies Meta<typeof NavigationMenuV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TalentMenu: Story = {
  args: {
    items: [
      {
        icon: 'person',
        label: 'Candidates',
        description: 'Browse through all the candidates',
        onClick: () => console.log('Candidates clicked'),
      },
      {
        icon: 'groups',
        label: 'Communities',
        description: 'Access to dozens of talent communities',
        onClick: () => console.log('Communities clicked'),
      },
    ],
    showArrow: true,
    arrowPosition: 24,
  },
};

export const EngageMenu: Story = {
  args: {
    items: [
      {
        icon: 'mail',
        label: 'Email Campaigns',
        description: 'Send targeted email campaigns',
        onClick: () => console.log('Email clicked'),
      },
      {
        icon: 'campaign',
        label: 'Nurture Programs',
        description: 'Automated talent nurturing',
        onClick: () => console.log('Nurture clicked'),
      },
      {
        icon: 'event',
        label: 'Events',
        description: 'Manage recruitment events',
        onClick: () => console.log('Events clicked'),
      },
    ],
    showArrow: true,
    arrowPosition: 24,
  },
};

export const MoreMenu: Story = {
  args: {
    items: [
      {
        icon: 'settings',
        label: 'Settings',
        description: 'Manage your preferences',
        onClick: () => console.log('Settings clicked'),
      },
      {
        icon: 'help',
        label: 'Help & Support',
        description: 'Get help when you need it',
        onClick: () => console.log('Help clicked'),
      },
      {
        icon: 'info',
        label: 'About',
        description: 'Learn more about the platform',
        onClick: () => console.log('About clicked'),
      },
      {
        icon: 'logout',
        label: 'Sign Out',
        description: 'Log out of your account',
        onClick: () => console.log('Logout clicked'),
      },
    ],
    showArrow: true,
    arrowPosition: 24,
  },
};

export const WithoutDescriptions: Story = {
  args: {
    items: [
      {
        icon: 'dashboard',
        label: 'Dashboard',
        onClick: () => console.log('Dashboard clicked'),
      },
      {
        icon: 'analytics',
        label: 'Analytics',
        onClick: () => console.log('Analytics clicked'),
      },
      {
        icon: 'report',
        label: 'Reports',
        onClick: () => console.log('Reports clicked'),
      },
    ],
    showArrow: true,
    arrowPosition: 24,
  },
};

export const WithoutIcons: Story = {
  args: {
    items: [
      {
        label: 'Profile Settings',
        description: 'Update your profile information',
        onClick: () => console.log('Profile clicked'),
      },
      {
        label: 'Notifications',
        description: 'Manage notification preferences',
        onClick: () => console.log('Notifications clicked'),
      },
      {
        label: 'Privacy',
        description: 'Control your privacy settings',
        onClick: () => console.log('Privacy clicked'),
      },
    ],
    showArrow: true,
    arrowPosition: 24,
  },
};

export const WithoutArrow: Story = {
  args: {
    items: [
      {
        icon: 'folder',
        label: 'Documents',
        description: 'Access your documents',
        onClick: () => console.log('Documents clicked'),
      },
      {
        icon: 'image',
        label: 'Media',
        description: 'Manage your media files',
        onClick: () => console.log('Media clicked'),
      },
    ],
    showArrow: false,
  },
};


