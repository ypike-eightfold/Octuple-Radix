import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../components/Pagination';
import { useState } from 'react';
import { Flex, Text, Card } from '@radix-ui/themes';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

function PaginationDemo({ totalPages, ...props }: any) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Flex direction="column" gap="3">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        {...props}
      />
      <Text size="2" color="gray">
        Current page: {currentPage} of {totalPages}
      </Text>
    </Flex>
  );
}

export const Default: Story = {
  render: () => <PaginationDemo totalPages={10} />,
};

export const FewPages: Story = {
  render: () => <PaginationDemo totalPages={5} />,
};

export const ManyPages: Story = {
  render: () => <PaginationDemo totalPages={100} />,
};

export const Sizes: Story = {
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(1);
    const [page3, setPage3] = useState(1);

    return (
      <Flex direction="column" gap="4">
        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Size 1 (Small)</Text>
            <Pagination
              currentPage={page1}
              totalPages={10}
              onPageChange={setPage1}
              size="1"
            />
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Size 2 (Default)</Text>
            <Pagination
              currentPage={page2}
              totalPages={10}
              onPageChange={setPage2}
              size="2"
            />
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Size 3 (Large)</Text>
            <Pagination
              currentPage={page3}
              totalPages={10}
              onPageChange={setPage3}
              size="3"
            />
          </Flex>
        </Card>
      </Flex>
    );
  },
};

export const WithoutFirstLast: Story = {
  render: () => <PaginationDemo totalPages={20} showFirstLast={false} />,
};

export const TablePagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 12;
    const itemsPerPage = 10;
    const totalItems = 120;
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
      <Card>
        <Flex direction="column" gap="4">
          {/* Simulated table */}
          <Flex direction="column" gap="2">
            <Text size="3" weight="bold">Users List</Text>
            {Array.from({ length: 10 }, (_, i) => (
              <Flex key={i} justify="between" p="2" style={{ background: 'var(--gray-2)', borderRadius: '4px' }}>
                <Text size="2">User {startItem + i}</Text>
                <Text size="2" color="gray">user{startItem + i}@example.com</Text>
              </Flex>
            ))}
          </Flex>

          {/* Pagination footer */}
          <Flex justify="between" align="center">
            <Text size="2" color="gray">
              Showing {startItem}-{endItem} of {totalItems}
            </Text>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </Flex>
        </Flex>
      </Card>
    );
  },
};

export const CustomSiblingCount: Story = {
  render: () => {
    const [page1, setPage1] = useState(5);
    const [page2, setPage2] = useState(5);

    return (
      <Flex direction="column" gap="4">
        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Sibling Count: 1 (Default)</Text>
            <Pagination
              currentPage={page1}
              totalPages={20}
              onPageChange={setPage1}
              siblingCount={1}
            />
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">Sibling Count: 2</Text>
            <Pagination
              currentPage={page2}
              totalPages={20}
              onPageChange={setPage2}
              siblingCount={2}
            />
          </Flex>
        </Card>
      </Flex>
    );
  },
};

export const WithQuickJumper: Story = {
  render: () => <PaginationDemo totalPages={50} showQuickJumper />,
};

export const JumperSizes: Story = {
  render: () => {
    const [page1, setPage1] = useState(1);
    const [page2, setPage2] = useState(1);
    const [page3, setPage3] = useState(1);

    return (
      <Flex direction="column" gap="6">
        <Card p="4">
          <Flex direction="column" gap="3">
            <Text size="3" weight="bold">Size 1 with Jumper</Text>
            <Pagination
              currentPage={page1}
              totalPages={20}
              onPageChange={setPage1}
              size="1"
              showQuickJumper
            />
          </Flex>
        </Card>

        <Card p="4">
          <Flex direction="column" gap="3">
            <Text size="3" weight="bold">Size 2 with Jumper (Default)</Text>
            <Pagination
              currentPage={page2}
              totalPages={20}
              onPageChange={setPage2}
              size="2"
              showQuickJumper
            />
          </Flex>
        </Card>

        <Card p="4">
          <Flex direction="column" gap="3">
            <Text size="3" weight="bold">Size 3 with Jumper</Text>
            <Pagination
              currentPage={page3}
              totalPages={20}
              onPageChange={setPage3}
              size="3"
              showQuickJumper
            />
          </Flex>
        </Card>
      </Flex>
    );
  },
};

export const LargeDatasetWithJumper: Story = {
  render: () => <PaginationDemo totalPages={1000} showQuickJumper showFirstLast />,
};

