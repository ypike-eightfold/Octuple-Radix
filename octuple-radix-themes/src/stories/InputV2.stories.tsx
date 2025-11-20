import type { Meta, StoryObj } from '@storybook/react';
import { InputV2 } from '../components/InputV2/InputV2';
import { useState } from 'react';

const meta = {
  title: 'Octuple V2.5/Input',
  component: InputV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    size: 'large',
    placeholder: 'Type to search',
  },
};

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Large</p>
        <InputV2 size="large" placeholder="Type to search" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Medium</p>
        <InputV2 size="medium" placeholder="Type to search" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Small</p>
        <InputV2 size="small" placeholder="Type to search" />
      </div>
    </div>
  ),
};

// States for Large size
export const LargeStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Enabled</p>
        <InputV2 size="large" placeholder="Type to search" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Filled</p>
        <InputV2 size="large" defaultValue="UX Designer" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Disabled</p>
        <InputV2 size="large" defaultValue="UX Designer" disabled />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Read-only</p>
        <InputV2 size="large" defaultValue="UX Designer" readOnly />
      </div>
    </div>
  ),
};

// Highlight variants for Large size
export const LargeHighlights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Default (Focus)</p>
        <InputV2 size="large" defaultValue="UX Designer" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Success</p>
        <InputV2 size="large" defaultValue="UX Designer" variant="success" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Warning</p>
        <InputV2 size="large" defaultValue="UX Designer" variant="warning" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Error</p>
        <InputV2 size="large" defaultValue="UX Designer" variant="error" />
      </div>
    </div>
  ),
};

// States for Medium size
export const MediumStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Enabled</p>
        <InputV2 size="medium" placeholder="Type to search" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Filled</p>
        <InputV2 size="medium" defaultValue="UX Designer" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Disabled</p>
        <InputV2 size="medium" defaultValue="UX Designer" disabled />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Read-only</p>
        <InputV2 size="medium" defaultValue="UX Designer" readOnly />
      </div>
    </div>
  ),
};

// Highlight variants for Medium size
export const MediumHighlights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Default (Focus)</p>
        <InputV2 size="medium" defaultValue="UX Designer" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Success</p>
        <InputV2 size="medium" defaultValue="UX Designer" variant="success" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Warning</p>
        <InputV2 size="medium" defaultValue="UX Designer" variant="warning" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Error</p>
        <InputV2 size="medium" defaultValue="UX Designer" variant="error" />
      </div>
    </div>
  ),
};

// States for Small size
export const SmallStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Enabled</p>
        <InputV2 size="small" placeholder="Type to search" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Filled</p>
        <InputV2 size="small" defaultValue="UX Designer" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Disabled</p>
        <InputV2 size="small" defaultValue="UX Designer" disabled />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Read-only</p>
        <InputV2 size="small" defaultValue="UX Designer" readOnly />
      </div>
    </div>
  ),
};

// Highlight variants for Small size
export const SmallHighlights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Default (Focus)</p>
        <InputV2 size="small" defaultValue="UX Designer" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Success</p>
        <InputV2 size="small" defaultValue="UX Designer" variant="success" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Warning</p>
        <InputV2 size="small" defaultValue="UX Designer" variant="warning" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Error</p>
        <InputV2 size="small" defaultValue="UX Designer" variant="error" />
      </div>
    </div>
  ),
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
        <InputV2
          size="large"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
        />
        <div style={{ fontSize: '14px', color: '#69717f' }}>
          Current value: <strong>{value || '(empty)'}</strong>
        </div>
        <button
          onClick={() => setValue('')}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #69717f',
            background: 'white',
            cursor: 'pointer',
          }}
        >
          Clear
        </button>
      </div>
    );
  },
};

// With custom left icon
export const CustomLeftIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <InputV2 size="large" leftIcon="person" placeholder="Enter your name" />
      <InputV2 size="large" leftIcon="email" placeholder="Enter your email" />
      <InputV2 size="large" leftIcon="location_on" placeholder="Enter location" />
    </div>
  ),
};

// Form example
export const FormExample: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted!');
        }}
      >
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
            Search Query
          </label>
          <InputV2 size="large" leftIcon="search" placeholder="Type to search" />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
            Email Address
          </label>
          <InputV2 size="medium" leftIcon="email" placeholder="Enter your email" />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
            Location
          </label>
          <InputV2 size="medium" leftIcon="location_on" placeholder="Enter location" />
        </div>

        <button
          type="submit"
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            background: '#2c8cc9',
            color: 'white',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  ),
};

// Validation states
export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
          Valid Input
        </label>
        <InputV2
          size="large"
          defaultValue="john.doe@example.com"
          variant="success"
          leftIcon="email"
        />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#3d8f79' }}>
          ✓ Email address is valid
        </p>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
          Warning Input
        </label>
        <InputV2
          size="large"
          defaultValue="john.doe"
          variant="warning"
          leftIcon="email"
        />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#c97e19' }}>
          ⚠ Email format looks incomplete
        </p>
      </div>

      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>
          Error Input
        </label>
        <InputV2
          size="large"
          defaultValue="invalid"
          variant="error"
          leftIcon="email"
        />
        <p style={{ marginTop: '8px', fontSize: '12px', color: '#c15151' }}>
          ✗ Invalid email address format
        </p>
      </div>
    </div>
  ),
};

