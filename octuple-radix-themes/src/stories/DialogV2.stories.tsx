import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DialogV2 } from '../components/DialogV2/DialogV2';
import { ButtonV2 } from '../components/ButtonV2/ButtonV2';

const meta: Meta<typeof DialogV2> = {
  title: 'Octuple V2.5/Dialog',
  component: DialogV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A modal dialog component that displays content overlaying the page. Uses Radix UI Dialog primitive for accessibility and keyboard navigation.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DialogV2>;

/**
 * Small dialog with default (primary) button styling.
 */
export const SmallDefault: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)}>Open Dialog</ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="small"
          usage="default"
          title="Header 4 is used here"
          description="Body 2 which is at 16px font size is used here in the body section of the dialog. The dialog body text can wrap to multiple lines."
          cancelLabel="Label"
          confirmLabel="Label"
        />
      </>
    );
  },
};

/**
 * Medium dialog with default (primary) button styling.
 */
export const MediumDefault: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)}>Open Dialog</ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="medium"
          usage="default"
          title="Header 4 is used here"
          description="Body 2 which is at 16px font size is used here in the body section of the dialog. The dialog body text can wrap to multiple lines."
          cancelLabel="Label"
          confirmLabel="Label"
        />
      </>
    );
  },
};

/**
 * Small dialog with confirmation checkbox.
 */
export const SmallWithConfirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)}>Open Dialog</ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="small"
          usage="default"
          title="Header 4 is used here"
          description="Body 2 which is at 16px font size is used here in the body section of the dialog. The dialog body text can wrap to multiple lines."
          confirmationLabel="Double confirmation if needed"
          confirmationChecked={checked}
          onConfirmationChange={setChecked}
          cancelLabel="Label"
          confirmLabel="Label"
        />
      </>
    );
  },
};

/**
 * Medium dialog with confirmation checkbox.
 */
export const MediumWithConfirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)}>Open Dialog</ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="medium"
          usage="default"
          title="Header 4 is used here"
          description="Body 2 which is at 16px font size is used here in the body section of the dialog. The dialog body text can wrap to multiple lines."
          confirmationLabel="Double confirmation if needed"
          confirmationChecked={checked}
          onConfirmationChange={setChecked}
          cancelLabel="Label"
          confirmLabel="Label"
        />
      </>
    );
  },
};

/**
 * Small dialog with disruptive (red) button styling for destructive actions.
 */
export const SmallDisruptive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)} variant="disruptive-primary">
          Delete Item
        </ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="small"
          usage="disruptive"
          title="Header 4 is used here"
          description="Body 2 which is at 16px font size is used here in the body section of the dialog. The dialog body text can wrap to multiple lines."
          cancelLabel="Label"
          confirmLabel="Label"
        />
      </>
    );
  },
};

/**
 * Medium dialog with disruptive (red) button styling for destructive actions.
 */
export const MediumDisruptive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)} variant="disruptive-primary">
          Delete Item
        </ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="medium"
          usage="disruptive"
          title="Header 4 is used here"
          description="Body 2 which is at 16px font size is used here in the body section of the dialog. The dialog body text can wrap to multiple lines."
          cancelLabel="Label"
          confirmLabel="Label"
        />
      </>
    );
  },
};

/**
 * Small disruptive dialog with confirmation checkbox.
 */
export const SmallDisruptiveWithConfirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)} variant="disruptive-primary">
          Delete Item
        </ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="small"
          usage="disruptive"
          title="Header 4 is used here"
          description="Body 2 which is at 16px font size is used here in the body section of the dialog. The dialog body text can wrap to multiple lines."
          confirmationLabel="Double confirmation if needed"
          confirmationChecked={checked}
          onConfirmationChange={setChecked}
          cancelLabel="Label"
          confirmLabel="Label"
        />
      </>
    );
  },
};

/**
 * Medium disruptive dialog with confirmation checkbox.
 */
export const MediumDisruptiveWithConfirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)} variant="disruptive-primary">
          Delete Item
        </ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="medium"
          usage="disruptive"
          title="Header 4 is used here"
          description="Body 2 which is at 16px font size is used here in the body section of the dialog. The dialog body text can wrap to multiple lines."
          confirmationLabel="Double confirmation if needed"
          confirmationChecked={checked}
          onConfirmationChange={setChecked}
          cancelLabel="Label"
          confirmLabel="Label"
        />
      </>
    );
  },
};

/**
 * Real-world example: Confirmation dialog.
 */
export const ConfirmationDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)}>Save Changes</ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="small"
          usage="default"
          title="Save Changes"
          description="Are you sure you want to save these changes? This action cannot be undone."
          cancelLabel="Cancel"
          confirmLabel="Save"
          onConfirm={() => console.log('Saved!')}
        />
      </>
    );
  },
};

/**
 * Real-world example: Delete confirmation dialog.
 */
export const DeleteConfirmation: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)} variant="disruptive-primary">
          Delete Account
        </ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="medium"
          usage="disruptive"
          title="Delete Account"
          description="This action is permanent and cannot be undone. All your data will be permanently deleted from our servers."
          confirmationLabel="I understand that this action is permanent"
          confirmationChecked={checked}
          onConfirmationChange={setChecked}
          cancelLabel="Cancel"
          confirmLabel="Delete Account"
          onConfirm={() => console.log('Account deleted!')}
        />
      </>
    );
  },
};

/**
 * Real-world example: Form submission dialog.
 */
export const FormSubmission: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)}>Submit Form</ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="medium"
          usage="default"
          title="Submit Application"
          description="You are about to submit your application. Please review all information before submitting."
          confirmationLabel="I confirm that all information is accurate"
          confirmationChecked={checked}
          onConfirmationChange={setChecked}
          cancelLabel="Review"
          confirmLabel="Submit"
          onConfirm={() => console.log('Form submitted!')}
        />
      </>
    );
  },
};

/**
 * Dialog with rich content in description.
 */
export const RichContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <ButtonV2 onClick={() => setOpen(true)}>View Details</ButtonV2>
        <DialogV2
          open={open}
          onOpenChange={setOpen}
          size="medium"
          usage="default"
          title="Terms and Conditions"
          description={
            <div>
              <p style={{ marginBottom: '12px' }}>
                Please read and accept the following terms:
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
                <li>You must be 18 years or older</li>
                <li>You agree to our privacy policy</li>
                <li>You will not misuse the service</li>
              </ul>
              <p>
                By clicking "Accept", you agree to all terms and conditions.
              </p>
            </div>
          }
          cancelLabel="Decline"
          confirmLabel="Accept"
        />
      </>
    );
  },
};

