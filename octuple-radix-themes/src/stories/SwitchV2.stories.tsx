import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@radix-ui/themes';
import { SwitchV2 } from '../components/SwitchV2/SwitchV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Switch',
  component: SwitchV2,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Switch size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
  },
} satisfies Meta<typeof SwitchV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sizes Story
export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start">
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Large (44×24px)</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="large" />
          <SwitchV2 size="large" defaultChecked />
        </Flex>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Medium (36×20px)</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="medium" />
          <SwitchV2 size="medium" defaultChecked />
        </Flex>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Small (28×16px)</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="small" />
          <SwitchV2 size="small" defaultChecked />
        </Flex>
      </div>
    </Flex>
  ),
};

// States Story
export const States: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="start">
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Enabled</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="large" />
          <SwitchV2 size="large" defaultChecked />
        </Flex>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Disabled</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="large" disabled />
          <SwitchV2 size="large" disabled defaultChecked />
        </Flex>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Hover (hover over these)</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="large" />
          <SwitchV2 size="large" defaultChecked />
        </Flex>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Pressed (click and hold)</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="large" />
          <SwitchV2 size="large" defaultChecked />
        </Flex>
      </div>
    </Flex>
  ),
};

// With Labels Story
export const WithLabels: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <SwitchV2 size="large" label="Enable notifications" />
      <SwitchV2 size="large" label="Dark mode" defaultChecked />
      <SwitchV2 size="large" label="Auto-save" defaultChecked />
      <SwitchV2 size="large" label="Unavailable feature" disabled />
    </Flex>
  ),
};

// Controlled Switch
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <Flex direction="column" gap="3" align="start">
        <SwitchV2 
          size="large" 
          label="Controlled switch"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <p style={{ fontSize: '14px', color: '#4F5666' }}>
          Switch is: <strong>{checked ? 'ON' : 'OFF'}</strong>
        </p>
        <button 
          onClick={() => setChecked(!checked)}
          style={{ 
            padding: '8px 16px', 
            borderRadius: '8px', 
            border: '1px solid #69717f',
            background: 'white',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Toggle via button
        </button>
      </Flex>
    );
  },
};

// Settings Example
export const SettingsExample: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      emailAlerts: false,
      darkMode: true,
      autoSave: true,
    });

    return (
      <Flex direction="column" gap="3" align="start" style={{ width: '300px' }}>
        <h3 style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>Settings</h3>
        
        <SwitchV2 
          size="large" 
          label="Enable notifications"
          checked={settings.notifications}
          onCheckedChange={(checked) => setSettings({ ...settings, notifications: checked })}
        />
        
        <SwitchV2 
          size="large" 
          label="Email alerts"
          checked={settings.emailAlerts}
          onCheckedChange={(checked) => setSettings({ ...settings, emailAlerts: checked })}
        />
        
        <SwitchV2 
          size="large" 
          label="Dark mode"
          checked={settings.darkMode}
          onCheckedChange={(checked) => setSettings({ ...settings, darkMode: checked })}
        />
        
        <SwitchV2 
          size="large" 
          label="Auto-save"
          checked={settings.autoSave}
          onCheckedChange={(checked) => setSettings({ ...settings, autoSave: checked })}
        />

        <div style={{ 
          marginTop: '16px', 
          padding: '12px', 
          background: '#f5f5f5', 
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          <strong>Current settings:</strong>
          <pre style={{ marginTop: '8px', fontSize: '12px' }}>
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </Flex>
    );
  },
};

// All Sizes Comparison
export const AllSizesComparison: Story = {
  render: () => (
    <Flex direction="column" gap="5" align="start">
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>OFF States</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="large" />
          <SwitchV2 size="medium" />
          <SwitchV2 size="small" />
        </Flex>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>ON States</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="large" defaultChecked />
          <SwitchV2 size="medium" defaultChecked />
          <SwitchV2 size="small" defaultChecked />
        </Flex>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Disabled</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="large" disabled />
          <SwitchV2 size="medium" disabled />
          <SwitchV2 size="small" disabled />
        </Flex>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Disabled + ON</h3>
        <Flex gap="3" align="center">
          <SwitchV2 size="large" disabled defaultChecked />
          <SwitchV2 size="medium" disabled defaultChecked />
          <SwitchV2 size="small" disabled defaultChecked />
        </Flex>
      </div>
    </Flex>
  ),
};

// Interactive Playground
export const Interactive: Story = {
  args: {
    size: 'large',
    label: 'Toggle switch',
    disabled: false,
    defaultChecked: false,
  },
};

