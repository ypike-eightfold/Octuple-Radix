import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardV2, CardSize } from '../components/CardV2';
import { AvatarV2 } from '../components/AvatarV2';
import { PillV2 } from '../components/PillV2';
import { ButtonV2 } from '../components/ButtonV2';

const meta: Meta<typeof CardV2> = {
  title: 'Octuple V2.5/CardV2',
  component: CardV2,
  parameters: {
    docs: {
      description: {
        component: `
A card can be used to display content. The content may consist of multiple elements in its header, body and footer.

## Features
- Flexible container with header, body, and footer sections
- Supports structured content (avatar, body lists, tags) or custom children
- Built using Radix-based V2.5 components (AvatarV2, PillV2, ButtonV2, IconV2)
- Multiple size variants and responsive design
- Bordered, shadow, and selected states
        `,
      },
    },
  },
  argTypes: {
    size: {
      options: [CardSize.Flex, CardSize.Large, CardSize.Medium, CardSize.Small],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardV2>;

const baseCardArgs = {
  dropShadow: true,
  insetFocusVisible: false,
  size: CardSize.Medium,
  style: {},
  bordered: true,
  tabIndex: 0,
};

export const CustomCard: Story = {
  args: {
    ...baseCardArgs,
    width: '360px',
    height: '520px',
    size: CardSize.Large,
    children: (
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <AvatarV2
          variant="initials"
          size="xl"
          fallback="AB"
          style={{ margin: '12px auto' }}
        />
        <div
          style={{
            marginBottom: '12px',
            fontSize: '24px',
            fontWeight: '600',
          }}
        >
          John Doe
        </div>
        <div
          style={{
            marginBottom: '34px',
            fontSize: '18px',
            fontWeight: '400',
          }}
        >
          Senior Quality Engineer
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: '24px',
            fontSize: '18px',
            fontWeight: '400',
          }}
        >
          <div>
            <div style={{ opacity: '50%', marginBottom: '5px' }}>
              Time in role
            </div>
            <div>2.5 y</div>
          </div>
          <div>
            <div style={{ opacity: '50%', marginBottom: '5px' }}>
              Skills | Skill gaps
            </div>
            <div>73 | 0</div>
          </div>
        </div>
        <div
          style={{
            textAlign: 'start',
            marginBottom: '34px',
            fontSize: '18px',
            fontWeight: '400',
            marginLeft: '35px',
          }}
        >
          <div
            style={{
              textAlign: 'start',
              marginBottom: '8px',
              fontSize: '18px',
              fontWeight: '400',
            }}
          >
            Last manager assessment
          </div>
          <div>Oct 1, 2022</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: '48px',
            gap: '8px',
          }}
        >
          <PillV2 size="medium" color="violet">Leadership Potential</PillV2>
          <PillV2 size="medium" color="red">High Risk</PillV2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '8px' }}>
          <ButtonV2 variant="secondary">Add Development Plan</ButtonV2>
          <ButtonV2 variant="secondary">
            <span className="material-symbols-outlined">more_vert</span>
          </ButtonV2>
        </div>
      </div>
    ),
  },
};

export const With_Header: Story = {
  args: {
    ...baseCardArgs,
    width: '400px',
    headerTitle: 'Card Title',
    headerIcon: 'info',
    headerButtonProps: {
      children: 'Action',
      variant: 'secondary',
      size: 'small',
    },
    children: (
      <div>
        <p>This is a card with a header section that includes a title, icon, and action button.</p>
      </div>
    ),
  },
};

export const With_Avatar_And_Metadata: Story = {
  args: {
    ...baseCardArgs,
    width: '360px',
    avatar: {
      variant: 'image',
      src: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100',
      fallback: 'JD',
      size: 'xl',
    },
    name: 'Jane Doe',
    subHeaderProps: ['Product Designer', 'San Francisco', '5 years'],
    tag: {
      children: 'Active',
      size: 'small',
      color: 'green',
    },
  },
};

export const With_Body_Lists: Story = {
  args: {
    ...baseCardArgs,
    width: '400px',
    headerTitle: 'Skills Overview',
    bodyListOneProps: {
      type: 'Technical Skills',
      iconProps: { name: 'code', type: 'material' },
      contents: [
        { label: 'React & TypeScript', showIcon: true },
        { label: 'Node.js & Express', showIcon: true },
        { label: 'GraphQL & REST APIs', showIcon: true },
      ],
    },
    bodyListTwoProps: {
      type: 'Soft Skills',
      iconProps: { name: 'people', type: 'material' },
      contents: [
        { label: 'Team Leadership', showIcon: true },
        { label: 'Communication', showIcon: true },
        { label: 'Problem Solving', showIcon: true },
      ],
    },
  },
};

export const With_Footer: Story = {
  args: {
    ...baseCardArgs,
    width: '400px',
    headerTitle: 'Project Card',
    children: <p>Project details and description go here.</p>,
    footerProps: [
      { name: 'schedule', type: 'material' },
      'Updated 2 hours ago',
    ],
    footerButtonProps: {
      children: 'View Details',
      variant: 'primary',
      size: 'small',
    },
  },
};

export const Selected_State: Story = {
  args: {
    ...baseCardArgs,
    width: '300px',
    isSelected: true,
    headerTitle: 'Selected Card',
    children: <p>This card is in a selected state with highlighted border.</p>,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <CardV2
        size={CardSize.Small}
        bordered
        dropShadow
        headerTitle="Small"
        children={<p>Small card</p>}
      />
      <CardV2
        size={CardSize.Medium}
        bordered
        dropShadow
        headerTitle="Medium"
        children={<p>Medium card</p>}
      />
      <CardV2
        size={CardSize.Large}
        bordered
        dropShadow
        headerTitle="Large"
        children={<p>Large card</p>}
      />
    </div>
  ),
};

export const Grid_Layout: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <CardV2
          key={i}
          bordered
          dropShadow
          avatar={{
            variant: 'initials',
            fallback: `U${i}`,
            size: 'l',
          }}
          name={`User ${i}`}
          subHeaderProps={['Designer', 'Team Lead']}
          tag={{ children: 'Active', size: 'small', color: 'green' }}
        />
      ))}
    </div>
  ),
};

export const Disabled_State: Story = {
  args: {
    ...baseCardArgs,
    width: '300px',
    disabled: true,
    headerTitle: 'Disabled Card',
    children: <p>This card is in a disabled state.</p>,
  },
};

export const Without_Border_Or_Shadow: Story = {
  args: {
    width: '300px',
    bordered: false,
    dropShadow: false,
    headerTitle: 'Minimal Card',
    children: <p>This card has no border or shadow.</p>,
  },
};
