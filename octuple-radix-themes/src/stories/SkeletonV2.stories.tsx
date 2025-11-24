import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonV2, SkeletonVariant, SkeletonAnimation } from '../components/SkeletonV2';
import { ButtonV2 } from '../components/ButtonV2';
import React from 'react';

const meta: Meta<typeof SkeletonV2> = {
  title: 'Octuple V2.5/Skeleton',
  component: SkeletonV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Skeleton provides a placeholder preview of content that is still loading.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    animation: {
      control: 'select',
      options: [SkeletonAnimation.Pulse, SkeletonAnimation.Wave],
    },
    variant: {
      control: 'select',
      options: Object.values(SkeletonVariant),
    },
    animating: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonV2>;

export const Default: Story = {
  args: {
    width: 80,
    height: 80,
    variant: SkeletonVariant.Rectangular,
    animation: SkeletonAnimation.Wave,
    animating: true,
    fullWidth: false,
  },
};

export const Child_Wrapper: Story = {
  args: {
    variant: SkeletonVariant.Pill,
    animation: SkeletonAnimation.Wave,
    animating: true,
  },
  render: (args) => (
    <SkeletonV2 {...args}>
      <ButtonV2 variant="primary" size="medium">
        Sample button
      </ButtonV2>
    </SkeletonV2>
  ),
};

export const Sample_Usage: Story = {
  args: {
    animation: SkeletonAnimation.Wave,
    animating: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '210px' }}>
      <SkeletonV2
        width={210}
        height={10}
        variant={SkeletonVariant.Rounded}
        {...args}
      />
      <SkeletonV2
        width={40}
        height={40}
        variant={SkeletonVariant.Circular}
        {...args}
      />
      <SkeletonV2 width={210} height={60} {...args} />
      <SkeletonV2 width={210} height={60} {...args} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', width: '100%' }}>
        <SkeletonV2 width={60} variant={SkeletonVariant.ButtonSmall} {...args} />
        <SkeletonV2 width={60} variant={SkeletonVariant.ButtonSmall} {...args} />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#69717f' }}>
          Circular
        </p>
        <SkeletonV2
          width={80}
          height={80}
          variant={SkeletonVariant.Circular}
        />
      </div>
      <div>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#69717f' }}>
          Rounded
        </p>
        <SkeletonV2
          width={200}
          height={40}
          variant={SkeletonVariant.Rounded}
        />
      </div>
      <div>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#69717f' }}>
          Pill
        </p>
        <SkeletonV2
          width={120}
          height={32}
          variant={SkeletonVariant.Pill}
        />
      </div>
      <div>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#69717f' }}>
          Rectangular
        </p>
        <SkeletonV2
          width={200}
          height={40}
          variant={SkeletonVariant.Rectangular}
        />
      </div>
    </div>
  ),
};

export const Button_Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#69717f' }}>
          Button Small
        </p>
        <SkeletonV2
          width={100}
          variant={SkeletonVariant.ButtonSmall}
        />
      </div>
      <div>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#69717f' }}>
          Button Medium
        </p>
        <SkeletonV2
          width={120}
          variant={SkeletonVariant.ButtonMedium}
        />
      </div>
      <div>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#69717f' }}>
          Button Large
        </p>
        <SkeletonV2
          width={140}
          variant={SkeletonVariant.ButtonLarge}
        />
      </div>
    </div>
  ),
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px' }}>
      <div>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#69717f' }}>
          Wave Animation (Default)
        </p>
        <SkeletonV2
          width={200}
          height={100}
          animation={SkeletonAnimation.Wave}
        />
      </div>
      <div>
        <p style={{ marginBottom: '12px', fontSize: '12px', color: '#69717f' }}>
          Pulse Animation
        </p>
        <SkeletonV2
          width={200}
          height={100}
          animation={SkeletonAnimation.Pulse}
        />
      </div>
    </div>
  ),
};

export const Loading_State: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div style={{ width: '300px' }}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <SkeletonV2 width="100%" height={120} />
            <SkeletonV2 width="100%" height={20} />
            <SkeletonV2 width="80%" height={20} />
          </div>
        ) : (
          <div>
            <img
              src="https://via.placeholder.com/300x120"
              alt="Content"
              style={{ width: '100%', marginBottom: '12px' }}
            />
            <h3 style={{ margin: '0 0 8px 0' }}>Content Loaded!</h3>
            <p style={{ margin: 0, color: '#69717f' }}>
              This content appeared after the skeleton finished loading.
            </p>
          </div>
        )}
      </div>
    );
  },
};

