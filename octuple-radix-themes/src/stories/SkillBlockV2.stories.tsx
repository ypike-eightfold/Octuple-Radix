import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SkillBlockV2 } from '../components/SkillBlockV2';
import { SliderV2 } from '../components/SliderV2';
import { StackV2 } from '../components/StackV2';

const meta: Meta<typeof SkillBlockV2> = {
  title: 'Octuple V2.5/SkillBlockV2',
  component: SkillBlockV2,
  parameters: {
    docs: {
      description: {
        component: `
Skill component is used only to represent skills across our products. It is a mix of UI treatment from card component and tag component. 
This is intentional since we want a unique visual treatment for skills and do not want to mix with other component usage.

This is a simplified version focusing on core features without complex animations and reflow logic.
        `,
      },
    },
  },
  argTypes: {
    onBlur: { action: 'blur' },
    onClick: { action: 'click' },
    onFocus: { action: 'focus' },
    onMouseEnter: { action: 'mouseenter' },
    onMouseLeave: { action: 'mouseleave' },
  },
};

export default meta;
type Story = StoryObj<typeof SkillBlockV2>;

export const Block: Story = {
  render: () => (
    <StackV2 direction="vertical" flexGap="l" fullWidth>
      <SkillBlockV2 label="Default" />
      <SkillBlockV2 label="Highlight" endorsement status="highlight" />
      <SkillBlockV2 label="Match" status="match" />
    </StackV2>
  ),
};

const SkillBlockWithContentComponent = ({ args }: any) => {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderLabel, setSliderLabel] = useState('Assess skill level');

  useEffect(() => {
    if (sliderValue >= 0.1 && sliderValue < 2) {
      setSliderLabel('Learner');
    } else if (sliderValue >= 2 && sliderValue < 3) {
      setSliderLabel('Practitioner');
    } else if (sliderValue >= 3 && sliderValue < 4) {
      setSliderLabel('Expert');
    } else if (sliderValue >= 4) {
      setSliderLabel('Master');
    } else {
      setSliderLabel('Assess skill level');
    }
  }, [sliderValue]);

  const content = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '14px',
          color: '#595959',
        }}
      >
        <span>{sliderLabel}</span>
        <span style={{ fontWeight: 600 }}>{sliderValue.toFixed(1)}</span>
      </div>
      <SliderV2
        value={[sliderValue]}
        onValueChange={(values) => setSliderValue(values[0])}
        min={0}
        max={5}
        step={0.1}
      />
    </div>
  );

  return (
    <StackV2 direction="vertical" flexGap="l" fullWidth>
      <SkillBlockV2 label="Python" content={content} {...args} />
      <SkillBlockV2
        label="JavaScript"
        status="highlight"
        endorsement
        content={content}
        {...args}
      />
      <SkillBlockV2 label="TypeScript" status="match" content={content} {...args} />
    </StackV2>
  );
};

export const Block_With_Content: Story = {
  render: () => <SkillBlockWithContentComponent args={{}} />,
};

export const Block_With_Icon: Story = {
  render: () => (
    <StackV2 direction="vertical" flexGap="l" fullWidth>
      <SkillBlockV2 label="Python" icon="code" content={<p>Programming language</p>} />
      <SkillBlockV2
        label="JavaScript"
        icon="javascript"
        status="highlight"
        endorsement
        content={<p>Web development language</p>}
      />
      <SkillBlockV2
        label="TypeScript"
        icon="description"
        status="match"
        content={<p>Typed superset of JavaScript</p>}
      />
    </StackV2>
  ),
};

export const Block_With_InlineSvg: Story = {
  render: () => (
    <StackV2 direction="vertical" flexGap="l" fullWidth>
      <SkillBlockV2
        label="React"
        assessment="exceed"
        content={<p>JavaScript library for building user interfaces</p>}
      />
      <SkillBlockV2
        label="Vue"
        assessment="meet"
        content={<p>Progressive JavaScript framework</p>}
      />
      <SkillBlockV2
        label="Angular"
        assessment="below"
        content={<p>Platform for building mobile and desktop web applications</p>}
      />
      <SkillBlockV2
        label="Svelte"
        assessment="upskilling"
        content={<p>Cybernetically enhanced web apps</p>}
      />
    </StackV2>
  ),
};

export const Block_With_Long_Text: Story = {
  render: () => (
    <StackV2 direction="vertical" flexGap="l" fullWidth>
      <SkillBlockV2
        label="Machine Learning and Artificial Intelligence with Deep Neural Networks and Advanced Statistical Models"
        content={
          <p>
            This is a very long description that demonstrates how the skill block handles
            text overflow and wrapping. The component should maintain its layout and
            readability even with extensive content that spans multiple lines.
          </p>
        }
      />
      <SkillBlockV2
        label="Cloud Computing Infrastructure Management"
        status="highlight"
        endorsement
        content={
          <p>
            Experience with AWS, Azure, GCP, and other cloud platforms. Proficient in
            container orchestration, serverless architectures, and infrastructure as code.
          </p>
        }
      />
    </StackV2>
  ),
};

export const Block_With_Extra_Content: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);

    const expandedContent = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
          <strong>Experience:</strong> 5+ years
        </p>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
          <strong>Last used:</strong> Currently using
        </p>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
          <strong>Projects:</strong> 12 completed projects
        </p>
      </div>
    );

    return (
      <StackV2 direction="vertical" flexGap="l" fullWidth>
        <SkillBlockV2
          label="Python"
          expandable
          expanded={expanded}
          onExpandChange={setExpanded}
          content={<p>Programming language for data science and web development</p>}
          expandedContent={expandedContent}
        />
        <SkillBlockV2
          label="JavaScript"
          status="highlight"
          endorsement
          expandable
          content={<p>Web development and full-stack programming</p>}
          expandedContent={expandedContent}
        />
      </StackV2>
    );
  },
};

export const Block_With_Extra_Content_And_Footer: Story = {
  render: () => {
    const menuItems = [
      {
        key: 'edit',
        label: 'Edit skill',
        icon: 'edit',
        onClick: () => console.log('Edit clicked'),
      },
      {
        key: 'remove',
        label: 'Remove skill',
        icon: 'delete',
        onClick: () => console.log('Remove clicked'),
      },
      {
        key: 'share',
        label: 'Share',
        icon: 'share',
        onClick: () => console.log('Share clicked'),
      },
    ];

    const expandedContent = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
          <strong>Proficiency Level:</strong> Advanced
        </p>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
          <strong>Endorsements:</strong> 15 colleagues have endorsed this skill
        </p>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
          <strong>Certificates:</strong> AWS Certified Solutions Architect
        </p>
      </div>
    );

    return (
      <StackV2 direction="vertical" flexGap="l" fullWidth>
        <SkillBlockV2
          label="Cloud Architecture"
          assessment="exceed-upskilling"
          expandable
          menuItems={menuItems}
          content={<p>Design and implement scalable cloud solutions</p>}
          expandedContent={expandedContent}
        />
        <SkillBlockV2
          label="DevOps"
          status="highlight"
          assessment="meet-upskilling"
          endorsement
          required
          expandable
          menuItems={menuItems}
          content={<p>CI/CD pipelines, infrastructure automation, and monitoring</p>}
          expandedContent={expandedContent}
        />
        <SkillBlockV2
          label="System Design"
          status="match"
          assessment="below-upskilling"
          expandable
          menuItems={menuItems}
          content={<p>Architecture patterns and distributed systems</p>}
          expandedContent={expandedContent}
        />
      </StackV2>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <StackV2 direction="vertical" flexGap="l" fullWidth>
      <SkillBlockV2 label="Small Skill" size="small" content={<p>Small size skill block</p>} />
      <SkillBlockV2
        label="Medium Skill"
        size="medium"
        content={<p>Medium size skill block (default)</p>}
      />
      <SkillBlockV2 label="Large Skill" size="large" content={<p>Large size skill block</p>} />
    </StackV2>
  ),
};

