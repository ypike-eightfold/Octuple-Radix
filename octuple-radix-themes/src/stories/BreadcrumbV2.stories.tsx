import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbV2 } from '../components/BreadcrumbV2/BreadcrumbV2';

const meta: Meta<typeof BreadcrumbV2> = {
  title: 'Octuple V2.5/Breadcrumb',
  component: BreadcrumbV2,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A navigation component that shows the current page location within a hierarchical structure. Uses Radix UI Dropdown Menu primitive for truncated items menu.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BreadcrumbV2>;

// Sample breadcrumb items
const simpleItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops', href: '/products/electronics/laptops' },
];

const manyItems = [
  { label: 'Link 1', href: '/link1' },
  { label: 'Link 2', href: '/link2' },
  { label: 'Link 3', href: '/link3' },
  { label: 'Link 4', href: '/link4' },
  { label: 'Link 5', href: '/link5' },
  { label: 'Link 6', href: '/link6' },
  { label: 'Link 7', href: '/link7' },
];

/**
 * Default breadcrumb with 4 items (no truncation).
 */
export const Default: Story = {
  args: {
    items: simpleItems,
  },
};

/**
 * Breadcrumb with maximum of 4 items displayed (default behavior).
 */
export const MaxFourLinks: Story = {
  args: {
    items: simpleItems,
    maxItems: 4,
  },
};

/**
 * Breadcrumb with many items that gets truncated.
 * Shows: First item, "...", last 2 items.
 * Middle items appear in a dropdown menu when clicking "...".
 */
export const Truncated: Story = {
  args: {
    items: manyItems,
    maxItems: 4,
  },
};

/**
 * Breadcrumb with only 2 items.
 */
export const TwoItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
};

/**
 * Breadcrumb with only 1 item.
 */
export const SingleItem: Story = {
  args: {
    items: [{ label: 'Home', href: '/' }],
  },
};

/**
 * Breadcrumb with custom max items limit.
 */
export const CustomMaxItems: Story = {
  args: {
    items: manyItems,
    maxItems: 3,
  },
};

/**
 * Real-world example: E-commerce navigation.
 */
export const EcommerceExample: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'Electronics', href: '/shop/electronics' },
      { label: 'Computers', href: '/shop/electronics/computers' },
      { label: 'Laptops', href: '/shop/electronics/computers/laptops' },
      { label: 'Gaming Laptops', href: '/shop/electronics/computers/laptops/gaming' },
    ],
    maxItems: 4,
  },
};

/**
 * Real-world example: Documentation navigation.
 */
export const DocumentationExample: Story = {
  args: {
    items: [
      { label: 'Docs', href: '/docs' },
      { label: 'Components', href: '/docs/components' },
      { label: 'Navigation', href: '/docs/components/navigation' },
      { label: 'Breadcrumb', href: '/docs/components/navigation/breadcrumb' },
    ],
  },
};

/**
 * Real-world example: File system navigation.
 */
export const FileSystemExample: Story = {
  args: {
    items: [
      { label: 'Root', href: '/' },
      { label: 'Users', href: '/users' },
      { label: 'Documents', href: '/users/documents' },
      { label: 'Projects', href: '/users/documents/projects' },
      { label: '2024', href: '/users/documents/projects/2024' },
      { label: 'Q1', href: '/users/documents/projects/2024/q1' },
      { label: 'Reports', href: '/users/documents/projects/2024/q1/reports' },
    ],
    maxItems: 4,
  },
};

/**
 * Breadcrumb with very long labels.
 */
export const LongLabels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Very Long Category Name That Extends Beyond Normal', href: '/category' },
      { label: 'Another Long Subcategory Title Here', href: '/category/sub' },
      { label: 'Final Page', href: '/category/sub/page' },
    ],
  },
};

