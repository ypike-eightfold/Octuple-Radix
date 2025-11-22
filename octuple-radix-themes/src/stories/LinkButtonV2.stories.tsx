import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  LinkButtonV2,
  LinkButtonIconAlign,
  LinkButtonShape,
  LinkButtonSize,
  LinkButtonTextAlign,
  LinkButtonVariant,
  LinkButtonWidth,
} from '../components/LinkButtonV2';

const meta: Meta<typeof LinkButtonV2> = {
  title: 'Octuple V2.5/LinkButtonV2',
  component: LinkButtonV2,
  parameters: {
    docs: {
      description: {
        component: `
Link Buttons give people a way to trigger a route or URL. They're typically found in navigation and look like buttons but act as links.

## Best practices

### Layout
- There are four button sizes: \`flex\`, \`large\`, \`medium\`, \`small\`. Medium is the default and flex resizes automatically with the viewport.
- Show only one primary link button that inherits theme color at rest state. If there are more than two link buttons with equal priority, all buttons should have neutral backgrounds.
- Don't place the default focus on a link button that destroys data. Instead, place the default focus on the button that performs the "safe act".

### Content
- Use sentence-style capitalization—only capitalize the first word.
- Make sure it's clear what will happen when people interact with the link button. Be concise; usually a single verb is best.
        `,
      },
    },
  },
  argTypes: {
    alignIcon: {
      options: [LinkButtonIconAlign.Left, LinkButtonIconAlign.Right],
      control: { type: 'inline-radio' },
    },
    alignText: {
      options: [
        LinkButtonTextAlign.Center,
        LinkButtonTextAlign.Left,
        LinkButtonTextAlign.Right,
      ],
      control: { type: 'radio' },
    },
    linkButtonWidth: {
      options: [LinkButtonWidth.fitContent, LinkButtonWidth.fill],
      control: { type: 'inline-radio' },
    },
    onClick: {
      action: 'click',
    },
    shape: {
      options: [
        LinkButtonShape.Rectangle,
        LinkButtonShape.Pill,
        LinkButtonShape.Round,
      ],
      control: { type: 'inline-radio' },
    },
    size: {
      options: [
        LinkButtonSize.Flex,
        LinkButtonSize.Large,
        LinkButtonSize.Medium,
        LinkButtonSize.Small,
      ],
      control: { type: 'radio' },
    },
    variant: {
      options: [
        LinkButtonVariant.Default,
        LinkButtonVariant.Neutral,
        LinkButtonVariant.Primary,
        LinkButtonVariant.Secondary,
        LinkButtonVariant.SystemUI,
      ],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButtonV2>;

const linkButtonArgs = {
  alignIcon: LinkButtonIconAlign.Left,
  alignText: LinkButtonTextAlign.Center,
  allowDisabledFocus: false,
  ariaLabel: 'Link button',
  classNames: 'my-link-btn-class',
  disabled: false,
  disruptive: false,
  dropShadow: false,
  floatingLinkButtonProps: {
    enabled: false,
  },
  gradient: false,
  href: 'https://eightfold.ai',
  iconProps: {
    name: 'favorite',
    type: 'material' as const,
  },
  id: 'myLinkButton',
  linkButtonWidth: LinkButtonWidth.fitContent,
  loading: false,
  role: 'link',
  shape: LinkButtonShape.Pill,
  size: LinkButtonSize.Medium,
  style: {},
  target: '_blank',
  text: 'Link button',
  variant: LinkButtonVariant.Default,
};

export const Primary: Story = {
  args: {
    ...linkButtonArgs,
    ariaLabel: 'Primary LinkButton',
    text: 'Primary LinkButton',
    variant: LinkButtonVariant.Primary,
  },
};

export const Counter: Story = {
  args: {
    ...linkButtonArgs,
    ariaLabel: 'Primary LinkButton with Counter',
    counter: '8',
    text: 'Primary LinkButton',
    variant: LinkButtonVariant.Primary,
  },
};

export const Secondary: Story = {
  args: {
    ...linkButtonArgs,
    ariaLabel: 'Secondary LinkButton',
    text: 'Secondary LinkButton',
    variant: LinkButtonVariant.Secondary,
  },
};

export const Default: Story = {
  args: {
    ...linkButtonArgs,
    ariaLabel: 'Default LinkButton',
    text: 'Default LinkButton',
    variant: LinkButtonVariant.Default,
  },
};

export const Neutral: Story = {
  args: {
    ...linkButtonArgs,
    ariaLabel: 'Neutral LinkButton',
    text: 'Neutral LinkButton',
    variant: LinkButtonVariant.Neutral,
  },
};

export const System_UI: Story = {
  args: {
    ...linkButtonArgs,
    ariaLabel: 'System UI LinkButton',
    text: 'System UI LinkButton',
    transparent: false,
    variant: LinkButtonVariant.SystemUI,
  },
};

export const Floating: Story = {
  args: {
    ...linkButtonArgs,
    floatingLinkButtonProps: {
      enabled: true,
    },
    shape: LinkButtonShape.Round,
    text: undefined,
    variant: LinkButtonVariant.Primary,
  },
};

export const Disruptive: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <LinkButtonV2
        href="#"
        text="Disruptive Default"
        variant={LinkButtonVariant.Default}
        disruptive
      />
      <LinkButtonV2
        href="#"
        text="Disruptive Primary"
        variant={LinkButtonVariant.Primary}
        disruptive
      />
      <LinkButtonV2
        href="#"
        text="Disruptive Secondary"
        variant={LinkButtonVariant.Secondary}
        disruptive
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LinkButtonV2 href="#" text="Small" size={LinkButtonSize.Small} variant={LinkButtonVariant.Primary} />
      <LinkButtonV2 href="#" text="Medium" size={LinkButtonSize.Medium} variant={LinkButtonVariant.Primary} />
      <LinkButtonV2 href="#" text="Large" size={LinkButtonSize.Large} variant={LinkButtonVariant.Primary} />
      <LinkButtonV2 href="#" text="Flex" size={LinkButtonSize.Flex} variant={LinkButtonVariant.Primary} />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LinkButtonV2 href="#" text="Rectangle" shape={LinkButtonShape.Rectangle} variant={LinkButtonVariant.Primary} />
      <LinkButtonV2 href="#" text="Pill" shape={LinkButtonShape.Pill} variant={LinkButtonVariant.Primary} />
      <LinkButtonV2
        href="#"
        shape={LinkButtonShape.Round}
        variant={LinkButtonVariant.Primary}
        iconProps={{ name: 'add', type: 'material' }}
      />
    </div>
  ),
};

export const With_Icons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LinkButtonV2
        href="#"
        text="Left Icon"
        iconProps={{ name: 'star', type: 'material' }}
        alignIcon={LinkButtonIconAlign.Left}
        variant={LinkButtonVariant.Primary}
      />
      <LinkButtonV2
        href="#"
        text="Right Icon"
        iconProps={{ name: 'arrow_forward', type: 'material' }}
        alignIcon={LinkButtonIconAlign.Right}
        variant={LinkButtonVariant.Primary}
      />
      <LinkButtonV2
        href="#"
        iconProps={{ name: 'download', type: 'material' }}
        variant={LinkButtonVariant.Primary}
      />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LinkButtonV2 href="#" text="Loading" loading variant={LinkButtonVariant.Primary} />
      <LinkButtonV2 href="#" text="Loading Secondary" loading variant={LinkButtonVariant.Secondary} />
      <LinkButtonV2 href="#" text="Loading Default" loading variant={LinkButtonVariant.Default} />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <LinkButtonV2 href="#" text="Normal" variant={LinkButtonVariant.Primary} />
      <LinkButtonV2 href="#" text="Disabled" disabled variant={LinkButtonVariant.Primary} />
      <LinkButtonV2 href="#" text="Drop Shadow" dropShadow variant={LinkButtonVariant.Primary} />
      <LinkButtonV2 href="#" text="Gradient" gradient variant={LinkButtonVariant.Primary} />
    </div>
  ),
};

export const Width_Options: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <LinkButtonV2
        href="#"
        text="Fit Content"
        linkButtonWidth={LinkButtonWidth.fitContent}
        variant={LinkButtonVariant.Primary}
      />
      <LinkButtonV2
        href="#"
        text="Fill Width"
        linkButtonWidth={LinkButtonWidth.fill}
        variant={LinkButtonVariant.Primary}
      />
    </div>
  ),
};

