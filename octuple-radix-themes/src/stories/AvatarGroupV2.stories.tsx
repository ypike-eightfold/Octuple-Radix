import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroupV2 } from '../components/AvatarGroupV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Avatar Group',
  component: AvatarGroupV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A group of overlapping avatars. Displays multiple avatars in a horizontal layout with automatic count indicators when exceeding the max prop.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: 'Size of all avatars in the group',
    },
    max: {
      control: 'number',
      description: 'Maximum number of avatars to show before displaying count',
    },
  },
} satisfies Meta<typeof AvatarGroupV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample image URL
const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop';

// Sample data with 12 avatars
const sampleAvatars = [
  { src: SAMPLE_IMAGE, alt: 'User 1' },
  { fallback: 'AP', alt: 'Ann Press' },
  { fallback: 'AC', alt: 'Ann Curtis' },
  { fallback: 'HB', alt: 'Hanna Bator' },
  { fallback: 'MB', alt: 'Marley Bergson' },
  { fallback: 'CD', alt: 'Corey Donin' },
  { fallback: 'AB', alt: 'Alfonso Bator' },
  { fallback: 'AS', alt: 'Aspen Septimus' },
  { fallback: 'LR', alt: 'Leo Rosser' },
  { fallback: 'OC', alt: 'Omar Calzoni' },
  { fallback: 'HG', alt: 'Hanna Geidt' },
  { fallback: 'PV', alt: 'Paityn Vetrovs' },
];

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-start' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>XS (24px)</div>
        <AvatarGroupV2 items={sampleAvatars} size="xs" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>S (40px)</div>
        <AvatarGroupV2 items={sampleAvatars} size="s" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>M (64px)</div>
        <AvatarGroupV2 items={sampleAvatars} size="m" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>L (80px)</div>
        <AvatarGroupV2 items={sampleAvatars} size="l" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>XL (100px)</div>
        <AvatarGroupV2 items={sampleAvatars} size="xl" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>XXL (120px)</div>
        <AvatarGroupV2 items={sampleAvatars} size="xxl" />
      </div>
    </div>
  ),
};

export const WithMaxLimit: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Max 3:</div>
        <AvatarGroupV2 items={sampleAvatars} size="m" max={3} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Max 5:</div>
        <AvatarGroupV2 items={sampleAvatars} size="m" max={5} />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Max 8:</div>
        <AvatarGroupV2 items={sampleAvatars} size="m" max={8} />
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {
    items: sampleAvatars.slice(0, 5),
    size: 'm',
  },
};

export const SmallGroup: Story = {
  args: {
    items: sampleAvatars.slice(0, 3),
    size: 'm',
  },
};

export const LargeGroup: Story = {
  args: {
    items: sampleAvatars,
    size: 'm',
    max: 8,
  },
};

export const ExtraSmall: Story = {
  args: {
    items: sampleAvatars.slice(0, 8),
    size: 'xs',
  },
};

export const Large: Story = {
  args: {
    items: sampleAvatars.slice(0, 8),
    size: 'l',
  },
};

export const ExtraExtraLarge: Story = {
  args: {
    items: sampleAvatars.slice(0, 8),
    size: 'xxl',
  },
};

export const MixedContent: Story = {
  args: {
    items: [
      { src: SAMPLE_IMAGE, alt: 'User 1' },
      { fallback: 'JW', alt: 'Jane Wilson' },
      { fallback: 'MB', alt: 'Mike Brown' },
      { fallback: 'SK', alt: 'Sarah Kim' },
      { fallback: '+5', variant: 'count', alt: '5 more users' },
    ],
    size: 'm',
  },
};

export const TeamMembers: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div>
        <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '8px' }}>Project Team</div>
        <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>12 members</div>
        <AvatarGroupV2 items={sampleAvatars} size="m" max={5} />
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div style={{ 
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '24px',
      maxWidth: '400px',
    }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>Design Team</h3>
      <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#6b7280' }}>
        Collaborating on the new dashboard redesign
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <AvatarGroupV2 items={sampleAvatars} size="s" max={4} />
        <button style={{ 
          fontSize: '14px', 
          color: '#0479ac', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          fontWeight: 600,
        }}>
          View all
        </button>
      </div>
    </div>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <AvatarGroupV2 items={sampleAvatars.slice(0, 5)} size="m" />
      <div style={{ fontSize: '14px', color: '#6b7280' }}>
        Hover over avatars to see names
      </div>
    </div>
  ),
};

export const CompareSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      alignItems: 'center',
    }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666', textAlign: 'center' }}>Small</div>
        <AvatarGroupV2 items={sampleAvatars.slice(0, 5)} size="s" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666', textAlign: 'center' }}>Medium</div>
        <AvatarGroupV2 items={sampleAvatars.slice(0, 5)} size="m" />
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666', textAlign: 'center' }}>Large</div>
        <AvatarGroupV2 items={sampleAvatars.slice(0, 5)} size="l" />
      </div>
    </div>
  ),
};

