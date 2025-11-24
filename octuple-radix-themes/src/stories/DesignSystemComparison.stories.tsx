import type { Meta, StoryObj } from '@storybook/react';
import { Box, Card, Flex, Grid, Heading, Text, Badge } from '@radix-ui/themes';
import { ButtonV2, TextFieldV2, SelectV2, CheckboxV2, TextAreaV2 } from '../index';

const meta = {
  title: 'Pages/Design System Comparison',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Design System Evolution: Radix → V2.5

This page showcases the evolution from standard Radix UI components to the enhanced V2.5 design system, demonstrating the improvements and new capabilities introduced by your team.

## Key Improvements in V2.5

### 1. Enhanced Form Controls
- **8 Button variants** vs standard Button
- **Shape variations** (rounded, pill, inline)
- **Enhanced error states** and validation
- **Material Icons integration**
- **Consistent sizing system** (small, medium, large)

### 2. Advanced Data Components
- **EnhancedTable** with sorting, filtering, pagination
- **Timeline** and **Stepper** components
- **Toast** notifications system
- **Uploader** with drag-and-drop

### 3. Design Language Improvements
- **Consistent visual hierarchy**
- **Enhanced color system**
- **Improved accessibility**
- **Better responsive behavior**
        `
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentEvolution: Story = {
  render: () => {
    const SelectOptions = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ];

    return (
      <Box style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Heading size="6" style={{ marginBottom: '24px', textAlign: 'center' }}>
          V2.5 Component Showcase
        </Heading>

        <Grid columns="2" gap="6">
          {/* Button Variants */}
          <Card style={{ padding: '20px' }}>
            <Heading size="4" style={{ marginBottom: '16px' }}>ButtonV2 Variants</Heading>
            <Text size="2" color="gray" style={{ marginBottom: '16px' }}>
              8 different variants for various use cases
            </Text>
            <Flex direction="column" gap="3">
              <ButtonV2 variant="primary">Primary Action</ButtonV2>
              <ButtonV2 variant="secondary">Secondary Action</ButtonV2>
              <ButtonV2 variant="default">Default Action</ButtonV2>
              <ButtonV2 variant="neutral">Neutral Action</ButtonV2>
              <ButtonV2 variant="system-ui">System UI</ButtonV2>
              <ButtonV2 variant="disruptive-primary">Disruptive Primary</ButtonV2>
              <ButtonV2 variant="disruptive-secondary">Disruptive Secondary</ButtonV2>
              <ButtonV2 variant="disruptive-default">Disruptive Default</ButtonV2>
            </Flex>
          </Card>

          {/* Form Controls */}
          <Card style={{ padding: '20px' }}>
            <Heading size="4" style={{ marginBottom: '16px' }}>Enhanced Form Controls</Heading>
            <Text size="2" color="gray" style={{ marginBottom: '16px' }}>
              V2.5 components with shapes and enhanced styling
            </Text>
            <Flex direction="column" gap="4">
              <Box>
                <Text size="2" weight="medium" style={{ marginBottom: '8px' }}>TextFieldV2 - Rounded Shape</Text>
                <TextFieldV2 placeholder="Enter text..." shape="rounded" size="large" />
              </Box>
              <Box>
                <Text size="2" weight="medium" style={{ marginBottom: '8px' }}>TextFieldV2 - Pill Shape</Text>
                <TextFieldV2 placeholder="Search..." shape="pill" size="medium" />
              </Box>
              <Box>
                <Text size="2" weight="medium" style={{ marginBottom: '8px' }}>SelectV2 - Enhanced Dropdown</Text>
                <SelectV2 
                  options={SelectOptions}
                  placeholder="Choose option..."
                  shape="rounded"
                  size="large"
                />
              </Box>
            </Flex>
          </Card>

          {/* Size Variations */}
          <Card style={{ padding: '20px' }}>
            <Heading size="4" style={{ marginBottom: '16px' }}>Size System</Heading>
            <Text size="2" color="gray" style={{ marginBottom: '16px' }}>
              Consistent sizing across all components
            </Text>
            <Flex direction="column" gap="3">
              <Box>
                <Text size="1" weight="medium" style={{ marginBottom: '8px' }}>Small</Text>
                <ButtonV2 variant="primary" size="small">Small Button</ButtonV2>
              </Box>
              <Box>
                <Text size="2" weight="medium" style={{ marginBottom: '8px' }}>Medium</Text>
                <ButtonV2 variant="primary" size="medium">Medium Button</ButtonV2>
              </Box>
              <Box>
                <Text size="3" weight="medium" style={{ marginBottom: '8px' }}>Large</Text>
                <ButtonV2 variant="primary" size="large">Large Button</ButtonV2>
              </Box>
            </Flex>
          </Card>

          {/* Advanced Components */}
          <Card style={{ padding: '20px' }}>
            <Heading size="4" style={{ marginBottom: '16px' }}>Advanced Components</Heading>
            <Text size="2" color="gray" style={{ marginBottom: '16px' }}>
              New components introduced in V2.5
            </Text>
            <Flex direction="column" gap="4">
              <Box>
                <Text size="2" weight="medium" style={{ marginBottom: '8px' }}>CheckboxV2 with States</Text>
                <Flex gap="3" align="center">
                  <CheckboxV2 size="large" defaultChecked />
                  <CheckboxV2 size="large" indeterminate />
                  <CheckboxV2 size="large" />
                </Flex>
              </Box>
              <Box>
                <Text size="2" weight="medium" style={{ marginBottom: '8px' }}>TextAreaV2 Enhanced</Text>
                <TextAreaV2 
                  placeholder="Enhanced textarea with V2.5 styling..."
                  shape="rounded"
                  size="large"
                  style={{ minHeight: '80px' }}
                />
              </Box>
            </Flex>
          </Card>
        </Grid>

        {/* Feature Comparison */}
        <Card style={{ 
          padding: '24px', 
          marginTop: '32px',
          background: 'linear-gradient(135deg, var(--blue-2), var(--indigo-2))'
        }}>
          <Heading size="5" style={{ marginBottom: '20px' }}>V2.5 vs Octuple Radix</Heading>
          
          <Grid columns="2" gap="6">
            <Box>
              <Heading size="3" style={{ marginBottom: '12px' }}>Octuple Radix</Heading>
              <Flex direction="column" gap="2">
                <Text size="2">• Basic Button component</Text>
                <Text size="2">• Standard TextField</Text>
                <Text size="2">• Basic Select dropdown</Text>
                <Text size="2">• Simple Table component</Text>
                <Text size="2">• Limited customization</Text>
              </Flex>
            </Box>
            
            <Box>
              <Heading size="3" style={{ marginBottom: '12px' }}>V2.5 Enhanced</Heading>
              <Flex direction="column" gap="2">
                <Text size="2">• ButtonV2 with 8 variants</Text>
                <Text size="2">• TextFieldV2 with shapes & error states</Text>
                <Text size="2">• SelectV2 with multi-select & shapes</Text>
                <Text size="2">• EnhancedTable with sorting/filtering</Text>
                <Text size="2">• Material Icons integration</Text>
                <Text size="2">• Consistent design language</Text>
                <Text size="2">• Enhanced accessibility</Text>
                <Text size="2">• Advanced interaction patterns</Text>
              </Flex>
            </Box>
          </Grid>
          
          <Flex justify="center" style={{ marginTop: '24px' }}>
            <Badge size="3" variant="solid" color="blue">
              🚀 V2.5 = Enhanced UX + Developer Experience
            </Badge>
          </Flex>
        </Card>
      </Box>
    );
  },
  name: 'Component Evolution Showcase',
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive showcase of V2.5 component improvements and new capabilities compared to standard Radix UI components.'
      }
    }
  }
};
