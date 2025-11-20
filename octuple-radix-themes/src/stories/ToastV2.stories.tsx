import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToastV2, ToastV2Provider, ToastV2Viewport } from '../components/ToastV2';
import '../components/ToastV2/ToastV2.css';

const meta = {
  title: 'Octuple V2.5/Toast',
  component: ToastV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast notification component built on Radix UI Toast Primitive with Figma design specifications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToastV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demos
function ToastDemo({ 
  variant, 
  message, 
  icon, 
  action,
  showClose = true,
}: { 
  variant?: any; 
  message: string; 
  icon?: string;
  action?: { label: string; onClick: () => void };
  showClose?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ToastV2Provider swipeDirection="right">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#146da6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          Show Toast
        </button>
        <ToastV2
          open={open}
          onOpenChange={setOpen}
          variant={variant}
          message={message}
          icon={icon}
          action={action}
          showClose={showClose}
        />
        <ToastV2Viewport className="toastv2-viewport" />
      </div>
    </ToastV2Provider>
  );
}

export const Neutral: Story = {
  render: () => (
    <ToastDemo
      variant="neutral"
      message="Body2 is used inside medium component"
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastDemo
      variant="neutral"
      message="Body2 is used inside medium component"
      action={{
        label: 'Button',
        onClick: () => alert('Action clicked!'),
      }}
    />
  ),
};

export const Success: Story = {
  render: () => (
    <ToastDemo
      variant="success"
      message="Your changes have been saved successfully"
    />
  ),
};

export const Error: Story = {
  render: () => (
    <ToastDemo
      variant="error"
      message="There was an error processing your request"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <ToastDemo
      variant="warning"
      message="Your session will expire in 5 minutes"
    />
  ),
};

export const Info: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      message="A new version of the app is available"
    />
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <ToastDemo
      variant="neutral"
      message="This toast will auto-dismiss"
      showClose={false}
    />
  ),
};

export const LongMessage: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      message="This is a very long message that demonstrates how the toast handles extended content and text overflow"
    />
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <ToastDemo
      variant="neutral"
      message="Custom icon toast notification"
      icon="󰏗" // rocket icon
    />
  ),
};

export const MultipleToasts: Story = {
  render: () => {
    const [toasts, setToasts] = useState<Array<{ id: string; variant: any; message: string }>>([]);

    const showToast = (variant: any, message: string) => {
      const id = Math.random().toString(36).slice(2, 9);
      setToasts((prev) => [...prev, { id, variant, message }]);
    };

    return (
      <ToastV2Provider swipeDirection="right">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <button
            onClick={() => showToast('success', 'Operation completed successfully')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#16a34a',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Show Success
          </button>
          <button
            onClick={() => showToast('error', 'Something went wrong')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Show Error
          </button>
          <button
            onClick={() => showToast('warning', 'Please review your input')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Show Warning
          </button>
          <button
            onClick={() => showToast('info', 'Here is some information')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#146da6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Show Info
          </button>
        </div>

        {toasts.map((toast) => (
          <ToastV2
            key={toast.id}
            open={true}
            onOpenChange={(open) => {
              if (!open) {
                setToasts((prev) => prev.filter((t) => t.id !== toast.id));
              }
            }}
            variant={toast.variant}
            message={toast.message}
          />
        ))}

        <ToastV2Viewport className="toastv2-viewport" />
      </ToastV2Provider>
    );
  },
};

export const WithActionAndLongDuration: Story = {
  render: () => (
    <ToastDemo
      variant="info"
      message="Update available - restart to apply changes"
      action={{
        label: 'Restart',
        onClick: () => alert('Restart clicked!'),
      }}
    />
  ),
};

export const AllVariants: Story = {
  render: () => {
    const [activeToast, setActiveToast] = useState<string | null>(null);
    const variants = [
      { variant: 'neutral', message: 'Neutral notification message' },
      { variant: 'success', message: 'Success notification message' },
      { variant: 'error', message: 'Error notification message' },
      { variant: 'warning', message: 'Warning notification message' },
      { variant: 'info', message: 'Info notification message' },
    ];

    return (
      <ToastV2Provider swipeDirection="right">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          {variants.map(({ variant, message }) => (
            <button
              key={variant}
              onClick={() => setActiveToast(variant)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#146da6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'capitalize',
              }}
            >
              Show {variant}
            </button>
          ))}
        </div>

        {activeToast && (
          <ToastV2
            open={true}
            onOpenChange={(open) => {
              if (!open) setActiveToast(null);
            }}
            variant={activeToast as any}
            message={variants.find((v) => v.variant === activeToast)?.message || ''}
          />
        )}

        <ToastV2Viewport className="toastv2-viewport" />
      </ToastV2Provider>
    );
  },
};

