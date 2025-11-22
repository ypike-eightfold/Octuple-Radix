import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LiveTaskBarV2 } from '../components/LiveTaskBarV2';
import { ButtonV2 } from '../components/ButtonV2';
import { BadgeV2, BadgeSize } from '../components/BadgeV2';
import { IconV2 } from '../components/IconV2';
import { DropdownV2 } from '../components/DropdownV2';
import { MenuV2, MenuItemType } from '../components/MenuV2';

const meta: Meta<typeof LiveTaskBarV2> = {
  title: 'Octuple V2.5/LiveTaskBarV2',
  component: LiveTaskBarV2,
  parameters: {
    docs: {
      description: {
        component: `
A horizontal status/activity bar that displays live metrics, notifications, and quick actions.

## Features
- Flexible layout with header, tasks, and actions
- Perfect for AI assistant interfaces and dashboards
- Shows live metrics with badges
- Action buttons on the right
- Responsive design (stacks on mobile)

## Common Use Cases
- AI assistant status bars
- Dashboard activity bars
- Live metrics display
- Command centers

## Usage
\`\`\`tsx
<LiveTaskBarV2
  header={
    <>
      <IconV2 name="star_four_points" type="material" size={24} />
      <span>Live Status</span>
    </>
  }
  tasks={[
    <ButtonV2>124 hours saved +12%</ButtonV2>,
    <ButtonV2>85 tasks</ButtonV2>,
  ]}
  actions={[
    <ButtonV2>Ask AIR</ButtonV2>,
    <ButtonV2 iconProps={{ name: 'more_horiz', type: 'material' }} />
  ]}
/>
\`\`\`

**Note:** Panel integration coming soon!
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LiveTaskBarV2>;

// ========== BASIC STORIES ==========

export const Default: Story = {
  render: () => {
    const header = (
      <>
        <IconV2 name="star_four_points" type="material" size={24} color="#8467D4" />
        <span style={{ fontSize: '14px', fontWeight: 600, color: '#404040' }}>
          Live Status
        </span>
      </>
    );

    const tasks = [
      <ButtonV2
        key="hours"
        variant="neutral"
        size="small"
        iconProps={{ name: 'schedule', type: 'material', size: 20, color: '#4CAF50' }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        124 hours saved
        <BadgeV2 active size={BadgeSize.Small} style={{ marginLeft: '8px', backgroundColor: 'rgba(76, 175, 80, 0.15)', color: '#2e7d32' }}>
          +12%
        </BadgeV2>
      </ButtonV2>,
      <ButtonV2
        key="tasks"
        variant="neutral"
        size="small"
        iconProps={{ name: 'check_circle', type: 'material', size: 20, color: '#2196F3' }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        85 tasks
      </ButtonV2>,
      <ButtonV2
        key="review"
        variant="neutral"
        size="small"
        iconProps={{ name: 'info', type: 'material', size: 20, color: '#F44336' }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        7 need review
        <BadgeV2 active disruptive size={BadgeSize.Small} style={{ marginLeft: '8px' }}>
          2
        </BadgeV2>
      </ButtonV2>,
    ];

    const menuItems = [
      {
        text: 'Create AIR',
        iconProps: { name: 'add', type: 'material' as const, size: 20 },
        value: 'create',
      },
      {
        text: 'All activity',
        iconProps: { name: 'schedule', type: 'material' as const, size: 20 },
        value: 'activity',
      },
      { type: MenuItemType.separator },
      {
        text: 'Settings',
        iconProps: { name: 'settings', type: 'material' as const, size: 20 },
        value: 'settings',
      },
    ];

    const actions = [
      <ButtonV2
        key="air"
        variant="primary"
        size="small"
        iconProps={{ name: 'lightbulb', type: 'material', size: 20 }}
      >
        Ask AIR
      </ButtonV2>,
      <DropdownV2
        key="menu"
        overlay={<MenuV2 items={menuItems} onChange={(val) => console.log(val)} />}
      >
        <ButtonV2
          variant="neutral"
          size="small"
          iconProps={{ name: 'more_horiz', type: 'material', size: 20 }}
        />
      </DropdownV2>,
    ];

    return <LiveTaskBarV2 header={header} tasks={tasks} actions={actions} />;
  },
};

export const Simple: Story = {
  render: () => {
    const header = <span style={{ fontSize: '14px', fontWeight: 600 }}>Dashboard</span>;

    const tasks = [
      <ButtonV2 key="1" variant="neutral" size="small" style={{ pointerEvents: 'none', background: 'transparent' }}>
        Active users: 1,234
      </ButtonV2>,
      <ButtonV2 key="2" variant="neutral" size="small" style={{ pointerEvents: 'none', background: 'transparent' }}>
        Tasks completed: 89
      </ButtonV2>,
    ];

    const actions = [
      <ButtonV2 key="refresh" variant="neutral" size="small" iconProps={{ name: 'refresh', type: 'material', size: 20 }}>
        Refresh
      </ButtonV2>,
    ];

    return <LiveTaskBarV2 header={header} tasks={tasks} actions={actions} />;
  },
};

export const With_Notifications: Story = {
  render: () => {
    const header = (
      <>
        <IconV2 name="notifications_active" type="material" size={24} color="#3e63dd" />
        <span style={{ fontSize: '14px', fontWeight: 600 }}>Notifications</span>
      </>
    );

    const tasks = [
      <ButtonV2
        key="messages"
        variant="neutral"
        size="small"
        iconProps={{ name: 'mail', type: 'material', size: 20 }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        Messages
        <BadgeV2 active disruptive size={BadgeSize.Small} style={{ marginLeft: '8px' }}>
          5
        </BadgeV2>
      </ButtonV2>,
      <ButtonV2
        key="mentions"
        variant="neutral"
        size="small"
        iconProps={{ name: 'alternate_email', type: 'material', size: 20 }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        Mentions
        <BadgeV2 active size={BadgeSize.Small} style={{ marginLeft: '8px' }}>
          3
        </BadgeV2>
      </ButtonV2>,
      <ButtonV2
        key="updates"
        variant="neutral"
        size="small"
        iconProps={{ name: 'update', type: 'material', size: 20 }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        Updates
        <BadgeV2 active size={BadgeSize.Small} style={{ marginLeft: '8px' }}>
          12
        </BadgeV2>
      </ButtonV2>,
    ];

    const actions = [
      <ButtonV2 key="view-all" variant="primary" size="small">
        View All
      </ButtonV2>,
      <ButtonV2 key="mark-read" variant="neutral" size="small">
        Mark All Read
      </ButtonV2>,
    ];

    return <LiveTaskBarV2 header={header} tasks={tasks} actions={actions} />;
  },
};

export const Header_Only: Story = {
  render: () => {
    const header = (
      <>
        <IconV2 name="info" type="material" size={20} color="#3e63dd" />
        <span style={{ fontSize: '14px', color: '#404040' }}>
          This is an informational bar with just a header and action
        </span>
      </>
    );

    const actions = [
      <ButtonV2 key="dismiss" variant="neutral" size="small">
        Dismiss
      </ButtonV2>,
    ];

    return <LiveTaskBarV2 header={header} actions={actions} />;
  },
};

export const Tasks_Only: Story = {
  render: () => {
    const tasks = [
      <ButtonV2 key="1" variant="neutral" size="small" style={{ pointerEvents: 'none', background: 'transparent' }}>
        CPU: 45%
      </ButtonV2>,
      <ButtonV2 key="2" variant="neutral" size="small" style={{ pointerEvents: 'none', background: 'transparent' }}>
        Memory: 2.1 GB
      </ButtonV2>,
      <ButtonV2 key="3" variant="neutral" size="small" style={{ pointerEvents: 'none', background: 'transparent' }}>
        Network: 1.2 Mbps
      </ButtonV2>,
    ];

    return <LiveTaskBarV2 tasks={tasks} />;
  },
};

export const Many_Tasks: Story = {
  render: () => {
    const header = <span style={{ fontSize: '14px', fontWeight: 600 }}>Activity</span>;

    const tasks = Array.from({ length: 10 }, (_, i) => (
      <ButtonV2
        key={i}
        variant="neutral"
        size="small"
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        Task {i + 1}
        <BadgeV2 size={BadgeSize.Small} style={{ marginLeft: '8px' }}>
          {Math.floor(Math.random() * 100)}
        </BadgeV2>
      </ButtonV2>
    ));

    const actions = [
      <ButtonV2 key="view" variant="primary" size="small">
        View All
      </ButtonV2>,
    ];

    return (
      <div style={{ maxWidth: '800px' }}>
        <LiveTaskBarV2 header={header} tasks={tasks} actions={actions} />
        <p style={{ marginTop: '16px', fontSize: '12px', color: '#737373' }}>
          Tasks section is horizontally scrollable when overflow occurs
        </p>
      </div>
    );
  },
};

export const AI_Assistant_Theme: Story = {
  render: () => {
    const header = (
      <>
        <IconV2 name="auto_awesome" type="material" size={24} color="#ffffff" />
        <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
          AI Assistant Active
        </span>
      </>
    );

    const tasks = [
      <div
        key="processing"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          fontSize: '13px',
          color: '#ffffff',
        }}
      >
        <IconV2 name="sync" type="material" size={16} color="#ffffff" />
        Processing 3 tasks
      </div>,
      <div
        key="completed"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          fontSize: '13px',
          color: '#ffffff',
        }}
      >
        <IconV2 name="check_circle" type="material" size={16} color="#ffffff" />
        12 completed
      </div>,
    ];

    const actions = [
      <ButtonV2
        key="air"
        variant="neutral"
        size="small"
        iconProps={{ name: 'lightbulb', type: 'material', size: 20 }}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: 'none' }}
      >
        Ask AIR
      </ButtonV2>,
    ];

    return (
      <LiveTaskBarV2
        header={header}
        tasks={tasks}
        actions={actions}
        classNames="live-task-bar-v2-gradient"
      />
    );
  },
};

export const Minimal: Story = {
  render: () => {
    const actions = [
      <ButtonV2 key="save" variant="primary" size="small">
        Save Changes
      </ButtonV2>,
      <ButtonV2 key="cancel" variant="neutral" size="small">
        Cancel
      </ButtonV2>,
    ];

    return <LiveTaskBarV2 actions={actions} />;
  },
};

export const Responsive_Demo: Story = {
  render: () => {
    const header = (
      <>
        <IconV2 name="dashboard" type="material" size={24} color="#3e63dd" />
        <span style={{ fontSize: '14px', fontWeight: 600 }}>Project Dashboard</span>
      </>
    );

    const tasks = [
      <ButtonV2
        key="1"
        variant="neutral"
        size="small"
        iconProps={{ name: 'person', type: 'material', size: 20 }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        Team members: 24
      </ButtonV2>,
      <ButtonV2
        key="2"
        variant="neutral"
        size="small"
        iconProps={{ name: 'task', type: 'material', size: 20 }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        Active tasks: 156
      </ButtonV2>,
      <ButtonV2
        key="3"
        variant="neutral"
        size="small"
        iconProps={{ name: 'calendar_today', type: 'material', size: 20 }}
        style={{ pointerEvents: 'none', background: 'transparent' }}
      >
        Due today: 8
      </ButtonV2>,
    ];

    const actions = [
      <ButtonV2 key="new" variant="primary" size="small" iconProps={{ name: 'add', type: 'material', size: 20 }}>
        New Task
      </ButtonV2>,
      <ButtonV2 key="settings" variant="neutral" size="small" iconProps={{ name: 'settings', type: 'material', size: 20 }} />,
    ];

    return (
      <div>
        <LiveTaskBarV2 header={header} tasks={tasks} actions={actions} />
        <p style={{ marginTop: '16px', fontSize: '12px', color: '#737373' }}>
          Resize your browser to see responsive behavior (stacks vertically on mobile)
        </p>
      </div>
    );
  },
};

