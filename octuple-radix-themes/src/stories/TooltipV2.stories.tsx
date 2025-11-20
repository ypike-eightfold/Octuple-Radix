import type { Meta, StoryObj } from '@storybook/react';
import { TooltipV2 } from '../components/TooltipV2';
import { ButtonV2 } from '../components/ButtonV2';
import { Icon } from '../components/Icon';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Tooltip',
  component: TooltipV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TooltipV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipV2 content="This is a tooltip">
      <ButtonV2 variant="solid" size="medium">
        Hover me
      </ButtonV2>
    </TooltipV2>
  ),
};

export const LightVariant: Story = {
  render: () => (
    <div style={{ padding: '24px', background: '#f5f7fa', borderRadius: '8px' }}>
      <TooltipV2 content="This is a light tooltip" variant="light">
        <ButtonV2 variant="solid" size="medium">
          Hover for light tooltip
        </ButtonV2>
      </TooltipV2>
    </div>
  ),
};

export const DarkVariant: Story = {
  render: () => (
    <TooltipV2 content="This is a dark tooltip" variant="dark">
      <ButtonV2 variant="outline" size="medium">
        Hover for dark tooltip
      </ButtonV2>
    </TooltipV2>
  ),
};

export const BothVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '24px', background: '#f5f7fa', borderRadius: '8px' }}>
      <TooltipV2 content="Dark variant tooltip" variant="dark">
        <ButtonV2 variant="solid" size="medium">
          Dark
        </ButtonV2>
      </TooltipV2>
      
      <TooltipV2 content="Light variant tooltip" variant="light">
        <ButtonV2 variant="outline" size="medium">
          Light
        </ButtonV2>
      </TooltipV2>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <TooltipV2 content="Tooltip width shouldn't be bigger than this">
      <ButtonV2 variant="solid" size="medium">
        Hover for long tooltip
      </ButtonV2>
    </TooltipV2>
  ),
};

export const AllDirections: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
      <TooltipV2 content="Top tooltip" side="top">
        <ButtonV2 variant="outline" size="medium">
          Top
        </ButtonV2>
      </TooltipV2>
      
      <div style={{ display: 'flex', gap: '48px' }}>
        <TooltipV2 content="Left tooltip" side="left">
          <ButtonV2 variant="outline" size="medium">
            Left
          </ButtonV2>
        </TooltipV2>
        
        <TooltipV2 content="Right tooltip" side="right">
          <ButtonV2 variant="outline" size="medium">
            Right
          </ButtonV2>
        </TooltipV2>
      </div>
      
      <TooltipV2 content="Bottom tooltip" side="bottom">
        <ButtonV2 variant="outline" size="medium">
          Bottom
        </ButtonV2>
      </TooltipV2>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <TooltipV2 content="Settings">
        <button style={{ 
          border: 'none', 
          background: 'transparent', 
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon name="settings" size={24} />
        </button>
      </TooltipV2>
      
      <TooltipV2 content="Edit">
        <button style={{ 
          border: 'none', 
          background: 'transparent', 
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon name="edit" size={24} />
        </button>
      </TooltipV2>
      
      <TooltipV2 content="Delete">
        <button style={{ 
          border: 'none', 
          background: 'transparent', 
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon name="delete" size={24} />
        </button>
      </TooltipV2>
      
      <TooltipV2 content="Share">
        <button style={{ 
          border: 'none', 
          background: 'transparent', 
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon name="share" size={24} />
        </button>
      </TooltipV2>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <TooltipV2 content="No delay" delayDuration={0}>
        <ButtonV2 variant="outline" size="medium">
          No delay
        </ButtonV2>
      </TooltipV2>
      
      <TooltipV2 content="Default delay (200ms)">
        <ButtonV2 variant="outline" size="medium">
          Default delay
        </ButtonV2>
      </TooltipV2>
      
      <TooltipV2 content="Long delay (1s)" delayDuration={1000}>
        <ButtonV2 variant="outline" size="medium">
          Long delay
        </ButtonV2>
      </TooltipV2>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <TooltipV2 
          content="This tooltip is controlled" 
          open={open}
          onOpenChange={setOpen}
        >
          <ButtonV2 variant="solid" size="medium">
            Controlled tooltip
          </ButtonV2>
        </TooltipV2>
        
        <ButtonV2 
          variant="outline" 
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Open'} tooltip
        </ButtonV2>
      </div>
    );
  },
};

export const ActionButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <TooltipV2 content="Save changes">
        <ButtonV2 variant="solid" size="medium">
          <Icon name="save" size={18} />
          <span style={{ marginLeft: '8px' }}>Save</span>
        </ButtonV2>
      </TooltipV2>
      
      <TooltipV2 content="Cancel and discard changes">
        <ButtonV2 variant="outline" size="medium">
          Cancel
        </ButtonV2>
      </TooltipV2>
      
      <TooltipV2 content="Delete permanently">
        <ButtonV2 variant="outline" size="medium">
          <Icon name="delete" size={18} />
        </ButtonV2>
      </TooltipV2>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <p style={{ 
      fontFamily: 'Gilroy, sans-serif',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#1a212e'
    }}>
      Hover over the{' '}
      <TooltipV2 content="Additional information">
        <span style={{ 
          textDecoration: 'underline', 
          cursor: 'help',
          color: '#2c8cc9'
        }}>
          underlined text
        </span>
      </TooltipV2>
      {' '}for more details.
    </p>
  ),
};

export const MultipleTooltips: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '16px',
      padding: '24px'
    }}>
      {['Help', 'Info', 'Warning', 'Success', 'Error', 'Loading', 'Done', 'Cancel'].map((label) => (
        <TooltipV2 key={label} content={`${label} action`}>
          <ButtonV2 variant="outline" size="small">
            {label}
          </ButtonV2>
        </TooltipV2>
      ))}
    </div>
  ),
};

export const DifferentAlignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <TooltipV2 content="Aligned to start" side="top" align="start">
          <ButtonV2 variant="outline" size="medium">
            Start
          </ButtonV2>
        </TooltipV2>
        
        <TooltipV2 content="Aligned to center" side="top" align="center">
          <ButtonV2 variant="outline" size="medium">
            Center
          </ButtonV2>
        </TooltipV2>
        
        <TooltipV2 content="Aligned to end" side="top" align="end">
          <ButtonV2 variant="outline" size="medium">
            End
          </ButtonV2>
        </TooltipV2>
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <div style={{ 
      padding: '24px', 
      background: '#f5f7fa', 
      borderRadius: '8px',
      display: 'flex',
      gap: '16px',
      flexDirection: 'column'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '16px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ margin: 0, fontFamily: 'Gilroy', fontSize: '18px' }}>User Profile</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <TooltipV2 content="Edit profile">
            <button style={{ 
              border: 'none', 
              background: 'transparent', 
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon name="edit" size={20} />
            </button>
          </TooltipV2>
          
          <TooltipV2 content="Account settings">
            <button style={{ 
              border: 'none', 
              background: 'transparent', 
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon name="settings" size={20} />
            </button>
          </TooltipV2>
          
          <TooltipV2 content="More options">
            <button style={{ 
              border: 'none', 
              background: 'transparent', 
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon name="more_vert" size={20} />
            </button>
          </TooltipV2>
        </div>
      </div>
      
      <div style={{ 
        padding: '16px',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <TooltipV2 content="Save changes">
            <ButtonV2 variant="solid" size="medium">
              Save
            </ButtonV2>
          </TooltipV2>
          
          <TooltipV2 content="Discard all changes">
            <ButtonV2 variant="outline" size="medium">
              Cancel
            </ButtonV2>
          </TooltipV2>
        </div>
      </div>
    </div>
  ),
};

