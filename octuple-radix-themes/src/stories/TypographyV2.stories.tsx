import type { Meta, StoryObj } from '@storybook/react';
import { TypographyV2 } from '../components/TypographyV2';
import React from 'react';

const meta: Meta<typeof TypographyV2.Text> = {
  title: 'Octuple V2.5/Typography',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Typography component for rendering standard text styles with consistency.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TypographyV2.Title level={1}>Heading 1</TypographyV2.Title>
      <TypographyV2.Title level={2}>Heading 2</TypographyV2.Title>
      <TypographyV2.Title level={3}>Heading 3</TypographyV2.Title>
      <TypographyV2.Title level={4}>Heading 4</TypographyV2.Title>
      <TypographyV2.Title level={5}>Heading 5</TypographyV2.Title>
    </div>
  ),
};

export const Text_Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TypographyV2.Text>Default text</TypographyV2.Text>
      <TypographyV2.Text type="secondary">Secondary text</TypographyV2.Text>
      <TypographyV2.Text type="success">Success text</TypographyV2.Text>
      <TypographyV2.Text type="warning">Warning text</TypographyV2.Text>
      <TypographyV2.Text type="danger">Danger text</TypographyV2.Text>
      <TypographyV2.Text disabled>Disabled text</TypographyV2.Text>
    </div>
  ),
};

export const Text_Formatting: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <TypographyV2.Text strong>Strong/Bold text</TypographyV2.Text>
      <TypographyV2.Text italic>Italic text</TypographyV2.Text>
      <TypographyV2.Text underline>Underlined text</TypographyV2.Text>
      <TypographyV2.Text delete>Deleted text</TypographyV2.Text>
      <TypographyV2.Text code>Code text</TypographyV2.Text>
      <TypographyV2.Text strong italic>
        Strong and italic
      </TypographyV2.Text>
    </div>
  ),
};

export const Paragraphs: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <TypographyV2.Paragraph>
        This is a paragraph with default styling. It provides standard body text
        formatting with proper line height and spacing.
      </TypographyV2.Paragraph>
      <TypographyV2.Paragraph type="secondary">
        This is a secondary paragraph with muted coloring, often used for
        supporting or less important information.
      </TypographyV2.Paragraph>
      <TypographyV2.Paragraph strong>
        This is a strong paragraph with bold text to emphasize important content.
      </TypographyV2.Paragraph>
    </div>
  ),
};

export const Ellipsis: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ fontSize: '12px', color: '#69717f', marginBottom: '8px' }}>
          Single line ellipsis:
        </p>
        <TypographyV2.Paragraph ellipsis>
          This is a very long text that will be truncated with an ellipsis when it
          exceeds the container width. The text continues but is cut off.
        </TypographyV2.Paragraph>
      </div>
      <div>
        <p style={{ fontSize: '12px', color: '#69717f', marginBottom: '8px' }}>
          Multi-line ellipsis (2 rows):
        </p>
        <TypographyV2.Paragraph ellipsis={{ rows: 2 }}>
          This is a very long text that will be truncated after two lines with an
          ellipsis. The text can span multiple lines but will be cut off after the
          specified number of rows. This demonstrates how the ellipsis feature works
          with multiple lines of content.
        </TypographyV2.Paragraph>
      </div>
    </div>
  ),
};

export const Mixed_Content: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <TypographyV2.Title level={2}>Welcome to Octuple V2.5</TypographyV2.Title>
      <TypographyV2.Paragraph>
        Octuple V2.5 is built with{' '}
        <TypographyV2.Text strong>Radix UI</TypographyV2.Text> for maximum
        accessibility and flexibility.
      </TypographyV2.Paragraph>
      <TypographyV2.Paragraph type="secondary">
        This design system includes <TypographyV2.Text code>Typography</TypographyV2.Text>,{' '}
        <TypographyV2.Text code>Skeleton</TypographyV2.Text>, and many other
        components.
      </TypographyV2.Paragraph>
      <TypographyV2.Title level={3}>Key Features</TypographyV2.Title>
      <TypographyV2.Paragraph>
        <TypographyV2.Text type="success">✓ Accessible</TypographyV2.Text>
        <br />
        <TypographyV2.Text type="success">✓ Customizable</TypographyV2.Text>
        <br />
        <TypographyV2.Text type="success">✓ Modern</TypographyV2.Text>
      </TypographyV2.Paragraph>
    </div>
  ),
};

