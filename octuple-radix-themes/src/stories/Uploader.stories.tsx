import type { Meta, StoryObj } from '@storybook/react';
import { Uploader } from '../components/Uploader';

const meta = {
  title: 'Components/Uploader',
  component: Uploader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Uploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Uploader />
  ),
};

export const SingleFile: Story = {
  render: () => (
    <Uploader multiple={false} />
  ),
};

export const ImagesOnly: Story = {
  render: () => (
    <Uploader accept="image/*" />
  ),
};

export const DocumentsOnly: Story = {
  render: () => (
    <Uploader accept=".pdf,.doc,.docx,.txt" />
  ),
};

export const WithSmallMaxSize: Story = {
  render: () => (
    <Uploader maxSize={2 * 1024 * 1024} /> // 2MB limit
  ),
};

export const WithCallbacks: Story = {
  render: () => (
    <Uploader
      onFilesSelected={(files) => {
        console.log('Files selected:', files);
      }}
      onUploadProgress={(progress) => {
        console.log('Upload progress:', progress);
      }}
    />
  ),
};

export const Compact: Story = {
  render: () => (
    <Uploader variant="compact" />
  ),
};

export const CompactMultiple: Story = {
  render: () => (
    <Uploader 
      variant="compact" 
      multiple 
      accept=".doc,.docx,.pdf,.txt" 
    />
  ),
};

export const CompactSingleFile: Story = {
  render: () => (
    <Uploader 
      variant="compact" 
      multiple={false}
      accept="image/*"
    />
  ),
};

export const CompactWithSmallMaxSize: Story = {
  render: () => (
    <Uploader 
      variant="compact"
      maxSize={2 * 1024 * 1024} // 2MB limit
      multiple
    />
  ),
};

