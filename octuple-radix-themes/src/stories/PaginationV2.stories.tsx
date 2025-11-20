import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PaginationV2 } from '../components/PaginationV2';

const meta: Meta<typeof PaginationV2> = {
  title: 'Octuple V2.5/Pagination',
  component: PaginationV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Pagination component for navigating through pages. Built with native React buttons and IconV2. Supports three styles: Full Pagination, Carousel Dots, and Micro Pagination.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'select',
      options: ['full', 'carousel', 'micro'],
      description: 'Visual style of the pagination',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: 'Size of the pagination buttons',
    },
    currentPage: {
      control: 'number',
      description: 'Current active page (1-indexed)',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
    },
    maxPages: {
      control: 'number',
      description: 'Maximum page buttons to show before truncating (full style only)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationV2>;

// Wrapper to handle state
const PaginationWrapper = (args: any) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);

  return (
    <PaginationV2
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const FullPaginationLarge: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 13,
    style: 'full',
    size: 'large',
  },
};

export const FullPaginationMedium: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 5,
    totalPages: 13,
    style: 'full',
    size: 'medium',
  },
};

export const FullPaginationSmall: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 11,
    totalPages: 13,
    style: 'full',
    size: 'small',
  },
};

export const CarouselDotsLarge: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    style: 'carousel',
    size: 'large',
  },
};

export const CarouselDotsMedium: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 2,
    totalPages: 10,
    style: 'carousel',
    size: 'medium',
  },
};

export const CarouselDotsSmall: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 3,
    totalPages: 10,
    style: 'carousel',
    size: 'small',
  },
};

export const MicroPaginationLarge: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 15,
    style: 'micro',
    size: 'large',
  },
};

export const MicroPaginationMedium: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 7,
    totalPages: 15,
    style: 'micro',
    size: 'medium',
  },
};

export const MicroPaginationSmall: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 15,
    totalPages: 15,
    style: 'micro',
    size: 'small',
  },
};

export const FewPages: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 2,
    totalPages: 5,
    style: 'full',
    size: 'large',
  },
};

export const ManyPages: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 15,
    totalPages: 50,
    style: 'full',
    size: 'large',
  },
};

export const FirstPage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 1,
    totalPages: 20,
    style: 'full',
    size: 'large',
  },
};

export const LastPage: Story = {
  render: (args) => <PaginationWrapper {...args} />,
  args: {
    currentPage: 20,
    totalPages: 20,
    style: 'full',
    size: 'large',
  },
};

export const AllStyles: Story = {
  render: () => {
    const [fullPage, setFullPage] = useState(11);
    const [carouselPage, setCarouselPage] = useState(1);
    const [microPage, setMicroPage] = useState(1);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontFamily: 'Gilroy, sans-serif' }}>Full Pagination</h3>
          <PaginationV2
            currentPage={fullPage}
            totalPages={13}
            onPageChange={setFullPage}
            style="full"
            size="large"
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '16px', fontFamily: 'Gilroy, sans-serif' }}>Carousel Dots</h3>
          <PaginationV2
            currentPage={carouselPage}
            totalPages={10}
            onPageChange={setCarouselPage}
            style="carousel"
            size="large"
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '16px', fontFamily: 'Gilroy, sans-serif' }}>Micro Pagination</h3>
          <PaginationV2
            currentPage={microPage}
            totalPages={15}
            onPageChange={setMicroPage}
            style="micro"
            size="large"
          />
        </div>
      </div>
    );
  },
};

