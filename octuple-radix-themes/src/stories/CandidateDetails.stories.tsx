import type { Meta, StoryObj } from '@storybook/react';
import { CandidateDetails } from '../examples/CandidateDetails';
import { CandidateDetailsV2 } from '../examples/CandidateDetailsV2';
import { Heading, Text } from '@radix-ui/themes';
import candidateDetailsWireframe from './assets/candidate-details-wireframe.png';

const meta = {
  title: 'Pages/Candidate Details',
  component: CandidateDetails,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Candidate Details Page

A comprehensive candidate evaluation and management interface showcasing both Radix and V2.5 component implementations.

## Features Demonstrated

### Octuple Radix Version:
- Standard form components (TextArea, Select, Button)
- Basic evaluation system
- Comment functionality

### V2.5 Enhanced Version:
- **TextAreaV2** - Enhanced styling with shapes and improved UX
- **SelectV2** - Advanced dropdown with custom styling
- **ButtonV2** - Multiple variants for different actions
- **Enhanced Visual Design** - Improved cards, gradients, and layouts

## Key Sections:
- Candidate profile and contact info
- Application pipeline progress
- Work experience timeline
- Evaluation ratings system
- Real-time comments section
        `
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CandidateDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadixVersion: Story = {
  render: () => <CandidateDetails version="radix" />,
  name: 'Octuple Radix Version',
  parameters: {
    docs: {
      description: {
        story: 'Candidate details page using standard Radix UI components. Clean interface with essential functionality.'
      }
    }
  }
};

export const V25Version: Story = {
  render: () => <CandidateDetailsV2 version="v2.5" />,
  name: 'V2.5 Enhanced Version',
  parameters: {
    docs: {
      description: {
        story: `
Candidate details page using V2.5 enhanced components.

**Key Improvements:**
- TextAreaV2 with enhanced styling and shapes
- SelectV2 with improved dropdown design
- ButtonV2 variants for different action types
- Enhanced visual hierarchy with gradients and improved cards
- Better component spacing and visual feedback
        `
      }
    }
  }
};

export const InteractiveDemo: Story = {
  render: () => <CandidateDetailsV2 version="v2.5" />,
  name: 'Interactive Demo',
  parameters: {
    docs: {
      description: {
        story: `
**Try these interactions:**
- Add new comments in the comments section
- Use the dropdown to change candidate stage
- Click the star ratings to see visual feedback
- Test the enhanced form controls and buttons

This demonstrates the full interactivity of the V2.5 components.
        `
      }
    }
  }
};

export const Comparison: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100vh' }}>
      <div style={{ borderRight: '2px solid #e5e7eb', overflow: 'auto' }}>
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f9fafb', 
          borderBottom: '1px solid #e5e7eb',
          fontWeight: 'bold',
          textAlign: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          Octuple Radix Version
        </div>
        <CandidateDetails version="radix" />
      </div>
      <div style={{ overflow: 'auto' }}>
        <div style={{ 
          padding: '16px', 
          backgroundColor: '#f0f4ff', 
          borderBottom: '1px solid #e5e7eb',
          fontWeight: 'bold',
          textAlign: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          V2.5 Enhanced Version
        </div>
        <CandidateDetailsV2 version="v2.5" />
      </div>
    </div>
  ),
  name: 'Side-by-Side Comparison',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Compare the standard Radix version with the V2.5 enhanced version. Notice the improved visual design, enhanced form components, and better user experience.'
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
            src={candidateDetailsWireframe} 
            alt="Candidate Details Wireframe" 
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
        <CandidateDetails version="radix" />
      </div>
    </div>
  ),
  name: 'Wireframe vs Implementation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Visual comparison between the original wireframe and the implemented Candidate Details page using Octuple Radix components. Showcases how detailed candidate information is structured and presented.'
      }
    }
  }
};
