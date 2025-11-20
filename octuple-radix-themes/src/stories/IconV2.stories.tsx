import type { Meta, StoryObj } from '@storybook/react';
import { IconV2, BrandIconName } from '../components/IconV2';

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
 * Material Icons Gallery - Common icons at different sizes
 */
export const MaterialIconsGallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Size: 16px</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {['home', 'settings', 'person', 'check', 'close', 'search', 'menu', 'more_vert'].map((iconName) => (
            <div key={iconName} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IconV2 type="material" name={iconName} size={16} />
              <span style={{ fontSize: '12px', color: '#666' }}>{iconName}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Size: 24px (Default)</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {['home', 'settings', 'person', 'check', 'close', 'search', 'menu', 'more_vert'].map((iconName) => (
            <div key={iconName} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IconV2 type="material" name={iconName} size={24} />
              <span style={{ fontSize: '12px', color: '#666' }}>{iconName}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Size: 32px</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {['home', 'settings', 'person', 'check', 'close', 'search', 'menu', 'more_vert'].map((iconName) => (
            <div key={iconName} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IconV2 type="material" name={iconName} size={32} />
              <span style={{ fontSize: '12px', color: '#666' }}>{iconName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

/**
 * Brand Icons - All Eightfold products with Medium and Small sizes
 */
export const BrandIcons: Story = {
  render: () => {
    const brandIcons: { name: BrandIconName; label: string }[] = [
      { name: 'talent-design', label: 'Talent Design' },
      { name: 'talent-flex', label: 'Talent Flex' },
      { name: 'talent-acquisition', label: 'Talent Acquisition' },
      { name: 'talent-university', label: 'Talent University' },
      { name: 'talent-tracking', label: 'Talent Tracking' },
      { name: 'talent-intelligence-platform', label: 'Talent Intelligence Platform' },
      { name: 'career-hub', label: 'Career Hub' },
      { name: 'career-exchange', label: 'Career Exchange' },
      { name: 'customer-community', label: 'Customer Community' },
      { name: 'campaigns', label: 'Campaigns' },
      { name: 'self-service', label: 'Self-Service' },
      { name: 'resource-management', label: 'Resource Management' },
      { name: 'delegation-center', label: 'Delegation Center' },
      { name: 'managed-services', label: 'Managed Services' },
      { name: 'pcs', label: 'PCS' },
      { name: 'octuple', label: 'Octuple' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
        <div>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>
            Eightfold Brand Icons
          </h2>
          <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
            All product icons shown in Medium (40px) and Small (32px) sizes
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
          {brandIcons.map(({ name, label }) => (
            <div 
              key={name} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px',
                padding: '16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                backgroundColor: '#fff',
              }}
            >
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>{label}</div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <IconV2 type="brand" name={name} size="medium" />
                <span style={{ fontSize: '12px', color: '#999' }}>Medium</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <IconV2 type="brand" name={name} size="small" />
                <span style={{ fontSize: '12px', color: '#999' }}>Small</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

/**
 * Brand Icon - Single Medium Icon
 */
export const BrandIconMedium: Story = {
  args: {
    type: 'brand',
    name: 'talent-design',
    size: 'medium',
  },
};

/**
 * Brand Icon - Single Small Icon
 */
export const BrandIconSmall: Story = {
  args: {
    type: 'brand',
    name: 'talent-design',
    size: 'small',
  },
};

/**
 * Icons in context - Material and Brand together
 */
export const MixedIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
        <IconV2 type="material" name="home" size={24} />
        <span style={{ fontSize: '16px' }}>Home Dashboard</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
        <IconV2 type="brand" name="talent-design" size="medium" />
        <span style={{ fontSize: '16px' }}>Talent Design Portal</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
        <IconV2 type="brand" name="career-hub" size="small" />
        <span style={{ fontSize: '14px' }}>Career Hub</span>
        <IconV2 type="material" name="arrow_forward" size={20} style={{ marginLeft: 'auto' }} />
      </div>
    </div>
  ),
};

/**
 * Interactive icons with onClick
 */
export const InteractiveIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '20px' }}>
      <IconV2 
        type="material" 
        name="favorite" 
        size={32} 
        color="#ff4444"
        onClick={() => alert('Material icon clicked!')}
        style={{ cursor: 'pointer' }}
      />
      <IconV2 
        type="brand" 
        name="talent-acquisition" 
        size="medium"
        onClick={() => alert('Brand icon clicked!')}
        style={{ cursor: 'pointer' }}
      />
    </div>
  ),
};

/**
 * Color Variations - Material Icons
 */
export const ColoredMaterialIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '20px', alignItems: 'center' }}>
      <IconV2 type="material" name="check_circle" size={32} color="#10b981" />
      <IconV2 type="material" name="error" size={32} color="#ef4444" />
      <IconV2 type="material" name="warning" size={32} color="#f59e0b" />
      <IconV2 type="material" name="info" size={32} color="#3b82f6" />
    </div>
  ),
};
