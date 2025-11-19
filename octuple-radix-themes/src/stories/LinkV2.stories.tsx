import type { Meta, StoryObj } from '@storybook/react';
import { LinkV2 } from '../components/LinkV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Link',
  component: LinkV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A link component with multiple sizes and states, built with Radix Themes Link.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the link',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Target for the link',
    },
  },
} satisfies Meta<typeof LinkV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    href: 'https://example.com',
    children: 'Text',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    href: 'https://example.com',
    children: 'Text',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    href: 'https://example.com',
    children: 'Text',
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    href: 'https://example.com',
    children: 'Disabled Link',
    size: 'large',
    disabled: true,
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
    size: 'large',
    target: '_blank',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <LinkV2 href="https://example.com" size="large">
        Large Link (18px)
      </LinkV2>
      <LinkV2 href="https://example.com" size="medium">
        Medium Link (16px)
      </LinkV2>
      <LinkV2 href="https://example.com" size="small">
        Small Link (14px)
      </LinkV2>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Enabled:</div>
        <LinkV2 href="https://example.com" size="large">
          Click me
        </LinkV2>
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Hover (hover over link):</div>
        <LinkV2 href="https://example.com" size="large">
          Hover over me
        </LinkV2>
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Visited (demo):</div>
        <span 
          style={{ 
            color: '#0e5985',
            cursor: 'pointer',
            fontFamily: 'Gilroy, Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '24px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Already visited
        </span>
      </div>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Disabled:</div>
        <LinkV2 href="https://example.com" size="large" disabled>
          Cannot click
        </LinkV2>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <LinkV2 href="https://example.com" size="large">
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>→</span>
          <span>Link with arrow</span>
        </span>
      </LinkV2>
      <LinkV2 href="https://example.com" size="large" target="_blank">
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>External link</span>
          <span>↗</span>
        </span>
      </LinkV2>
    </div>
  ),
};

export const InParagraph: Story = {
  render: () => (
    <div style={{ maxWidth: '600px', fontSize: '16px', lineHeight: '1.6' }}>
      <p>
        This is a paragraph with an{' '}
        <LinkV2 href="https://example.com" size="medium">
          inline link
        </LinkV2>{' '}
        in the middle of the text. Links should blend naturally with surrounding content while remaining easily identifiable.
      </p>
    </div>
  ),
};

export const NavigationLinks: Story = {
  render: () => (
    <nav style={{ display: 'flex', gap: '32px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <LinkV2 href="#home" size="medium">
        Home
      </LinkV2>
      <LinkV2 href="#about" size="medium">
        About
      </LinkV2>
      <LinkV2 href="#services" size="medium">
        Services
      </LinkV2>
      <LinkV2 href="#contact" size="medium">
        Contact
      </LinkV2>
    </nav>
  ),
};

export const CardWithLink: Story = {
  render: () => (
    <div style={{
      maxWidth: '400px',
      padding: '24px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '20px' }}>
        Article Title
      </h3>
      <p style={{ marginBottom: '16px', color: '#666', lineHeight: '1.6' }}>
        This is a brief description of the article content that provides context for the reader.
      </p>
      <LinkV2 href="#read-more" size="medium">
        Read more →
      </LinkV2>
    </div>
  ),
};

