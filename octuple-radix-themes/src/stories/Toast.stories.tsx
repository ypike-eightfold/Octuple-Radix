import type { Meta, StoryObj } from '@storybook/react';
import { Button, Flex } from '@radix-ui/themes';
import { Icon } from '../components/Icon';
import { Toast, ToastProvider, ToastViewport } from '../components/Toast';
import { useState } from 'react';

const meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function ToastDemo({ variant, title, description, action }: any) {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider swipeDirection="right">
      <Button onClick={() => setOpen(true)}>
        Show {variant || 'default'} toast
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        variant={variant}
        title={title}
        description={description}
        action={action}
      />
      <ToastViewport />
    </ToastProvider>
  );
}

export const Default: Story = {
  render: () => (
    <ToastDemo
      description="This is a default toast notification."
    />
  ),
};

export const Success: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      title="Success"
      description="Your changes have been saved successfully."
    />
  ),
};

export const Error: Story = {
  render: () => (
    <ToastDemo
      variant="error"
      title="Error"
      description="There was an error processing your request."
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      title="Warning"
      description="Your session will expire in 5 minutes."
    />
  ),
};

export const Info: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      title="Information"
      description="A new version of the app is available."
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      title="Update Available"
      description="A new version is ready to install."
      action={{
        label: 'Update',
        onClick: () => alert('Update clicked!'),
      }}
    />
  ),
};

export const AllVariants: Story = {
  render: () => {
    const [toasts, setToasts] = useState<Array<{ id: string; variant: any; title: string; description: string }>>([]);

    const showToast = (variant: any, title: string, description: string) => {
      const id = Math.random().toString(36).slice(2, 9);
      setToasts(prev => [...prev, { id, variant, title, description }]);
    };

    return (
      <ToastProvider swipeDirection="right">
        <Flex direction="column" gap="3">
          <Button onClick={() => showToast('success', 'Success', 'Operation completed successfully')}>
            <Icon name="check_circle" size={18} />
            Success Toast
          </Button>
          <Button onClick={() => showToast('error', 'Error', 'Something went wrong')}>
            <Icon name="error" size={18} />
            Error Toast
          </Button>
          <Button onClick={() => showToast('warning', 'Warning', 'Please review your input')}>
            <Icon name="warning" size={18} />
            Warning Toast
          </Button>
          <Button onClick={() => showToast('info', 'Info', 'Here is some information')}>
            <Icon name="info" size={18} />
            Info Toast
          </Button>
        </Flex>
        
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            open={true}
            onOpenChange={(open) => {
              if (!open) {
                setToasts(prev => prev.filter(t => t.id !== toast.id));
              }
            }}
            variant={toast.variant}
            title={toast.title}
            description={toast.description}
          />
        ))}
        
        <ToastViewport />
      </ToastProvider>
    );
  },
};

