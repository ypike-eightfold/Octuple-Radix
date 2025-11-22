import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MatchScoreV2 } from '../components/MatchScoreV2';

const meta: Meta<typeof MatchScoreV2> = {
  title: 'Octuple V2.5/MatchScoreV2',
  component: MatchScoreV2,
  parameters: {
    docs: {
      description: {
        component: `
Match Score represents ratings via some ratio, helping others make more informed decisions.

## Best Practices

### Layout
- Make it clear which item the Match Score pertains to by making sure the layout and grouping are clear when several items are on the page.
- Don't use the Match Score component for data that has a continuous range. Instead, use a slider.

### Content
- Use a 0-5 scoring system. Exceeding 5 is acceptable, but ideally paired with the label.

## Features
- Displays ratings using circular indicators (full, half, empty)
- Supports decimal scores (e.g., 3.5 shows 3 full + 1 half circle)
- 12 color themes available
- Optional label and numeric value display

## Usage
\`\`\`tsx
<MatchScoreV2 score={3.5} total={5} label="Match" />
<MatchScoreV2 score={4} total={5} theme="green" hideLabel />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    theme: {
      options: [
        'red',
        'redOrange',
        'orange',
        'yellow',
        'yellowGreen',
        'green',
        'blueGreen',
        'blue',
        'blueViolet',
        'violet',
        'violetRed',
        'grey',
      ],
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MatchScoreV2>;

const matchScoreArgs = {
  classNames: 'my-match-score-class',
  score: 3,
  total: 5,
  hideLabel: false,
  hideValues: false,
  ariaLabel: 'score',
};

export const Default: Story = {
  args: {
    ...matchScoreArgs,
  },
};

export const Custom_Label: Story = {
  args: {
    ...matchScoreArgs,
    label: 'Score',
  },
};

export const Without_Label: Story = {
  args: {
    ...matchScoreArgs,
    hideLabel: true,
  },
};

export const With_Label_No_Values: Story = {
  args: {
    ...matchScoreArgs,
    label: 'Rating',
    hideValues: true,
  },
};

export const Different_Scores: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <MatchScoreV2 score={0} total={5} label="Zero" />
      <MatchScoreV2 score={1} total={5} label="One" />
      <MatchScoreV2 score={2.5} total={5} label="Two and a half" />
      <MatchScoreV2 score={3} total={5} label="Three" />
      <MatchScoreV2 score={4.5} total={5} label="Four and a half" />
      <MatchScoreV2 score={5} total={5} label="Perfect" />
    </div>
  ),
};

export const Different_Totals: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <MatchScoreV2 score={2} total={3} label="Out of 3" />
      <MatchScoreV2 score={4} total={5} label="Out of 5" />
      <MatchScoreV2 score={7} total={10} label="Out of 10" />
    </div>
  ),
};

export const All_Themes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <MatchScoreV2 score={4} total={5} theme="red" label="Red" />
      <MatchScoreV2 score={4} total={5} theme="redOrange" label="Red Orange" />
      <MatchScoreV2 score={4} total={5} theme="orange" label="Orange" />
      <MatchScoreV2 score={4} total={5} theme="yellow" label="Yellow" />
      <MatchScoreV2 score={4} total={5} theme="yellowGreen" label="Yellow Green" />
      <MatchScoreV2 score={4} total={5} theme="green" label="Green" />
      <MatchScoreV2 score={4} total={5} theme="blueGreen" label="Blue Green" />
      <MatchScoreV2 score={4} total={5} theme="blue" label="Blue (default)" />
      <MatchScoreV2 score={4} total={5} theme="blueViolet" label="Blue Violet" />
      <MatchScoreV2 score={4} total={5} theme="violet" label="Violet" />
      <MatchScoreV2 score={4} total={5} theme="violetRed" label="Violet Red" />
      <MatchScoreV2 score={4} total={5} theme="grey" label="Grey" />
    </div>
  ),
};

export const In_Card: Story = {
  render: () => (
    <div
      style={{
        border: '1px solid #e6e6e6',
        borderRadius: '8px',
        padding: '24px',
        maxWidth: '400px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>
        John Doe
      </h3>
      <p style={{ margin: '0 0 16px 0', color: '#737373', fontSize: '14px' }}>
        Senior Software Engineer
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <MatchScoreV2 score={4.5} total={5} label="Technical Skills" theme="blue" />
        <MatchScoreV2 score={4} total={5} label="Communication" theme="green" />
        <MatchScoreV2 score={3.5} total={5} label="Leadership" theme="orange" />
        <MatchScoreV2 score={5} total={5} label="Problem Solving" theme="blueViolet" />
      </div>
    </div>
  ),
};

