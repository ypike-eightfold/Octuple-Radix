import type { Meta, StoryObj } from '@storybook/react';
import { Empty } from '../components/Empty';
import { Card } from '@radix-ui/themes';

const meta = {
  title: 'Components/Empty',
  component: Empty,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'No data available',
    description: 'There is no data to display at the moment',
  },
};

export const WithAction = {
  args: {
    icon: 'folder_open',
    title: 'No files yet',
    description: 'Upload your first file to get started',
    actionLabel: 'Upload File',
    onAction: () => alert('Upload clicked!'),
  },
};

export const NoResults = {
  args: {
    icon: 'search_off',
    title: 'No results found',
    description: 'Try adjusting your search or filters',
    actionLabel: 'Clear Filters',
    onAction: () => alert('Clear filters clicked!'),
  },
};

export const Error = {
  args: {
    icon: 'error_outline',
    title: 'Something went wrong',
    description: 'We encountered an error loading your data',
    actionLabel: 'Try Again',
    onAction: () => alert('Retry clicked!'),
  },
};

export const NoMessages = {
  args: {
    icon: 'mail_outline',
    title: 'No messages',
    description: 'Your inbox is empty. Check back later for new messages.',
  },
};

export const NoNotifications = {
  args: {
    icon: 'notifications_off',
    title: 'All caught up!',
    description: 'You have no new notifications',
  },
};

export const EmptyCart = {
  args: {
    icon: 'shopping_cart',
    title: 'Your cart is empty',
    description: 'Add items to your cart to continue shopping',
    actionLabel: 'Start Shopping',
    onAction: () => alert('Start shopping clicked!'),
  },
};

export const Small = {
  args: {
    icon: 'inbox',
    title: 'No items',
    description: 'Nothing here yet',
    size: 'small',
  },
};

export const Large = {
  args: {
    icon: 'cloud_off',
    title: 'No Connection',
    description: 'Unable to connect to the server. Please check your internet connection.',
    actionLabel: 'Retry Connection',
    onAction: () => alert('Retry clicked!'),
    size: 'large',
  },
};

export const InCard = {
  render: () => (
    <Card style={{ width: '600px', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Empty
        icon="dashboard"
        title="No dashboards yet"
        description="Create your first dashboard to visualize your data"
        actionLabel="Create Dashboard"
        onAction={() => alert('Create dashboard clicked!')}
      />
    </Card>
  ),
};

export const NoComments = {
  args: {
    icon: 'comment',
    title: 'No comments yet',
    description: 'Be the first to leave a comment',
    actionLabel: 'Add Comment',
    onAction: () => alert('Add comment clicked!'),
  },
};

export const EmptyTrash = {
  args: {
    icon: 'delete',
    title: 'Trash is empty',
    description: 'Deleted items will appear here',
  },
};

