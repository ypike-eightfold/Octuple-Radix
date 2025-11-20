import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PageTabV2, PageTabV2Props, PageTabV2Item } from '../components/PageTabV2';

const meta: Meta<typeof PageTabV2> = {
  title: 'Octuple V2.5/PageTab',
  component: PageTabV2,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Large Page Tabs component for vertical/page-level navigation. Built on Radix UI Tabs primitive with a thinner 2px indicator.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: 'Size variant of the tabs',
      table: {
        defaultValue: { summary: 'large' },
      },
    },
    renderContent: {
      control: 'boolean',
      description: 'Whether to render tab content',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageTabV2>;

// Sample tabs data
const sampleTabs: PageTabV2Item[] = [
  {
    id: 'profile',
    label: 'Profile',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Profile content goes here</div>,
  },
  {
    id: 'settings',
    label: 'Settings',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Settings content goes here</div>,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Notifications content goes here</div>,
  },
  {
    id: 'privacy',
    label: 'Privacy',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Privacy content goes here</div>,
  },
  {
    id: 'security',
    label: 'Security',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Security content goes here</div>,
  },
];

// Default story - Large size
export const Default: Story = {
  args: {
    tabs: sampleTabs,
    size: 'large',
    renderContent: true,
  },
};

// Large size (explicit)
export const Large: Story = {
  args: {
    tabs: sampleTabs,
    size: 'large',
    renderContent: false,
  },
};

// Medium size
export const Medium: Story = {
  args: {
    tabs: sampleTabs,
    size: 'medium',
    renderContent: false,
  },
};

// Small size
export const Small: Story = {
  args: {
    tabs: sampleTabs,
    size: 'small',
    renderContent: false,
  },
};

// With content
export const WithContent: Story = {
  args: {
    tabs: sampleTabs,
    size: 'large',
    renderContent: true,
  },
};

// With disabled tab
export const WithDisabledTab: Story = {
  args: {
    tabs: [
      ...sampleTabs.slice(0, 2),
      {
        id: 'disabled',
        label: 'Disabled',
        disabled: true,
      },
      ...sampleTabs.slice(2),
    ],
    size: 'large',
    renderContent: false,
  },
};

// Controlled mode example
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState('settings');
    
    return (
      <div>
        <PageTabV2
          {...args}
          value={value}
          onValueChange={setValue}
        />
        <div style={{ marginTop: '20px', padding: '12px', background: '#ebf7ff', borderRadius: '8px' }}>
          Current active tab: <strong>{value}</strong>
        </div>
      </div>
    );
  },
  args: {
    tabs: sampleTabs,
    size: 'large',
    renderContent: false,
  },
};

// Three tabs (matching Figma design)
export const ThreeTabs: Story = {
  args: {
    tabs: [
      {
        id: 'tab1',
        label: 'Tab',
      },
      {
        id: 'tab2',
        label: 'Tab',
      },
      {
        id: 'tab3',
        label: 'Tab',
      },
    ],
    size: 'large',
    renderContent: false,
  },
};

// Sidebar navigation example
export const SidebarNavigation: Story = {
  args: {
    tabs: [
      {
        id: 'dashboard',
        label: 'Dashboard',
      },
      {
        id: 'projects',
        label: 'Projects',
      },
      {
        id: 'team',
        label: 'Team',
      },
      {
        id: 'reports',
        label: 'Reports',
      },
      {
        id: 'settings',
        label: 'Settings',
      },
    ],
    size: 'large',
    renderContent: false,
  },
};

// Settings page example
export const SettingsPage: Story = {
  args: {
    tabs: [
      {
        id: 'general',
        label: 'General',
      },
      {
        id: 'account',
        label: 'Account',
      },
      {
        id: 'appearance',
        label: 'Appearance',
      },
      {
        id: 'notifications',
        label: 'Notifications',
      },
      {
        id: 'billing',
        label: 'Billing',
      },
    ],
    size: 'large',
    renderContent: false,
  },
};

