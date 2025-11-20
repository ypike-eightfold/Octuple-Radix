import type { Meta, StoryObj } from '@storybook/react';
import { IconV2 } from '../components/IconV2';

const meta: Meta<typeof IconV2> = {
  title: 'Octuple V2.5/Icon',
  component: IconV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Unified icon component supporting both Material Symbols and Eightfold Brand icons.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconV2>;

/**
 * Material icon with default settings
 */
export const MaterialIcon: Story = {
  args: {
    type: 'material',
    name: 'home',
    size: 24,
  },
};

/**
 * Material icon with custom color
 */
export const MaterialIconColored: Story = {
  args: {
    type: 'material',
    name: 'check',
    size: 24,
    color: '#50CEE1',
  },
};

/**
 * Brand icon - Eightfold AI logo
 */
export const BrandIconEightfold: Story = {
  args: {
    type: 'brand',
    name: 'eightfold',
    size: 24,
    color: '#343C4C',
  },
};

/**
 * Brand icon with custom color
 */
export const BrandIconColored: Story = {
  args: {
    type: 'brand',
    name: 'talent-design',
    size: 24,
    color: '#50CEE1',
  },
};

/**
 * Gallery of common Material icons
 */
export const MaterialIconGallery: Story = {
  render: () => {
    const commonIcons = [
      'home', 'settings', 'person', 'check', 'close', 'add', 'remove',
      'search', 'menu', 'more_vert', 'arrow_forward', 'arrow_back',
      'star', 'favorite', 'edit', 'delete', 'info', 'warning',
      'notifications', 'mail', 'lock', 'visibility', 'download', 'upload'
    ];

    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(6, 1fr)', 
        gap: '24px',
        padding: '20px'
      }}>
        {commonIcons.map((icon) => (
          <div
            key={icon}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <IconV2 name={icon} size={24} color="#343C4C" />
            <span style={{ fontSize: '12px', color: '#69717f', textAlign: 'center' }}>
              {icon}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

/**
 * Gallery of Eightfold Brand icons
 */
export const BrandIconGallery: Story = {
  render: () => {
    const brandIcons = [
      { name: 'eightfold', label: 'Eightfold AI' },
      { name: 'talent-design', label: 'Talent Design' },
      { name: 'talent-flex', label: 'Talent Flex' },
      { name: 'career-hub', label: 'Career Hub' },
      { name: 'talent-acquisition', label: 'Talent Acquisition' },
    ];

    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '32px',
        padding: '20px'
      }}>
        {brandIcons.map((icon) => (
          <div
            key={icon.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          >
            <IconV2 
              type="brand" 
              name={icon.name} 
              size={32} 
              color="#50CEE1" 
            />
            <span style={{ 
              fontSize: '14px', 
              color: '#69717f', 
              textAlign: 'center',
              fontWeight: 500 
            }}>
              {icon.label}
            </span>
          </div>
        ))}
      </div>
    );
  },
};

/**
 * Different icon sizes
 */
export const IconSizes: Story = {
  render: () => {
    const sizes = [16, 20, 24, 32, 40, 48];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Material Icons */}
        <div>
          <h3 style={{ marginBottom: '20px', color: '#1A212E' }}>Material Icons</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {sizes.map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <IconV2 name="star" size={size} color="#343C4C" />
                <span style={{ fontSize: '12px', color: '#69717f' }}>{size}px</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Icons */}
        <div>
          <h3 style={{ marginBottom: '20px', color: '#1A212E' }}>Brand Icons</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {sizes.map((size) => (
              <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <IconV2 type="brand" name="eightfold" size={size} color="#50CEE1" />
                <span style={{ fontSize: '12px', color: '#69717f' }}>{size}px</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Interactive icons with click handlers
 */
export const InteractiveIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <IconV2
        name="favorite"
        size={32}
        color="#ff4444"
        onClick={() => alert('Favorite clicked!')}
        ariaLabel="Add to favorites"
      />
      <IconV2
        name="share"
        size={32}
        color="#0479ac"
        onClick={() => alert('Share clicked!')}
        ariaLabel="Share"
      />
      <IconV2
        type="brand"
        name="eightfold"
        size={32}
        color="#50CEE1"
        onClick={() => alert('Eightfold clicked!')}
        ariaLabel="Eightfold AI"
      />
    </div>
  ),
};

/**
 * Icons in different contexts
 */
export const IconsInContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Button with icon */}
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: '#0479ac',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        <IconV2 name="add" size={20} color="white" />
        Add Item
      </button>

      {/* Card header with brand icon */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
        }}
      >
        <IconV2 type="brand" name="talent-design" size={24} color="#50CEE1" />
        <div>
          <h4 style={{ margin: 0, color: '#1A212E', fontSize: '16px' }}>Talent Design</h4>
          <p style={{ margin: '4px 0 0', color: '#69717f', fontSize: '14px' }}>
            Design your perfect team structure
          </p>
        </div>
      </div>

      {/* Icon list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { icon: 'check_circle', text: 'Completed onboarding', color: '#10b981' },
          { icon: 'schedule', text: 'Pending review', color: '#f59e0b' },
          { icon: 'error', text: 'Action required', color: '#ef4444' },
        ].map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconV2 name={item.icon} size={20} color={item.color} />
            <span style={{ color: '#343C4C', fontSize: '14px' }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

/**
 * Color variations
 */
export const ColorVariations: Story = {
  render: () => {
    const colors = [
      { name: 'Primary', value: '#0479ac' },
      { name: 'Success', value: '#10b981' },
      { name: 'Warning', value: '#f59e0b' },
      { name: 'Error', value: '#ef4444' },
      { name: 'Brand Blue-Green', value: '#50CEE1' },
      { name: 'Grey', value: '#343C4C' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Material Icons */}
        <div>
          <h3 style={{ marginBottom: '20px', color: '#1A212E' }}>Material Icons</h3>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {colors.map((color) => (
              <div key={color.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <IconV2 name="star" size={32} color={color.value} />
                <span style={{ fontSize: '12px', color: '#69717f', textAlign: 'center' }}>
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Icons */}
        <div>
          <h3 style={{ marginBottom: '20px', color: '#1A212E' }}>Brand Icons</h3>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {colors.map((color) => (
              <div key={color.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <IconV2 type="brand" name="eightfold" size={32} color={color.value} />
                <span style={{ fontSize: '12px', color: '#69717f', textAlign: 'center' }}>
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

