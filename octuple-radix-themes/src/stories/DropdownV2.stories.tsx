import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownV2 } from '../components/DropdownV2';
import { ButtonV2 } from '../components/ButtonV2';
import { MenuV2, MenuItemType, MenuSize, MenuVariant } from '../components/MenuV2';

const meta: Meta<typeof DropdownV2> = {
  title: 'Octuple V2.5/DropdownV2',
  component: DropdownV2,
  parameters: {
    docs: {
      description: {
        component: `
A Dropdown is a generic floating overlay wrapper that displays content when triggered.

## Features
- Built with Radix UI Popover for accessibility
- 2 trigger modes: Click, Hover
- 12 placement options (top, right, bottom, left + start/center/end)
- Keyboard navigation (Escape to close, Enter/Space to open)
- Click outside to close
- Portal support
- Can contain any content (Menu, forms, custom components)

## Common Use Cases
- Dropdown menus (with MenuV2)
- User profile menus
- Action menus
- Filter dropdowns
- Custom floating content

## Usage
\`\`\`tsx
<DropdownV2
  overlay={<MenuV2 items={menuItems} />}
  trigger="click"
  placement="bottom-start"
>
  <ButtonV2>Open Menu</ButtonV2>
</DropdownV2>
\`\`\`

**Note:** DropdownV2 is a generic wrapper. For menu content, use it with MenuV2.
        `,
      },
    },
  },
  argTypes: {
    trigger: {
      options: ['click', 'hover'],
      control: { type: 'radio' },
    },
    placement: {
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
      ],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownV2>;

// Sample menu items
const basicMenuItems = [
  {
    text: 'Profile',
    iconProps: { name: 'person', type: 'material' as const, size: 20 },
    value: 'profile',
  },
  {
    text: 'Settings',
    iconProps: { name: 'settings', type: 'material' as const, size: 20 },
    value: 'settings',
  },
  { type: MenuItemType.separator },
  {
    text: 'Logout',
    iconProps: { name: 'logout', type: 'material' as const, size: 20 },
    value: 'logout',
  },
];

// ========== BASIC STORIES ==========

export const Basic: Story = {
  render: () => (
    <DropdownV2
      overlay={<MenuV2 items={basicMenuItems} onChange={(value) => console.log(value)} />}
    >
      <ButtonV2>Open Menu</ButtonV2>
    </DropdownV2>
  ),
};

export const With_Icon_Button: Story = {
  render: () => (
    <DropdownV2
      overlay={<MenuV2 items={basicMenuItems} onChange={(value) => console.log(value)} />}
    >
      <ButtonV2 iconProps={{ name: 'more_vert', type: 'material', size: 20 }} />
    </DropdownV2>
  ),
};

export const Hover_Trigger: Story = {
  render: () => (
    <DropdownV2
      trigger="hover"
      overlay={<MenuV2 items={basicMenuItems} onChange={(value) => console.log(value)} />}
    >
      <ButtonV2>Hover Me</ButtonV2>
    </DropdownV2>
  ),
};

// ========== PLACEMENT VARIANTS ==========

export const Placement_Top: Story = {
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
      <DropdownV2
        placement="top"
        overlay={<MenuV2 items={basicMenuItems} onChange={(value) => console.log(value)} />}
      >
        <ButtonV2>Top</ButtonV2>
      </DropdownV2>
    </div>
  ),
};

export const Placement_Right: Story = {
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '100px', marginLeft: '50px' }}>
      <DropdownV2
        placement="right"
        overlay={<MenuV2 items={basicMenuItems} onChange={(value) => console.log(value)} />}
      >
        <ButtonV2>Right</ButtonV2>
      </DropdownV2>
    </div>
  ),
};

export const Placement_Bottom_Start: Story = {
  render: () => (
    <DropdownV2
      placement="bottom-start"
      overlay={<MenuV2 items={basicMenuItems} onChange={(value) => console.log(value)} />}
    >
      <ButtonV2>Bottom Start</ButtonV2>
    </DropdownV2>
  ),
};

export const Placement_Bottom_End: Story = {
  render: () => (
    <DropdownV2
      placement="bottom-end"
      overlay={<MenuV2 items={basicMenuItems} onChange={(value) => console.log(value)} />}
    >
      <ButtonV2>Bottom End</ButtonV2>
    </DropdownV2>
  ),
};

// ========== MENU VARIANTS ==========

export const With_Large_Menu: Story = {
  render: () => {
    const largeMenuItems = [
      { type: MenuItemType.subHeader, text: 'Recent' },
      { text: 'Document 1.pdf', iconProps: { name: 'description', type: 'material' as const, size: 20 } },
      { text: 'Document 2.pdf', iconProps: { name: 'description', type: 'material' as const, size: 20 } },
      { text: 'Document 3.pdf', iconProps: { name: 'description', type: 'material' as const, size: 20 } },
      { type: MenuItemType.separator },
      { type: MenuItemType.subHeader, text: 'Actions' },
      { text: 'Upload', iconProps: { name: 'upload', type: 'material' as const, size: 20 } },
      { text: 'Create new', iconProps: { name: 'add', type: 'material' as const, size: 20 } },
      { type: MenuItemType.separator },
      { text: 'Settings', iconProps: { name: 'settings', type: 'material' as const, size: 20 } },
    ];

    return (
      <DropdownV2
        overlay={<MenuV2 items={largeMenuItems} onChange={(value) => console.log(value)} />}
      >
        <ButtonV2>Large Menu</ButtonV2>
      </DropdownV2>
    );
  },
};

export const With_Submenu: Story = {
  render: () => {
    const submenuItems = [
      { text: 'New File', iconProps: { name: 'insert_drive_file', type: 'material' as const, size: 20 } },
      {
        text: 'Open Recent',
        iconProps: { name: 'history', type: 'material' as const, size: 20 },
        dropdownMenuItems: [
          { text: 'Project 1', value: 'p1' },
          { text: 'Project 2', value: 'p2' },
          { text: 'Project 3', value: 'p3' },
        ],
      },
      { type: MenuItemType.separator },
      { text: 'Save', iconProps: { name: 'save', type: 'material' as const, size: 20 } },
      { text: 'Export', iconProps: { name: 'file_download', type: 'material' as const, size: 20 } },
    ];

    return (
      <DropdownV2
        overlay={<MenuV2 items={submenuItems} onChange={(value) => console.log(value)} />}
      >
        <ButtonV2>File Menu</ButtonV2>
      </DropdownV2>
    );
  },
};

export const With_Disruptive_Items: Story = {
  render: () => {
    const disruptiveMenuItems = [
      { text: 'Edit', iconProps: { name: 'edit', type: 'material' as const, size: 20 } },
      { text: 'Duplicate', iconProps: { name: 'content_copy', type: 'material' as const, size: 20 } },
      { type: MenuItemType.separator },
      {
        text: 'Delete',
        iconProps: { name: 'delete', type: 'material' as const, size: 20 },
        variant: MenuVariant.disruptive,
      },
    ];

    return (
      <DropdownV2
        overlay={<MenuV2 items={disruptiveMenuItems} onChange={(value) => console.log(value)} />}
      >
        <ButtonV2>Actions</ButtonV2>
      </DropdownV2>
    );
  },
};

// ========== CUSTOM CONTENT ==========

export const With_Custom_Content: Story = {
  render: () => (
    <DropdownV2
      overlay={
        <div style={{ padding: '16px', minWidth: '200px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>
            Custom Content
          </h3>
          <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#737373' }}>
            Dropdown can contain any custom content, not just menus.
          </p>
          <ButtonV2 size="small" style={{ width: '100%' }}>
            Got it
          </ButtonV2>
        </div>
      }
    >
      <ButtonV2>Custom Overlay</ButtonV2>
    </DropdownV2>
  ),
};

export const With_Form: Story = {
  render: () => (
    <DropdownV2
      overlay={
        <div style={{ padding: '16px', minWidth: '280px' }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
            Quick Filter
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                padding: '8px 12px',
                border: '1px solid #d4d4d4',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            />
            <select
              style={{
                padding: '8px 12px',
                border: '1px solid #d4d4d4',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            >
              <option>All Categories</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <ButtonV2 size="small" variant="neutral" style={{ flex: 1 }}>
                Clear
              </ButtonV2>
              <ButtonV2 size="small" variant="primary" style={{ flex: 1 }}>
                Apply
              </ButtonV2>
            </div>
          </div>
        </div>
      }
      closeOnDropdownClick={false}
    >
      <ButtonV2>Filters</ButtonV2>
    </DropdownV2>
  ),
};

// ========== ADVANCED ==========

export const Multiple_Dropdowns: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <DropdownV2
        overlay={<MenuV2 items={basicMenuItems} onChange={(value) => console.log('User:', value)} />}
      >
        <ButtonV2>User Menu</ButtonV2>
      </DropdownV2>
      
      <DropdownV2
        overlay={
          <MenuV2
            items={[
              { text: 'New', iconProps: { name: 'add', type: 'material' as const, size: 20 } },
              { text: 'Open', iconProps: { name: 'folder_open', type: 'material' as const, size: 20 } },
              { text: 'Save', iconProps: { name: 'save', type: 'material' as const, size: 20 } },
            ]}
            onChange={(value) => console.log('File:', value)}
          />
        }
      >
        <ButtonV2>File Menu</ButtonV2>
      </DropdownV2>
      
      <DropdownV2
        overlay={
          <MenuV2
            items={[
              { text: 'Cut', iconProps: { name: 'content_cut', type: 'material' as const, size: 20 } },
              { text: 'Copy', iconProps: { name: 'content_copy', type: 'material' as const, size: 20 } },
              { text: 'Paste', iconProps: { name: 'content_paste', type: 'material' as const, size: 20 } },
            ]}
            onChange={(value) => console.log('Edit:', value)}
          />
        }
      >
        <ButtonV2>Edit Menu</ButtonV2>
      </DropdownV2>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <DropdownV2
      disabled
      overlay={<MenuV2 items={basicMenuItems} onChange={(value) => console.log(value)} />}
    >
      <ButtonV2 disabled>Disabled Dropdown</ButtonV2>
    </DropdownV2>
  ),
};

