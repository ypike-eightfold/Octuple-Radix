import type { Meta, StoryObj } from '@storybook/react';
import { SkillTagV2 } from '../components/SkillTagV2/SkillTagV2';

const meta = {
  title: 'Octuple V2.5/Skill Tag',
  component: SkillTagV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SkillTagV2>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Visual design',
    size: 'small',
    type: 'default',
  },
};

// All sizes - Default type
export const DefaultAllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Small</p>
        <SkillTagV2 size="small" type="default">Visual design</SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Medium</p>
        <SkillTagV2 size="medium" type="default">Visual design</SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Large</p>
        <SkillTagV2 size="large" type="default">Visual design</SkillTagV2>
      </div>
    </div>
  ),
};

// Matched type - All sizes
export const MatchedAllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Small</p>
        <SkillTagV2 size="small" type="matched">Visual design</SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Medium</p>
        <SkillTagV2 size="medium" type="matched">Visual design</SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Large</p>
        <SkillTagV2 size="large" type="matched">Visual design</SkillTagV2>
      </div>
    </div>
  ),
};

// Highlighted type - All sizes
export const HighlightedAllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Small</p>
        <SkillTagV2 size="small" type="highlighted">Visual design</SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Medium</p>
        <SkillTagV2 size="medium" type="highlighted">Visual design</SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Large</p>
        <SkillTagV2 size="large" type="highlighted">Visual design</SkillTagV2>
      </div>
    </div>
  ),
};

// Assessment type - All statuses (Small)
export const AssessmentSmall: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Below</p>
        <SkillTagV2 size="small" type="assessment" assessmentStatus="below">
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Meet</p>
        <SkillTagV2 size="small" type="assessment" assessmentStatus="meet">
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Exceed</p>
        <SkillTagV2 size="small" type="assessment" assessmentStatus="exceed">
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Upskilling</p>
        <SkillTagV2 size="small" type="assessment" assessmentStatus="upskilling">
          Visual design
        </SkillTagV2>
      </div>
    </div>
  ),
};

// Assessment type - All statuses (Medium)
export const AssessmentMedium: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Below</p>
        <SkillTagV2 size="medium" type="assessment" assessmentStatus="below">
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Meet</p>
        <SkillTagV2 size="medium" type="assessment" assessmentStatus="meet">
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Exceed</p>
        <SkillTagV2 size="medium" type="assessment" assessmentStatus="exceed">
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Upskilling</p>
        <SkillTagV2 size="medium" type="assessment" assessmentStatus="upskilling">
          Visual design
        </SkillTagV2>
      </div>
    </div>
  ),
};

// Assessment type - All statuses (Large)
export const AssessmentLarge: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Below</p>
        <SkillTagV2 size="large" type="assessment" assessmentStatus="below">
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Meet</p>
        <SkillTagV2 size="large" type="assessment" assessmentStatus="meet">
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Exceed</p>
        <SkillTagV2 size="large" type="assessment" assessmentStatus="exceed">
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Upskilling</p>
        <SkillTagV2 size="large" type="assessment" assessmentStatus="upskilling">
          Visual design
        </SkillTagV2>
      </div>
    </div>
  ),
};

// All types comparison (Medium size)
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Default</p>
        <SkillTagV2 size="medium" type="default">Visual design</SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Matched</p>
        <SkillTagV2 size="medium" type="matched">Visual design</SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Highlighted</p>
        <SkillTagV2 size="medium" type="highlighted">Visual design</SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Assessment (Meet)</p>
        <SkillTagV2 size="medium" type="assessment" assessmentStatus="meet">
          Visual design
        </SkillTagV2>
      </div>
    </div>
  ),
};

// Clickable tags
export const Clickable: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Default (Clickable)</p>
        <SkillTagV2 size="medium" type="default" onClick={() => alert('Default clicked!')}>
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Matched (Clickable)</p>
        <SkillTagV2 size="medium" type="matched" onClick={() => alert('Matched clicked!')}>
          Visual design
        </SkillTagV2>
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#69717f' }}>Highlighted (Clickable)</p>
        <SkillTagV2 size="medium" type="highlighted" onClick={() => alert('Highlighted clicked!')}>
          Visual design
        </SkillTagV2>
      </div>
    </div>
  ),
};

// Skills list example
export const SkillsList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', maxWidth: '600px' }}>
      <SkillTagV2 size="small" type="matched">React</SkillTagV2>
      <SkillTagV2 size="small" type="matched">TypeScript</SkillTagV2>
      <SkillTagV2 size="small" type="highlighted">Visual design</SkillTagV2>
      <SkillTagV2 size="small" type="default">JavaScript</SkillTagV2>
      <SkillTagV2 size="small" type="default">CSS</SkillTagV2>
      <SkillTagV2 size="small" type="matched">HTML</SkillTagV2>
      <SkillTagV2 size="small" type="assessment" assessmentStatus="exceed">
        UX Design
      </SkillTagV2>
      <SkillTagV2 size="small" type="assessment" assessmentStatus="meet">
        Product Management
      </SkillTagV2>
      <SkillTagV2 size="small" type="assessment" assessmentStatus="below">
        Data Analysis
      </SkillTagV2>
      <SkillTagV2 size="small" type="default">Agile</SkillTagV2>
    </div>
  ),
};

// Job card example
export const JobCardExample: Story = {
  render: () => (
    <div
      style={{
        border: '1px solid #d9dce1',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '500px',
        backgroundColor: '#ffffff',
      }}
    >
      <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '600', color: '#1a212e' }}>
        Senior UX Designer
      </h3>
      <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#69717f' }}>
        Acme Corp · San Francisco, CA
      </p>
      
      <div style={{ marginBottom: '16px' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#4f5666' }}>
          Required Skills
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <SkillTagV2 size="small" type="matched">Visual design</SkillTagV2>
          <SkillTagV2 size="small" type="matched">Interaction design</SkillTagV2>
          <SkillTagV2 size="small" type="highlighted">Figma</SkillTagV2>
          <SkillTagV2 size="small" type="default">Prototyping</SkillTagV2>
          <SkillTagV2 size="small" type="default">User research</SkillTagV2>
        </div>
      </div>

      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#4f5666' }}>
          Skill Assessment
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <SkillTagV2 size="small" type="assessment" assessmentStatus="exceed">
            UX Design
          </SkillTagV2>
          <SkillTagV2 size="small" type="assessment" assessmentStatus="meet">
            Design Systems
          </SkillTagV2>
          <SkillTagV2 size="small" type="assessment" assessmentStatus="upskilling">
            Motion Design
          </SkillTagV2>
        </div>
      </div>
    </div>
  ),
};

// Interactive selection example
export const InteractiveSelection: Story = {
  render: () => {
    const [selectedSkills, setSelectedSkills] = React.useState<string[]>(['React', 'TypeScript']);

    const skills = [
      'React',
      'TypeScript',
      'JavaScript',
      'CSS',
      'HTML',
      'Node.js',
      'Python',
      'Java',
      'SQL',
      'Git',
    ];

    const toggleSkill = (skill: string) => {
      setSelectedSkills((prev) =>
        prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
      );
    };

    return (
      <div style={{ maxWidth: '600px' }}>
        <p style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '600', color: '#4f5666' }}>
          Select your skills (click to toggle):
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {skills.map((skill) => (
            <SkillTagV2
              key={skill}
              size="medium"
              type={selectedSkills.includes(skill) ? 'matched' : 'default'}
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </SkillTagV2>
          ))}
        </div>
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#69717f' }}>
          Selected: {selectedSkills.length > 0 ? selectedSkills.join(', ') : 'None'}
        </p>
      </div>
    );
  },
};

