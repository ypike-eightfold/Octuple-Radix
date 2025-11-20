import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavTabV2, NavTabV2Props, NavTabV2Item } from '../components/NavTabV2';

const meta: Meta<typeof NavTabV2> = {
  title: 'Octuple V2.5/NavTab',
  component: NavTabV2,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Large Navigation Tabs component with multiple states and sizes. Supports both controlled and uncontrolled modes.',
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
type Story = StoryObj<typeof NavTabV2>;

// Sample tabs data
const sampleTabs: NavTabV2Item[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Overview content goes here</div>,
  },
  {
    id: 'details',
    label: 'Details',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Details content goes here</div>,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Analytics content goes here</div>,
  },
  {
    id: 'settings',
    label: 'Settings',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Settings content goes here</div>,
  },
  {
    id: 'help',
    label: 'Help',
    content: <div style={{ padding: '20px', background: '#f6f7f8', borderRadius: '8px' }}>Help content goes here</div>,
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
    const [value, setValue] = useState('details');
    
    return (
      <div>
        <NavTabV2
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

// Three tabs (matching Figma design closely)
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

// Five tabs (matching Figma design exactly)
export const FiveTabs: Story = {
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
      {
        id: 'tab4',
        label: 'Tab',
      },
      {
        id: 'tab5',
        label: 'Tab',
      },
    ],
    size: 'large',
    renderContent: false,
  },
};

// Navigation example with realistic labels
export const NavigationExample: Story = {
  args: {
    tabs: [
      {
        id: 'home',
        label: 'Home',
      },
      {
        id: 'products',
        label: 'Products',
      },
      {
        id: 'about',
        label: 'About',
      },
      {
        id: 'contact',
        label: 'Contact',
      },
    ],
    size: 'large',
    renderContent: false,
  },
};

