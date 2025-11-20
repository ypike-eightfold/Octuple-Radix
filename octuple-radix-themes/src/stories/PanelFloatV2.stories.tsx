import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PanelFloatV2 } from '../components/PanelFloatV2';
import { ButtonV2 } from '../components/ButtonV2';

const meta: Meta<typeof PanelFloatV2> = {
  title: 'Octuple V2.5/Panel/Float',
  component: PanelFloatV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Float Panel component - A floating modal panel built with Radix Dialog primitive. Available in three sizes (Small, Medium, Large) with flexible header and footer options.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PanelFloatV2>;

// Wrapper component to handle open state
const PanelWrapper = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonV2 variant="primary" onClick={() => setOpen(true)}>
        Open Panel
      </ButtonV2>
      <PanelFloatV2 {...args} open={open} onOpenChange={setOpen} />
    </>
  );
};

export const Small: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'small',
    title: 'Header text',
  },
};

export const Medium: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'medium',
    title: 'Header text',
  },
};

export const Large: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'large',
    title: 'Header text',
  },
};

export const WithIcon: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'medium',
    title: 'Header text',
    showIcon: true,
    iconName: 'description',
  },
};

export const WithSupportText: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'medium',
    title: 'Header text',
    supportText: 'Supporting text',
  },
};

export const WithNumberBadge: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'medium',
    title: 'Header text',
    showNumberBadge: true,
    badgeNumber: 8,
  },
};

export const WithExtraButtons: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'medium',
    title: 'Header text',
    showExtraButtons: true,
  },
};

export const WithHeaderDivider: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'medium',
    title: 'Header text',
    showHeaderDivider: true,
  },
};

export const WithFooterDivider: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'medium',
    title: 'Header text',
    showFooterDivider: true,
  },
};

export const WithCustomContent: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'medium',
    title: 'User Profile',
    supportText: 'Edit your profile information',
    showIcon: true,
    iconName: 'person',
    showHeaderDivider: true,
    showFooterDivider: true,
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontFamily: 'Gilroy, sans-serif' }}>
            Personal Information
          </h3>
          <p style={{ margin: 0, color: '#69717f' }}>
            Update your personal details here.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              padding: '12px',
              border: '1px solid #d9dce1',
              borderRadius: '8px',
            }}
          >
            <strong>Name:</strong> John Doe
          </div>
          <div
            style={{
              padding: '12px',
              border: '1px solid #d9dce1',
              borderRadius: '8px',
            }}
          >
            <strong>Email:</strong> john.doe@example.com
          </div>
          <div
            style={{
              padding: '12px',
              border: '1px solid #d9dce1',
              borderRadius: '8px',
            }}
          >
            <strong>Role:</strong> Software Engineer
          </div>
        </div>
      </div>
    ),
  },
};

export const FullFeatured: Story = {
  render: (args) => <PanelWrapper {...args} />,
  args: {
    size: 'large',
    title: 'Project Dashboard',
    supportText: 'Manage your project settings',
    showIcon: true,
    iconName: 'dashboard',
    showNumberBadge: true,
    badgeNumber: 12,
    showExtraButtons: true,
    showHeaderDivider: true,
    showFooterDivider: true,
    cancelLabel: 'Discard',
    doneLabel: 'Save Changes',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <section>
          <h3
            style={{
              margin: '0 0 12px 0',
              fontFamily: 'Gilroy, sans-serif',
              fontSize: '18px',
            }}
          >
            Project Details
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  padding: '16px',
                  background: '#f6f7f8',
                  borderRadius: '12px',
                }}
              >
                <strong>Section {i}</strong>
                <p style={{ margin: '8px 0 0 0', color: '#69717f' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3
            style={{
              margin: '0 0 12px 0',
              fontFamily: 'Gilroy, sans-serif',
              fontSize: '18px',
            }}
          >
            Additional Information
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  padding: '16px',
                  background: '#f6f7f8',
                  borderRadius: '12px',
                }}
              >
                <strong>Section {i}</strong>
                <p style={{ margin: '8px 0 0 0', color: '#69717f' }}>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  },
};

export const AllSizes: Story = {
  render: () => {
    const [openSmall, setOpenSmall] = useState(false);
    const [openMedium, setOpenMedium] = useState(false);
    const [openLarge, setOpenLarge] = useState(false);

    return (
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <ButtonV2 variant="primary" onClick={() => setOpenSmall(true)}>
          Open Small (480px)
        </ButtonV2>
        <ButtonV2 variant="primary" onClick={() => setOpenMedium(true)}>
          Open Medium (640px)
        </ButtonV2>
        <ButtonV2 variant="primary" onClick={() => setOpenLarge(true)}>
          Open Large (960px)
        </ButtonV2>

        <PanelFloatV2
          size="small"
          title="Small Panel"
          supportText="480px × 640px"
          open={openSmall}
          onOpenChange={setOpenSmall}
        />
        <PanelFloatV2
          size="medium"
          title="Medium Panel"
          supportText="640px × 640px"
          open={openMedium}
          onOpenChange={setOpenMedium}
        />
        <PanelFloatV2
          size="large"
          title="Large Panel"
          supportText="960px × 640px"
          open={openLarge}
          onOpenChange={setOpenLarge}
        />
      </div>
    );
  },
};

