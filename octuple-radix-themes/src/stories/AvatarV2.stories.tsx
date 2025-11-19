import type { Meta, StoryObj } from '@storybook/react';
import { AvatarV2 } from '../components/AvatarV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Avatar',
  component: AvatarV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A circular avatar component for user profile images. Built on Radix Themes Avatar with custom Octuple V2.5 styling. Supports multiple sizes, automatic fallback to initials, and optional status indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
      description: 'Size of the avatar',
    },
    statusColor: {
      control: 'select',
      options: ['green', 'yellow', 'red', 'gray', 'blue'],
      description: 'Status indicator color',
    },
    variant: {
      control: 'select',
      options: ['photo', 'count'],
      description: 'Variant type - photo for images/initials, count for numeric indicators',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    fallback: {
      control: 'text',
      description: 'Fallback text (initials)',
    },
  },
} satisfies Meta<typeof AvatarV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample image URLs
const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop';

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="Extra Small" size="xs" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XS (24px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="Small" size="s" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>S (40px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="Medium" size="m" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>M (64px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="Large" size="l" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>L (80px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="Extra Large" size="xl" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XL (100px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="2X Large" size="xxl" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XXL (120px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="3X Large" size="xxxl" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XXXL (200px)</div>
      </div>
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="JD" size="xs" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XS</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="JD" size="s" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>S</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="JD" size="m" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>M</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="JD" size="l" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>L</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="JD" size="xl" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XL</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="JD" size="xxl" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XXL</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="JD" size="xxxl" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XXXL</div>
      </div>
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="Online" size="l" statusColor="green" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Online</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="Away" size="l" statusColor="yellow" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Away</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="Busy" size="l" statusColor="red" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Busy</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="Offline" size="l" statusColor="gray" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Offline</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="In Meeting" size="l" statusColor="blue" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>In Meeting</div>
      </div>
    </div>
  ),
};

export const StatusSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <AvatarV2 src={SAMPLE_IMAGE} alt="XS with status" size="xs" statusColor="green" />
      <AvatarV2 src={SAMPLE_IMAGE} alt="S with status" size="s" statusColor="green" />
      <AvatarV2 src={SAMPLE_IMAGE} alt="M with status" size="m" statusColor="green" />
      <AvatarV2 src={SAMPLE_IMAGE} alt="L with status" size="l" statusColor="green" />
      <AvatarV2 src={SAMPLE_IMAGE} alt="XL with status" size="xl" statusColor="green" />
      <AvatarV2 src={SAMPLE_IMAGE} alt="XXL with status" size="xxl" statusColor="green" />
      <AvatarV2 src={SAMPLE_IMAGE} alt="XXXL with status" size="xxxl" statusColor="green" />
    </div>
  ),
};

export const Default: Story = {
  args: {
    src: SAMPLE_IMAGE,
    alt: 'User Avatar',
    size: 'm',
  },
};

export const WithInitials: Story = {
  args: {
    fallback: 'JD',
    alt: 'John Doe',
    size: 'm',
  },
};

export const WithStatusIndicator: Story = {
  args: {
    src: SAMPLE_IMAGE,
    alt: 'User Avatar',
    size: 'l',
    statusColor: 'green',
  },
};

export const ExtraSmall: Story = {
  args: {
    src: SAMPLE_IMAGE,
    alt: 'Extra Small Avatar',
    size: 'xs',
  },
};

export const Large: Story = {
  args: {
    src: SAMPLE_IMAGE,
    alt: 'Large Avatar',
    size: 'l',
  },
};

export const ExtraExtraExtraLarge: Story = {
  args: {
    src: SAMPLE_IMAGE,
    alt: '3X Large Avatar',
    size: 'xxxl',
  },
};

export const FallbackInitials: Story = {
  args: {
    fallback: 'AB',
    alt: 'Alice Brown',
    size: 'xl',
  },
};

export const UserProfiles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="John Doe" size="m" statusColor="green" />
        <div>
          <div style={{ fontWeight: 600, fontSize: '16px' }}>John Doe</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>Online</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <AvatarV2 fallback="JW" alt="Jane Wilson" size="m" statusColor="yellow" />
        <div>
          <div style={{ fontWeight: 600, fontSize: '16px' }}>Jane Wilson</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>Away</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <AvatarV2 fallback="MB" alt="Mike Brown" size="m" statusColor="red" />
        <div>
          <div style={{ fontWeight: 600, fontSize: '16px' }}>Mike Brown</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>Busy</div>
        </div>
      </div>
    </div>
  ),
};

export const CountVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="+5" variant="count" size="xs" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XS</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="+12" variant="count" size="s" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>S</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="+99" variant="count" size="m" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>M</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="+150" variant="count" size="l" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>L</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="+500" variant="count" size="xl" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XL</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="+999" variant="count" size="xxl" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XXL</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AvatarV2 fallback="+999" variant="count" size="xxxl" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>XXXL</div>
      </div>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginLeft: '-12px', position: 'relative', zIndex: 4 }}>
        <AvatarV2 src={SAMPLE_IMAGE} alt="User 1" size="m" />
      </div>
      <div style={{ marginLeft: '-12px', position: 'relative', zIndex: 3 }}>
        <AvatarV2 fallback="JW" alt="User 2" size="m" />
      </div>
      <div style={{ marginLeft: '-12px', position: 'relative', zIndex: 2 }}>
        <AvatarV2 fallback="MB" alt="User 3" size="m" />
      </div>
      <div style={{ marginLeft: '-12px', position: 'relative', zIndex: 1 }}>
        <AvatarV2 fallback="+5" variant="count" alt="5 more users" size="m" />
      </div>
    </div>
  ),
};

