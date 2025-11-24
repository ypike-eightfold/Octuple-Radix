import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StackV2 } from '../components/StackV2';

const meta: Meta<typeof StackV2> = {
  title: 'Octuple V2.5/StackV2',
  component: StackV2,
  parameters: {
    docs: {
      description: {
        component: `
A Stack is a container-type component that abstracts the implementation of a flexbox in order to define the layout of its children components.

## Properties

- **Direction**: Determines whether the stacking of children components is horizontal or vertical. By default the Stack component is horizontal, but can be turned vertical by updating the direction property when using the component.
- **Alignment**: How the children components are aligned inside the container. This is controlled via the Align property.
- **Spacing**: Refers to the space that exists between children components inside the Stack. This is controlled via the gap property.
- **Justification**: Sets the justification of the children components.
- **Wrapping**: How children components should wrap.

Stacks can be nested inside one another in order to be able to configure the layout of the application as desired.
        `,
      },
    },
  },
  argTypes: {
    direction: {
      options: ['vertical', 'horizontal'],
      control: { type: 'inline-radio' },
    },
    justify: {
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: { type: 'select' },
    },
    align: {
      options: [
        'stretch',
        'center',
        'flex-start',
        'flex-end',
        'baseline',
        'initial',
        'inherit',
      ],
      control: { type: 'select' },
    },
    wrap: {
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: { type: 'radio' },
    },
    flexGap: {
      options: ['xxxs', 'xxs', 'xs', 's', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StackV2>;

const stackChildren = (
  <>
    <div
      style={{
        height: '200px',
        width: '200px',
        backgroundColor: '#9B7CB6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      Box 1
    </div>
    <div
      style={{
        height: '200px',
        width: '200px',
        backgroundColor: '#9B7CB6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      Box 2
    </div>
    <div
      style={{
        height: '200px',
        width: '200px',
        backgroundColor: '#9B7CB6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      Box 3
    </div>
  </>
);

export const Horizontal: Story = {
  args: {
    fullWidth: false,
    direction: 'horizontal',
    flexGap: 'm',
    style: {
      backgroundColor: '#7FCDCD',
      padding: '16px',
    },
    children: stackChildren,
  },
};

export const Vertical: Story = {
  args: {
    fullWidth: false,
    direction: 'vertical',
    flexGap: 'l',
    style: {
      backgroundColor: '#7FCDCD',
      padding: '16px',
    },
    children: stackChildren,
  },
};

export const Responsive: Story = {
  args: {
    fullWidth: false,
    direction: 'vertical',
    flexGap: 'l',
    breakpoints: {
      xsmall: {
        flexGap: 'xxxs',
        direction: 'vertical',
      },
      small: {
        flexGap: 's',
        direction: 'vertical',
      },
      medium: {
        flexGap: 'xl',
        direction: 'horizontal',
      },
      large: {
        flexGap: 'xxxl',
        direction: 'horizontal',
      },
    },
    style: {
      backgroundColor: '#7FCDCD',
      padding: '16px',
    },
    children: stackChildren,
  },
};

const navListStyle: React.CSSProperties = {
  padding: '24px',
  border: '1px solid #E0E0E0',
  borderRadius: '8px',
};

const groupStyle: React.CSSProperties = {
  padding: '16px',
  backgroundColor: '#F5F5F5',
  borderRadius: '4px',
  minWidth: '150px',
};

export const Sample_Nav_List: Story = {
  render: () => (
    <StackV2
      direction="horizontal"
      wrap="wrap"
      flexGap="xl"
      breakpoints={{
        small: {
          direction: 'vertical',
        },
      }}
      style={navListStyle}
    >
      <StackV2 direction="vertical" flexGap="m" style={groupStyle}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Products</h3>
        <StackV2 direction="vertical" flexGap="xs">
          <p style={{ margin: 0, cursor: 'pointer' }}>AI Platform</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Talent Intelligence</p>
        </StackV2>
      </StackV2>
      <StackV2 direction="vertical" flexGap="m" style={groupStyle}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Solutions</h3>
        <StackV2 direction="vertical" flexGap="xs">
          <p style={{ margin: 0, cursor: 'pointer' }}>Recruiting</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Retention</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Development</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Management</p>
        </StackV2>
      </StackV2>
      <StackV2 direction="vertical" flexGap="m" style={groupStyle}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Resources</h3>
        <StackV2 direction="vertical" flexGap="xs">
          <p style={{ margin: 0, cursor: 'pointer' }}>Blog</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Documentation</p>
        </StackV2>
      </StackV2>
      <StackV2 direction="vertical" flexGap="m" style={groupStyle}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Company</h3>
        <StackV2 direction="vertical" flexGap="xs">
          <p style={{ margin: 0, cursor: 'pointer' }}>About</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Careers</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Contact</p>
        </StackV2>
      </StackV2>
      <StackV2 direction="vertical" flexGap="m" style={groupStyle}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Legal</h3>
        <StackV2 direction="vertical" flexGap="xs">
          <p style={{ margin: 0, cursor: 'pointer' }}>Privacy</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Terms</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Security</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Compliance</p>
        </StackV2>
      </StackV2>
      <StackV2 direction="vertical" flexGap="m" style={groupStyle}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Support</h3>
        <StackV2 direction="vertical" flexGap="xs">
          <p style={{ margin: 0, cursor: 'pointer' }}>Help Center</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>API Docs</p>
          <p style={{ margin: 0, cursor: 'pointer' }}>Status</p>
        </StackV2>
      </StackV2>
    </StackV2>
  ),
};

