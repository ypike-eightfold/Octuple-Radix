import type { Meta, StoryObj } from '@storybook/react';
import { ChipV2 } from '../components/ChipV2/ChipV2';
import React, { useState } from 'react';

const meta: Meta<typeof ChipV2> = {
  title: 'Octuple V2.5/Chip',
  component: ChipV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChipV2>;

// Sample avatar image (base64 placeholder)
const sampleAvatarSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="rgba(0,0,0,0.5)" font-family="sans-serif" font-size="100" dy=".35em" x="50%25" y="50%25" text-anchor="middle"%3EJD%3C/text%3E%3C/svg%3E';

// Default Story - showing all 4 types at Large size
export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <ChipV2
        size="large"
        label="Jane Doe"
        subtitle="UX Designer  •  Eightfold"
        avatar={{ src: sampleAvatarSrc, fallback: 'JD' }}
        selectable
        removable
      />
      <ChipV2
        size="large"
        label="Engineering"
        subtitle="Eightfold"
        avatar={{ iconName: 'work', iconBgColor: '#1999ac' }}
        selectable
        removable
      />
      <ChipV2
        size="large"
        label="Santa Clara office"
        subtitle="Eightfold"
        avatar={{ iconName: 'location_on', iconBgColor: '#2c8cc9' }}
        selectable
        removable
      />
      <ChipV2
        size="large"
        label="UX Designer"
        subtitle="Design  •  Eightfold"
        avatar={{ iconName: 'design_services', iconBgColor: '#975590' }}
        selectable
        removable
      />
    </div>
  ),
};

// All Sizes - showing all 3 sizes with all 4 types
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#69717f', fontWeight: 600 }}>Large</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <ChipV2
            size="large"
            label="Jane Doe"
            subtitle="UX Designer  •  Eightfold"
            avatar={{ src: sampleAvatarSrc, fallback: 'JD' }}
            selectable
            removable
          />
          <ChipV2
            size="large"
            label="Engineering"
            subtitle="Eightfold"
            avatar={{ iconName: 'work', iconBgColor: '#1999ac' }}
            selectable
            removable
          />
          <ChipV2
            size="large"
            label="Santa Clara office"
            subtitle="Eightfold"
            avatar={{ iconName: 'location_on', iconBgColor: '#2c8cc9' }}
            selectable
            removable
          />
          <ChipV2
            size="large"
            label="UX Designer"
            subtitle="Design  •  Eightfold"
            avatar={{ iconName: 'design_services', iconBgColor: '#975590' }}
            selectable
            removable
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#69717f', fontWeight: 600 }}>Medium</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <ChipV2
            size="medium"
            label="Jane Doe"
            subtitle="UX Designer  •  Eightfold"
            avatar={{ src: sampleAvatarSrc, fallback: 'JD' }}
            selectable
            removable
          />
          <ChipV2
            size="medium"
            label="Engineering"
            subtitle="Eightfold"
            avatar={{ iconName: 'work', iconBgColor: '#993838' }}
            selectable
            removable
          />
          <ChipV2
            size="medium"
            label="Santa Clara office"
            subtitle="Eightfold"
            avatar={{ iconName: 'location_on', iconBgColor: '#993838' }}
            selectable
            removable
          />
          <ChipV2
            size="medium"
            label="UX Designer"
            subtitle="Design  •  Eightfold"
            avatar={{ iconName: 'design_services', iconBgColor: '#993838' }}
            selectable
            removable
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', color: '#69717f', fontWeight: 600 }}>Small</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <ChipV2
            size="small"
            label="Jane Doe"
            avatar={{ src: sampleAvatarSrc, fallback: 'JD' }}
            selectable
            removable
          />
          <ChipV2
            size="small"
            label="Engineering"
            avatar={{ iconName: 'work', iconBgColor: '#993838' }}
            selectable
            removable
          />
          <ChipV2
            size="small"
            label="Santa Clara office"
            avatar={{ iconName: 'location_on', iconBgColor: '#993838' }}
            selectable
            removable
          />
          <ChipV2
            size="small"
            label="UX Designer"
            avatar={{ iconName: 'design_services', iconBgColor: '#993838' }}
            selectable
            removable
          />
        </div>
      </div>
    </div>
  ),
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [chips, setChips] = useState([
      { id: 1, label: 'Jane Doe', subtitle: 'UX Designer  •  Eightfold', selected: false, avatar: { src: sampleAvatarSrc, fallback: 'JD' } },
      { id: 2, label: 'Engineering', subtitle: 'Eightfold', selected: false, avatar: { iconName: 'work', iconBgColor: '#1999ac' } },
      { id: 3, label: 'Santa Clara office', subtitle: 'Eightfold', selected: true, avatar: { iconName: 'location_on', iconBgColor: '#2c8cc9' } },
      { id: 4, label: 'UX Designer', subtitle: 'Design  •  Eightfold', selected: false, avatar: { iconName: 'design_services', iconBgColor: '#975590' } },
    ]);
    
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '800px' }}>
        {chips.map((chip) => (
          <ChipV2
            key={chip.id}
            size="large"
            label={chip.label}
            subtitle={chip.subtitle}
            avatar={chip.avatar}
            selectable
            selected={chip.selected}
            removable
            onSelectedChange={(selected) => {
              setChips((prev) =>
                prev.map((c) => (c.id === chip.id ? { ...c, selected } : c))
              );
            }}
            onRemove={() => {
              setChips((prev) => prev.filter((c) => c.id !== chip.id));
            }}
          />
        ))}
      </div>
    );
  },
};

