import type { Meta, StoryObj } from '@storybook/react';
import { PipelineReport } from '../examples/PipelineReport';
import { PipelineReportV2 } from '../examples/PipelineReportV2';
import { Heading, Text } from '@radix-ui/themes';
import pipelineReportWireframe from './assets/pipeline-report-wireframe.png';

const meta = {
  title: 'Pages/Pipeline Report',
  component: PipelineReport,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Pipeline Progress Report

A comprehensive analytics dashboard showing candidate pipeline data with charts and detailed tables.

## Features Demonstrated

### Octuple Radix Version:
- Basic Table component for data display
- Standard Select and Button components
- Simple SVG-based charts
- Basic pagination controls

### V2.5 Enhanced Version:
- **EnhancedTable** - Advanced data table with sorting, searching, selection, and pagination
- **SelectV2** - Enhanced dropdowns with custom shapes
- **ButtonV2** - Multiple variants for different actions
- **Advanced Charts** - Enhanced visualizations with gradients and animations

## Key Features:
- Interactive funnel chart showing candidate pipeline
- Trend analysis with daily application data  
- Advanced data table with full CRUD capabilities
- Export functionality
- Real-time filtering and search
        `
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PipelineReport>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadixVersion: Story = {
  render: () => <PipelineReport version="radix" />,
  name: 'Octuple Radix Version',
  parameters: {
    docs: {
      description: {
        story: 'Pipeline report using standard Radix UI components. Features basic table functionality and simple charts.'
      }
    }
  }
};

export const V25Version: Story = {
  render: () => <PipelineReportV2 version="v2.5" />,
  name: 'V2.5 Enhanced Version',
  parameters: {
    docs: {
      description: {
        story: `
Pipeline report using V2.5 enhanced components.

**Key Improvements:**
- **EnhancedTable** with advanced features:
  - Built-in sorting on all columns
  - Global search functionality
  - Row selection capabilities
  - Pagination with size options
  - Loading and empty states
- **SelectV2** with shape variations (rounded, pill)
- **ButtonV2** variants for different action types
- **Enhanced Charts** with gradients and better visual design
- **Improved Layout** with better spacing and visual hierarchy

**Try these interactions:**
- Sort any column by clicking the header
- Search for specific candidates
- Select multiple rows using checkboxes
- Change page size and navigate through pages
        `
      }
    }
  }
};

export const EnhancedTableShowcase: Story = {
  render: () => <PipelineReportV2 version="v2.5" />,
  name: 'EnhancedTable Showcase',
  parameters: {
    docs: {
      description: {
        story: `
This story specifically highlights the **EnhancedTable** component - one of the flagship features of V2.5.

**EnhancedTable Features Demonstrated:**
- ✅ **Sortable Columns** - Click any column header to sort
- ✅ **Global Search** - Search across all candidate data
- ✅ **Row Selection** - Multi-select with checkboxes
- ✅ **Pagination** - Navigate through large datasets
- ✅ **Page Size Options** - Choose how many rows to display
- ✅ **Loading States** - Skeleton loaders during data fetch
- ✅ **Empty States** - Helpful messages when no data
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Accessibility** - Full keyboard navigation support

This represents a significant upgrade from the basic Table component in standard Radix.
        `
      }
    }
  }
};

export const InteractiveDemo: Story = {
  render: () => <PipelineReportV2 version="v2.5" />,
  name: 'Interactive Demo',
  parameters: {
    docs: {
      description: {
        story: `
**Try these interactive features:**

1. **Table Interactions:**
   - Click column headers to sort data
   - Use the search box to filter candidates
   - Select individual or multiple rows
   - Change page size and navigate pages

2. **Filter Controls:**
   - Change job position filter
   - Adjust timeframe for trend chart
   - Use export functionality

3. **Visual Elements:**
   - Hover over chart elements
   - Notice the enhanced styling and animations
   - Compare the visual hierarchy improvements

This demonstrates the full power of the V2.5 design system in a real-world application scenario.
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
        <PipelineReport version="radix" />
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
        <PipelineReportV2 version="v2.5" />
      </div>
    </div>
  ),
  name: 'Side-by-Side Comparison',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `
**Direct Comparison Highlights:**

**Octuple Radix (Left):**
- Basic Table component
- Simple pagination buttons
- Standard form controls
- Basic styling

**V2.5 Enhanced (Right):**
- EnhancedTable with advanced features
- Integrated search and sorting
- SelectV2 with shape variations
- ButtonV2 with multiple variants
- Enhanced visual design with gradients

Notice how the V2.5 version provides significantly more functionality and better user experience while maintaining the same core information architecture.
        `
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
            src={pipelineReportWireframe} 
            alt="Pipeline Report Wireframe" 
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
        <PipelineReport version="radix" />
      </div>
    </div>
  ),
  name: 'Wireframe vs Implementation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Visual comparison between the original wireframe and the implemented Pipeline Progress Report using Octuple Radix components. Demonstrates how reporting interfaces translate from concept to interactive implementation.'
      }
    }
  }
};
