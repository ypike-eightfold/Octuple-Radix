import type { Meta, StoryObj } from '@storybook/react';
import { JobsDashboard } from '../examples/JobsDashboard';
import { JobsDashboardV2 } from '../examples/JobsDashboardV2';
import { Heading, Text } from '@radix-ui/themes';
import jobsWireframe from './assets/jobs-wireframe.png';

const meta = {
  title: 'Pages/Jobs Dashboard',
  component: JobsDashboard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Jobs Dashboard

A comprehensive jobs management dashboard showcasing both Radix and V2.5 component implementations.

## Features Demonstrated

### Octuple Radix Version:
- Octuple Radix UI components (Button, TextField, Select, etc.)
- Basic functionality and styling
- Consistent with Radix design patterns

### V2.5 Enhanced Version:
- **ButtonV2** - Enhanced variants (primary, secondary, neutral, etc.)
- **TextFieldV2** - Enhanced styling with shapes (rounded, pill)
- **SelectV2** - Multi-select capabilities and custom shapes
- **Improved UX** - Enhanced empty states and visual feedback

## Interactive Elements:
- Job search and filtering
- Navigation sidebar
- Metrics cards
- Job management actions
        `
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof JobsDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadixVersion: Story = {
  render: () => <JobsDashboard version="radix" />,
  name: 'Octuple Radix Version',
  parameters: {
    docs: {
      description: {
        story: 'Jobs Dashboard using standard Radix UI components. Features basic functionality with clean, minimal design.'
      }
    }
  }
};

export const V25Version: Story = {
  render: () => <JobsDashboardV2 version="v2.5" />,
  name: 'V2.5 Enhanced Version',
  parameters: {
    docs: {
      description: {
        story: `
Jobs Dashboard using V2.5 enhanced components. 

**Key Improvements:**
- ButtonV2 with 8 different variants
- SelectV2 with shape options (rounded, pill, inline)
- TextFieldV2 with enhanced styling and error states
- Improved empty states and user feedback
- Enhanced visual hierarchy and component consistency
        `
      }
    }
  }
};

export const Comparison: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100vh' }}>
      <div style={{ borderRight: '2px solid #e5e7eb' }}>
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f9fafb', 
          borderBottom: '1px solid #e5e7eb',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          Octuple Radix Version
        </div>
        <JobsDashboard version="radix" />
      </div>
      <div>
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f0f4ff', 
          borderBottom: '1px solid #e5e7eb',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          V2.5 Enhanced Version
        </div>
        <JobsDashboardV2 version="v2.5" />
      </div>
    </div>
  ),
  name: 'Side-by-Side Comparison',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Direct comparison between Octuple Radix and V2.5 versions. Notice the enhanced styling, additional features, and improved user experience in the V2.5 version.'
      }
    }
  }
};

export const WireframeVsImplementation: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100vh' }}>
      <div>
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f5f5f5', 
          borderBottom: '1px solid #e5e7eb',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          Original Wireframe
        </div>
        <div style={{ 
          height: 'calc(100vh - 57px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa'
        }}>
          <img 
            src={jobsWireframe} 
            alt="Jobs Dashboard Wireframe" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              objectFit: 'contain',
              border: '1px solid #e0e0e0',
              borderRadius: '8px'
            }} 
          />
        </div>
      </div>
      <div>
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f0f4ff', 
          borderBottom: '1px solid #e5e7eb',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          Built Implementation
        </div>
        <JobsDashboard version="radix" />
      </div>
    </div>
  ),
  name: 'Wireframe vs Implementation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Visual comparison between the original wireframe and the implemented Jobs Dashboard using Octuple Radix components. This story shows how design concepts translate into functional, interactive components.'
      }
    }
  }
};
