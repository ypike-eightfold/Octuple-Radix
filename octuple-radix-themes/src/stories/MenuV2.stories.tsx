import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MenuV2, MenuSize, MenuVariant, MenuItemType, MenuItemIconAlign } from '../components/MenuV2';
import * as Popover from '@radix-ui/react-popover';
import { ButtonV2 } from '../components/ButtonV2';

const meta: Meta<typeof MenuV2> = {
  title: 'Octuple V2.5/MenuV2',
  component: MenuV2,
  parameters: {
    docs: {
      description: {
        component: `
A Menu is a component that offers a grouped list of choices to the person using the app.

## Features
- Built with Radix UI Primitives for accessibility
- Keyboard navigation (arrow keys, home, end, tab)
- 3 sizes: Small, Medium, Large
- 3 variants: Neutral, Primary, Disruptive
- Support for icons, counters, subtext, secondary actions
- Submenu/nested menu support
- Link and button items
- Separators and subheaders
- Optional header and footer with buttons

## Usage
\`\`\`tsx
<MenuV2
  items={[
    { text: 'Profile', iconProps: { name: 'person', type: 'material' } },
    { text: 'Settings', iconProps: { name: 'settings', type: 'material' } },
    { type: MenuItemType.separator },
    { text: 'Logout', variant: MenuVariant.disruptive }
  ]}
  onChange={(value) => console.log(value)}
/>
\`\`\`

**Note:** This component can be used standalone or as content for Dropdown/Popover components.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      options: [MenuVariant.neutral, MenuVariant.primary, MenuVariant.disruptive],
      control: { type: 'radio' },
    },
    size: {
      options: [MenuSize.small, MenuSize.medium, MenuSize.large],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuV2>;

// ========== BASIC STORIES ==========

export const Basic: Story = {
  args: {
    items: [
      {
        iconProps: { name: 'calendar_month', type: 'material', size: 20 },
        text: 'Date',
        value: 'menu-1',
        counter: '8',
        secondaryButtonProps: {
          iconProps: { name: 'delete', type: 'material', size: 20 },
          onClick: () => console.log('Delete clicked'),
        },
      },
      {
        text: 'Disabled button',
        value: 'menu-2',
        disabled: true,
        subText: 'This is a sub text',
      },
      {
        iconProps: { name: 'calendar_month', type: 'material', size: 20 },
        text: 'Active item',
        value: 'menu-3',
        active: true,
        counter: '8',
      },
      {
        text: 'Button',
        value: 'menu-4',
      },
      {
        iconProps: { name: 'schedule', type: 'material', size: 20 },
        text: 'Time',
        value: 'menu-5',
        counter: '12',
      },
      {
        text: 'Another button',
        value: 'menu-6',
      },
    ],
    onChange: (value) => console.log('Changed:', value),
  },
};

export const Link_Items: Story = {
  args: {
    items: [
      {
        type: MenuItemType.link,
        text: 'X link',
        href: 'https://x.com',
        target: '_blank',
      },
      {
        type: MenuItemType.link,
        text: 'Facebook link',
        href: 'https://facebook.com',
        target: '_blank',
      },
      {
        type: MenuItemType.link,
        text: 'GitHub link',
        subText: 'Open in new tab',
        href: 'https://github.com',
        target: '_blank',
        iconProps: { name: 'link', type: 'material', size: 20 },
      },
    ],
  },
};

export const With_Header: Story = {
  args: {
    header: 'Menu Header',
    items: [
      { text: 'Item 1', value: '1' },
      { text: 'Item 2', value: '2' },
      { text: 'Item 3', value: '3' },
    ],
  },
};

export const With_Footer: Story = {
  args: {
    items: [
      { text: 'Item 1', value: '1' },
      { text: 'Item 2', value: '2' },
      { text: 'Item 3', value: '3' },
    ],
    okButtonProps: {
      text: 'Apply',
      onClick: () => console.log('OK clicked'),
    },
    cancelButtonProps: {
      text: 'Cancel',
      onClick: () => console.log('Cancel clicked'),
    },
  },
};

export const With_Subheaders: Story = {
  args: {
    items: [
      { type: MenuItemType.subHeader, text: 'Recent' },
      { text: 'Document 1', iconProps: { name: 'description', type: 'material', size: 20 } },
      { text: 'Document 2', iconProps: { name: 'description', type: 'material', size: 20 } },
      { type: MenuItemType.separator },
      { type: MenuItemType.subHeader, text: 'Actions' },
      { text: 'Create new', iconProps: { name: 'add', type: 'material', size: 20 } },
      { text: 'Upload', iconProps: { name: 'upload', type: 'material', size: 20 } },
    ],
  },
};

export const With_Submenu: Story = {
  args: {
    items: [
      { text: 'Item 1', value: '1' },
      {
        text: 'More options',
        iconProps: { name: 'more_horiz', type: 'material', size: 20 },
        dropdownMenuItems: [
          { text: 'Submenu Item 1', value: 'sub-1' },
          { text: 'Submenu Item 2', value: 'sub-2' },
          { type: MenuItemType.separator },
          { text: 'Submenu Item 3', value: 'sub-3' },
        ],
      },
      { text: 'Item 3', value: '3' },
    ],
    onChange: (value) => console.log('Changed:', value),
  },
};

// ========== SIZE VARIANTS ==========

export const Size_Small: Story = {
  args: {
    size: MenuSize.small,
    items: [
      { text: 'Small Item 1', iconProps: { name: 'star', type: 'material', size: 18 } },
      { text: 'Small Item 2', iconProps: { name: 'favorite', type: 'material', size: 18 } },
      { text: 'Small Item 3', iconProps: { name: 'bookmark', type: 'material', size: 18 } },
    ],
  },
};

export const Size_Large: Story = {
  args: {
    size: MenuSize.large,
    items: [
      { text: 'Large Item 1', iconProps: { name: 'star', type: 'material', size: 24 } },
      { text: 'Large Item 2', iconProps: { name: 'favorite', type: 'material', size: 24 } },
      { text: 'Large Item 3', iconProps: { name: 'bookmark', type: 'material', size: 24 } },
    ],
  },
};

// ========== VARIANT STYLES ==========

export const Variant_Neutral: Story = {
  args: {
    variant: MenuVariant.neutral,
    items: [
      { text: 'Neutral Item 1', iconProps: { name: 'info', type: 'material', size: 20 } },
      { text: 'Neutral Item 2', iconProps: { name: 'check', type: 'material', size: 20 } },
      { text: 'Neutral Item 3', iconProps: { name: 'star', type: 'material', size: 20 } },
    ],
  },
};

export const Variant_Primary: Story = {
  args: {
    variant: MenuVariant.primary,
    items: [
      { text: 'Primary Item 1', iconProps: { name: 'add', type: 'material', size: 20 } },
      { text: 'Primary Item 2', iconProps: { name: 'edit', type: 'material', size: 20 } },
      { text: 'Primary Item 3', iconProps: { name: 'save', type: 'material', size: 20 } },
    ],
  },
};

export const Variant_Disruptive: Story = {
  args: {
    variant: MenuVariant.disruptive,
    items: [
      { text: 'Delete', iconProps: { name: 'delete', type: 'material', size: 20 } },
      { text: 'Remove', iconProps: { name: 'remove_circle', type: 'material', size: 20 } },
      { text: 'Clear', iconProps: { name: 'clear', type: 'material', size: 20 } },
    ],
  },
};

// ========== IN POPOVER ==========

export const In_Popover: Story = {
  render: () => {
    const menuItems = [
      { text: 'Profile', iconProps: { name: 'person', type: 'material', size: 20 }, value: 'profile' },
      { text: 'Settings', iconProps: { name: 'settings', type: 'material', size: 20 }, value: 'settings' },
      { type: MenuItemType.separator },
      { text: 'Help', iconProps: { name: 'help', type: 'material', size: 20 }, value: 'help' },
      { text: 'Logout', iconProps: { name: 'logout', type: 'material', size: 20 }, value: 'logout', variant: MenuVariant.disruptive },
    ];

    return (
      <Popover.Root>
        <Popover.Trigger asChild>
          <ButtonV2 iconProps={{ name: 'menu', type: 'material', size: 20 }}>
            Open Menu
          </ButtonV2>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="popover-v2-content" sideOffset={5}>
            <MenuV2 items={menuItems} onChange={(value) => console.log('Selected:', value)} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  },
};

// ========== COMPLEX EXAMPLE ==========

export const Complex_Menu: Story = {
  args: {
    header: 'User Actions',
    size: MenuSize.medium,
    items: [
      {
        type: MenuItemType.subHeader,
        text: 'Profile',
      },
      {
        text: 'View Profile',
        iconProps: { name: 'person', type: 'material', size: 20 },
        value: 'view-profile',
      },
      {
        text: 'Edit Profile',
        iconProps: { name: 'edit', type: 'material', size: 20 },
        value: 'edit-profile',
      },
      {
        type: MenuItemType.separator,
      },
      {
        type: MenuItemType.subHeader,
        text: 'Notifications',
      },
      {
        text: 'All Notifications',
        iconProps: { name: 'notifications', type: 'material', size: 20 },
        counter: '12',
        value: 'notifications',
      },
      {
        text: 'Messages',
        iconProps: { name: 'mail', type: 'material', size: 20 },
        counter: '5',
        value: 'messages',
        active: true,
      },
      {
        type: MenuItemType.separator,
      },
      {
        text: 'Settings',
        iconProps: { name: 'settings', type: 'material', size: 20 },
        value: 'settings',
        dropdownMenuItems: [
          { text: 'General', value: 'general' },
          { text: 'Privacy', value: 'privacy' },
          { text: 'Security', value: 'security' },
        ],
      },
      {
        text: 'Help & Support',
        iconProps: { name: 'help', type: 'material', size: 20 },
        value: 'help',
      },
      {
        type: MenuItemType.separator,
      },
      {
        text: 'Logout',
        iconProps: { name: 'logout', type: 'material', size: 20 },
        value: 'logout',
        variant: MenuVariant.disruptive,
      },
    ],
    onChange: (value) => console.log('Menu changed:', value),
  },
};

