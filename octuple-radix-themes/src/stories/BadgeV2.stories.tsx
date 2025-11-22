import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BadgeV2, BadgeSize } from '../components/BadgeV2';

const meta: Meta<typeof BadgeV2> = {
  title: 'Octuple V2.5/BadgeV2',
  component: BadgeV2,
  parameters: {
    docs: {
      description: {
        component: `
Badges normally appear in proximity to notifications, labels, or user avatars with eye-catching appeal, typically displaying a count.

## Features
- Simple counter/notification badge
- 3 sizes: Small, Medium, Large
- Active state (highlighted)
- Disruptive state (red/alert)
- Typically used for notification counts

## Usage
\`\`\`tsx
<BadgeV2>5</BadgeV2>
<BadgeV2 active>12</BadgeV2>
<BadgeV2 disruptive active>99+</BadgeV2>
\`\`\`

**Note:** For tags/labels like "Active" or "Premium", use \`PillV2\` instead.
        `,
      },
    },
  },
  argTypes: {
    size: {
      options: [BadgeSize.Large, BadgeSize.Medium, BadgeSize.Small],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BadgeV2>;

const badgeArgs = {
  active: false,
  classNames: 'my-badge-class',
  size: BadgeSize.Medium,
  style: {},
  children: '8',
  disruptive: false,
};

export const Badge_Default: Story = {
  args: {
    ...badgeArgs,
  },
};

export const Badge_Active: Story = {
  args: {
    ...badgeArgs,
    active: true,
  },
};

export const Badge_Disruptive: Story = {
  args: {
    ...badgeArgs,
    active: true,
    disruptive: true,
  },
};

export const All_Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <BadgeV2 size={BadgeSize.Small}>5</BadgeV2>
      <BadgeV2 size={BadgeSize.Medium}>12</BadgeV2>
      <BadgeV2 size={BadgeSize.Large}>99+</BadgeV2>
    </div>
  ),
};

export const All_States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ minWidth: '120px' }}>Default:</span>
        <BadgeV2>8</BadgeV2>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ minWidth: '120px' }}>Active:</span>
        <BadgeV2 active>12</BadgeV2>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ minWidth: '120px' }}>Disruptive:</span>
        <BadgeV2 active disruptive>99+</BadgeV2>
      </div>
    </div>
  ),
};

export const With_Avatar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#3e63dd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 600,
          }}
        >
          JD
        </div>
        <BadgeV2
          active
          disruptive
          size={BadgeSize.Small}
          style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
          }}
        >
          3
        </BadgeV2>
      </div>

      <div style={{ position: 'relative', display: 'inline-block' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#737373' }}>
          notifications
        </span>
        <BadgeV2
          active
          size={BadgeSize.Small}
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
          }}
        >
          5
        </BadgeV2>
      </div>

      <div style={{ position: 'relative', display: 'inline-block' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#737373' }}>
          mail
        </span>
        <BadgeV2
          active
          disruptive
          size={BadgeSize.Small}
          style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
          }}
        >
          12
        </BadgeV2>
      </div>
    </div>
  ),
};

export const Standalone: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <BadgeV2>New</BadgeV2>
      <BadgeV2 active>5 unread</BadgeV2>
      <BadgeV2 disruptive active>Alert</BadgeV2>
      <BadgeV2>999+</BadgeV2>
    </div>
  ),
};

