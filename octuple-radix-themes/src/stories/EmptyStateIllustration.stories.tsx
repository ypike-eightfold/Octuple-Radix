import type { Meta, StoryObj } from '@storybook/react';
import { EmptyStateIllustration } from '../components/EmptyStateIllustration';
import React from 'react';

const meta: Meta<typeof EmptyStateIllustration> = {
  title: 'Octuple V2.5/Empty State Illustrations',
  component: EmptyStateIllustration,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Empty state illustrations for various use cases. These illustrations provide visual feedback when there is no data or content to display.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'empty-data',
        'technical-error',
        'empty-conversation',
        'empty-search',
        'tasks-complete',
        'empty-successor',
        'unclaimed-profile',
        'empty-documents',
        'alert',
      ],
      description: 'Type of empty state illustration',
    },
    width: {
      control: { type: 'number', min: 50, max: 400 },
      description: 'Width of the illustration',
    },
    height: {
      control: { type: 'number', min: 50, max: 400 },
      description: 'Height of the illustration',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyStateIllustration>;

export const EmptyData: Story = {
  args: {
    type: 'empty-data',
    width: 200,
    height: 184,
  },
};

export const TechnicalError: Story = {
  args: {
    type: 'technical-error',
    width: 200,
    height: 184,
  },
};

export const EmptyConversation: Story = {
  args: {
    type: 'empty-conversation',
    width: 200,
    height: 184,
  },
};

export const EmptySearch: Story = {
  args: {
    type: 'empty-search',
    width: 200,
    height: 184,
  },
};

export const TasksComplete: Story = {
  args: {
    type: 'tasks-complete',
    width: 200,
    height: 184,
  },
};

export const EmptySuccessor: Story = {
  args: {
    type: 'empty-successor',
    width: 200,
    height: 184,
  },
};

export const UnclaimedProfile: Story = {
  args: {
    type: 'unclaimed-profile',
    width: 200,
    height: 184,
  },
};

export const EmptyDocuments: Story = {
  args: {
    type: 'empty-documents',
    width: 200,
    height: 184,
  },
};

export const Alert: Story = {
  args: {
    type: 'alert',
    width: 200,
    height: 184,
  },
};

export const AllIllustrations: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '32px',
      padding: '32px',
    }}>
      <div style={{ textAlign: 'center' }}>
        <EmptyStateIllustration type="empty-data" />
        <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>Empty Data</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <EmptyStateIllustration type="technical-error" />
        <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>Technical Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <EmptyStateIllustration type="empty-conversation" />
        <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>Empty Conversation</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <EmptyStateIllustration type="empty-search" />
        <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>Empty Search</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <EmptyStateIllustration type="tasks-complete" />
        <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>Tasks Complete</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <EmptyStateIllustration type="empty-successor" />
        <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>Empty Successor</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <EmptyStateIllustration type="unclaimed-profile" />
        <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>Unclaimed Profile</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <EmptyStateIllustration type="empty-documents" />
        <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>Empty Documents</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <EmptyStateIllustration type="alert" />
        <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600 }}>Alert</div>
      </div>
    </div>
  ),
};

export const WithCustomSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <EmptyStateIllustration type="empty-data" width={100} height={92} />
      <EmptyStateIllustration type="empty-data" width={200} height={184} />
      <EmptyStateIllustration type="empty-data" width={300} height={276} />
    </div>
  ),
};

export const WithEmptyComponent: Story = {
  render: () => (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      padding: '48px',
      maxWidth: '400px',
    }}>
      <EmptyStateIllustration type="empty-search" />
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          margin: 0, 
          marginBottom: '8px',
          fontSize: '20px',
          fontWeight: 600,
          color: '#1a212e',
        }}>
          No results found
        </h3>
        <p style={{ 
          margin: 0,
          fontSize: '14px',
          color: '#69717f',
          lineHeight: '1.5',
        }}>
          We couldn't find any matches for your search. Try adjusting your filters or search terms.
        </p>
      </div>
      <button style={{
        backgroundColor: '#b0f3fe',
        border: 'none',
        borderRadius: '24px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 600,
        color: '#054d7b',
        cursor: 'pointer',
      }}>
        Clear filters
      </button>
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      padding: '48px',
      maxWidth: '400px',
    }}>
      <EmptyStateIllustration type="technical-error" />
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          margin: 0, 
          marginBottom: '8px',
          fontSize: '20px',
          fontWeight: 600,
          color: '#1a212e',
        }}>
          Something went wrong
        </h3>
        <p style={{ 
          margin: 0,
          fontSize: '14px',
          color: '#69717f',
          lineHeight: '1.5',
        }}>
          We're experiencing technical difficulties. Please try again later.
        </p>
      </div>
      <button style={{
        backgroundColor: '#b0f3fe',
        border: 'none',
        borderRadius: '24px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 600,
        color: '#054d7b',
        cursor: 'pointer',
      }}>
        Try again
      </button>
    </div>
  ),
};

export const SuccessState: Story = {
  render: () => (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      padding: '48px',
      maxWidth: '400px',
    }}>
      <EmptyStateIllustration type="tasks-complete" />
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          margin: 0, 
          marginBottom: '8px',
          fontSize: '20px',
          fontWeight: 600,
          color: '#1a212e',
        }}>
          All tasks complete!
        </h3>
        <p style={{ 
          margin: 0,
          fontSize: '14px',
          color: '#69717f',
          lineHeight: '1.5',
        }}>
          Great job! You've completed all your tasks. Take a break or start something new.
        </p>
      </div>
      <button style={{
        backgroundColor: '#b0f3fe',
        border: 'none',
        borderRadius: '24px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 600,
        color: '#054d7b',
        cursor: 'pointer',
      }}>
        View completed tasks
      </button>
    </div>
  ),
};

