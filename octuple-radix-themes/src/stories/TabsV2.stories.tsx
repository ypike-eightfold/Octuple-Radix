import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabsV2, TabV2, TabIconAlign, TabSize, TabVariant } from '../components/TabsV2';

const meta: Meta<typeof TabsV2> = {
  title: 'Octuple V2.5/TabsV2',
  component: TabsV2,
  parameters: {
    docs: {
      description: {
        component: `
Tabs are used for navigating frequently accessed, distinct content categories. Tabs allow for navigation between two or more content views and relies on text headers to articulate the different sections of content.

## Features
- Tapping on a tab navigates to that section content
- Tabs use a combination of icons and text or just icons to articulate section content
- Built with Radix UI Primitives for accessibility and keyboard navigation
- Supports default and pill variants with multiple sizes
        `,
      },
    },
  },
  argTypes: {
    alignIcon: {
      options: [TabIconAlign.Start, TabIconAlign.End],
      control: { type: 'inline-radio' },
    },
    size: {
      options: [TabSize.Large, TabSize.Medium, TabSize.Small, TabSize.XSmall],
      control: { type: 'radio' },
    },
    variant: {
      options: [TabVariant.default, TabVariant.pill],
      control: { type: 'inline-radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TabsV2>;

const tabs = [1, 2, 3, 4].map((i) => ({
  value: `tab${i}`,
  label: `Tab ${i}`,
  ariaLabel: `Tab ${i}`,
  ...(i === 4 ? { disabled: true } : {}),
}));

const badgeTabs = [1, 2, 3, 4].map((i) => ({
  value: `tab${i}`,
  label: `Tab ${i}`,
  ariaLabel: `Tab ${i}`,
  badgeContent: i,
  ...(i === 4 ? { disabled: true } : {}),
}));

const iconTabs = [1, 2, 3, 4].map((i) => ({
  value: `tab${i}`,
  iconProps: { name: 'favorite', type: 'material' as const },
  ariaLabel: `Tab ${i}`,
  ...(i === 4 ? { disabled: true } : {}),
}));

const iconLabelTabs = [1, 2, 3, 4].map((i) => ({
  value: `tab${i}`,
  iconProps: { name: 'favorite', type: 'material' as const },
  label: `Tab ${i}`,
  ariaLabel: `Tab ${i}`,
  ...(i === 4 ? { disabled: true } : {}),
}));

const scrollableTabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
  value: `tab${i}`,
  label: `Tab ${i}`,
  ariaLabel: `Tab ${i}`,
  ...(i === 4 ? { disabled: true } : {}),
}));

const TabsStory = (args: any) => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <div
      style={{
        background: args.colorInvert
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'transparent',
        padding: args.colorInvert ? 20 : 0,
        borderRadius: args.colorInvert ? 8 : 0,
      }}
    >
      <TabsV2
        {...args}
        value={activeTab}
        onChange={(tab) => setActiveTab(tab)}
      />
    </div>
  );
};

const tabsArgs = {
  alignIcon: TabIconAlign.Start,
  scrollable: false,
  variant: TabVariant.default,
  size: TabSize.Medium,
  underlined: false,
  colorInvert: false,
  enableArrowNav: true,
  children: tabs.map((tab) => <TabV2 key={tab.value} {...tab} />),
  style: {},
};

export const Default: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
  },
};

export const Default_Underlined: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    underlined: true,
  },
};

export const Default_Loader: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    children: badgeTabs.map((tab, index) => (
      <TabV2 key={tab.value} {...tab} loading={index % 2 === 0} />
    )),
  },
};

export const Default_Arrow_Nav: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    enableArrowNav: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use arrow keys (← →) to navigate between tabs. This is enabled by default with Radix Primitives.',
      },
    },
  },
};

export const Small: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    size: TabSize.Small,
  },
};

export const With_Badge: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    children: badgeTabs.map((tab) => <TabV2 key={tab.value} {...tab} />),
  },
};

export const Icon: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    children: iconTabs.map((tab) => <TabV2 key={tab.value} {...tab} />),
  },
};

export const Icon_Label: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    children: iconLabelTabs.map((tab) => <TabV2 key={tab.value} {...tab} />),
  },
};

export const Scrollable: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    scrollable: true,
    style: {
      maxWidth: '400px',
    },
    children: scrollableTabs.map((tab) => <TabV2 key={tab.value} {...tab} />),
  },
};

export const Pill_Default: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    colorInvert: false,
    variant: TabVariant.pill,
  },
};

export const Pill_With_Badge: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    colorInvert: false,
    variant: TabVariant.pill,
    children: badgeTabs.map((tab) => <TabV2 key={tab.value} {...tab} />),
  },
};

export const Pill_Icon: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    colorInvert: false,
    variant: TabVariant.pill,
    children: iconTabs.map((tab) => <TabV2 key={tab.value} {...tab} />),
  },
};

export const Pill_Icon_Label: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    colorInvert: false,
    variant: TabVariant.pill,
    children: iconLabelTabs.map((tab) => <TabV2 key={tab.value} {...tab} />),
  },
};

// Additional showcase stories
export const All_Sizes: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h3>Large</h3>
          <TabsV2 size={TabSize.Large} value={activeTab} onChange={setActiveTab}>
            {tabs.map((tab) => <TabV2 key={tab.value} {...tab} />)}
          </TabsV2>
        </div>
        <div>
          <h3>Medium</h3>
          <TabsV2 size={TabSize.Medium} value={activeTab} onChange={setActiveTab}>
            {tabs.map((tab) => <TabV2 key={tab.value} {...tab} />)}
          </TabsV2>
        </div>
        <div>
          <h3>Small</h3>
          <TabsV2 size={TabSize.Small} value={activeTab} onChange={setActiveTab}>
            {tabs.map((tab) => <TabV2 key={tab.value} {...tab} />)}
          </TabsV2>
        </div>
        <div>
          <h3>XSmall</h3>
          <TabsV2 size={TabSize.XSmall} value={activeTab} onChange={setActiveTab}>
            {tabs.map((tab) => <TabV2 key={tab.value} {...tab} />)}
          </TabsV2>
        </div>
      </div>
    );
  },
};

export const Pill_Inverted: Story = {
  render: TabsStory,
  args: {
    ...tabsArgs,
    colorInvert: true,
    variant: TabVariant.pill,
    children: iconLabelTabs.map((tab) => <TabV2 key={tab.value} {...tab} />),
  },
  parameters: {
    docs: {
      description: {
        story: 'Pill variant with inverted colors for use on dark/gradient backgrounds.',
      },
    },
  },
};

