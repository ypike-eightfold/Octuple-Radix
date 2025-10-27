import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar';
import { Icon } from '../components/Icon';
import { Text, IconButton, Badge } from '@radix-ui/themes';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    logo: <Text size="5" weight="bold">Octuple</Text>,
    links: [
      { label: 'Dashboard', href: '#dashboard' },
      { label: 'Projects', href: '#projects' },
      { label: 'Team', href: '#team' },
      { label: 'Settings', href: '#settings' },
    ],
    user: {
      name: 'John Doe',
      email: 'john@example.com',
    },
    onLogout: () => alert('Logout clicked!'),
  },
};

export const WithIcons = {
  args: {
    logo: <Text size="5" weight="bold">Octuple</Text>,
    links: [
      { label: 'Dashboard', href: '#dashboard', icon: 'dashboard' },
      { label: 'Analytics', href: '#analytics', icon: 'analytics' },
      { label: 'Messages', href: '#messages', icon: 'mail' },
      { label: 'Calendar', href: '#calendar', icon: 'calendar_month' },
    ],
    user: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      avatar: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=64&h=64&fit=crop',
    },
    onLogout: () => alert('Logout clicked!'),
  },
};

export const WithActions = {
  args: {
    logo: <Text size="5" weight="bold">Octuple</Text>,
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Explore', href: '#explore' },
      { label: 'Library', href: '#library' },
    ],
    actions: (
      <>
        <IconButton variant="ghost">
          <Icon name="search" size={20} />
        </IconButton>
        <IconButton variant="ghost" style={{ position: 'relative' }}>
          <Icon name="notifications" size={20} />
          <Badge
            color="red"
            style={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              minWidth: '16px',
              height: '16px',
              padding: '0 4px',
            }}
          >
            3
          </Badge>
        </IconButton>
      </>
    ),
    user: {
      name: 'Alex Johnson',
      email: 'alex@example.com',
    },
    onLogout: () => alert('Logout clicked!'),
  },
};

export const MinimalNavbar = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon name="dashboard" size={24} style={{ color: 'var(--indigo-9)' }} />
        <Text size="5" weight="bold">Brand</Text>
      </div>
    ),
    user: {
      name: 'User',
      email: 'user@example.com',
    },
    onLogout: () => alert('Logout clicked!'),
  },
};

export const WithoutUser = {
  args: {
    logo: <Text size="5" weight="bold">Public Site</Text>,
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },
};

export const EcommerceNavbar = {
  args: {
    logo: <Text size="5" weight="bold">Shop</Text>,
    links: [
      { label: 'Products', href: '#products' },
      { label: 'Categories', href: '#categories' },
      { label: 'Deals', href: '#deals' },
    ],
    actions: (
      <>
        <IconButton variant="ghost">
          <Icon name="favorite_border" size={20} />
        </IconButton>
        <IconButton variant="ghost" style={{ position: 'relative' }}>
          <Icon name="shopping_cart" size={20} />
          <Badge
            color="indigo"
            style={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              minWidth: '16px',
              height: '16px',
              padding: '0 4px',
            }}
          >
            5
          </Badge>
        </IconButton>
      </>
    ),
    user: {
      name: 'Shopper',
      email: 'shopper@example.com',
    },
    onLogout: () => alert('Logout clicked!'),
  },
};

