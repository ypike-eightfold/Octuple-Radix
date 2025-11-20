import type { Meta, StoryObj } from '@storybook/react';
import { UploaderV2 } from '../components/UploaderV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Uploader',
  component: UploaderV2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UploaderV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  render: () => (
    <UploaderV2
      size="small"
      accept=".doc,.docx,.pdf,.txt"
      multiple={false}
    />
  ),
};

export const Medium: Story = {
  render: () => (
    <UploaderV2
      size="medium"
      accept=".doc,.docx,.pdf,.txt"
      multiple={false}
    />
  ),
};

export const Large: Story = {
  render: () => (
    <UploaderV2
      size="large"
      accept=".doc,.docx,.pdf,.txt"
      multiple={false}
    />
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Gilroy, Poppins', fontSize: '14px', color: '#69717f' }}>
          Small (88px)
        </h3>
        <UploaderV2
          size="small"
          accept=".doc,.docx,.pdf,.txt"
          multiple={false}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Gilroy, Poppins', fontSize: '14px', color: '#69717f' }}>
          Medium (120px)
        </h3>
        <UploaderV2
          size="medium"
          accept=".doc,.docx,.pdf,.txt"
          multiple={false}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Gilroy, Poppins', fontSize: '14px', color: '#69717f' }}>
          Large (160px)
        </h3>
        <UploaderV2
          size="large"
          accept=".doc,.docx,.pdf,.txt"
          multiple={false}
        />
      </div>
    </div>
  ),
};

export const MultipleFiles: Story = {
  render: () => (
    <UploaderV2
      size="small"
      accept=".doc,.docx,.pdf,.txt"
      multiple={true}
      onFilesSelected={(files) => {
        console.log('Files selected:', files);
      }}
    />
  ),
};

export const ImageUpload: Story = {
  render: () => (
    <UploaderV2
      size="medium"
      accept="image/*"
      multiple={true}
    />
  ),
};

export const WithMaxSize: Story = {
  render: () => (
    <UploaderV2
      size="small"
      accept=".pdf,.doc,.docx"
      maxSize={5 * 1024 * 1024} // 5MB
      multiple={false}
    />
  ),
};

export const CustomWidth: Story = {
  render: () => (
    <UploaderV2
      size="small"
      width="600px"
      accept=".doc,.docx,.pdf,.txt"
      multiple={false}
    />
  ),
};

export const NoLegalText: Story = {
  render: () => (
    <UploaderV2
      size="small"
      accept=".doc,.docx,.pdf,.txt"
      showLegalText={false}
      multiple={false}
    />
  ),
};

export const CustomLegalText: Story = {
  render: () => (
    <UploaderV2
      size="small"
      accept=".doc,.docx,.pdf,.txt"
      legalText={
        <span style={{ fontSize: '12px', color: '#69717f' }}>
          All uploaded files are secure and encrypted.
        </span>
      }
      multiple={false}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <UploaderV2
      size="small"
      accept=".doc,.docx,.pdf,.txt"
      disabled={true}
      multiple={false}
    />
  ),
};

export const WithUploadHandler: Story = {
  render: () => {
    const handleUpload = async (file: File) => {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Uploaded:', file.name);
    };

    return (
      <UploaderV2
        size="small"
        accept=".doc,.docx,.pdf,.txt"
        multiple={true}
        onUpload={handleUpload}
        onFilesSelected={(files) => {
          console.log('Files selected:', files.map(f => f.name));
        }}
        onRemove={(file) => {
          console.log('File removed:', file.name);
        }}
      />
    );
  },
};

export const DifferentFileTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Gilroy, Poppins', fontSize: '14px', color: '#69717f' }}>
          Documents Only
        </h3>
        <UploaderV2
          size="small"
          accept=".doc,.docx,.pdf,.txt"
          multiple={false}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Gilroy, Poppins', fontSize: '14px', color: '#69717f' }}>
          Images Only
        </h3>
        <UploaderV2
          size="small"
          accept="image/*"
          multiple={false}
        />
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Gilroy, Poppins', fontSize: '14px', color: '#69717f' }}>
          Any File Type
        </h3>
        <UploaderV2
          size="small"
          accept="*"
          multiple={false}
        />
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => {
    const [uploadedFiles, setUploadedFiles] = React.useState<string[]>([]);

    const handleUpload = async (file: File) => {
      // Simulate API upload
      await new Promise(resolve => setTimeout(resolve, 1500));
      setUploadedFiles(prev => [...prev, file.name]);
    };

    return (
      <div style={{ 
        padding: '32px', 
        background: '#f5f7fa', 
        borderRadius: '16px',
        maxWidth: '600px'
      }}>
        <h2 style={{ 
          fontFamily: 'Gilroy, Poppins', 
          fontSize: '20px', 
          fontWeight: 600,
          marginBottom: '8px',
          color: '#1a212e'
        }}>
          Resume Upload
        </h2>
        <p style={{ 
          fontFamily: 'Gilroy, Poppins', 
          fontSize: '14px', 
          color: '#69717f',
          marginBottom: '24px'
        }}>
          Upload your resume to apply for the position
        </p>
        
        <UploaderV2
          size="medium"
          accept=".pdf,.doc,.docx"
          maxSize={10 * 1024 * 1024} // 10MB
          multiple={false}
          onUpload={handleUpload}
          privacyPolicyUrl="https://example.com/privacy"
          termsOfServiceUrl="https://example.com/terms"
        />
        
        {uploadedFiles.length > 0 && (
          <div style={{ marginTop: '24px' }}>
            <h3 style={{ 
              fontFamily: 'Gilroy, Poppins', 
              fontSize: '14px', 
              fontWeight: 600,
              marginBottom: '8px',
              color: '#1a212e'
            }}>
              Successfully Uploaded:
            </h3>
            <ul style={{ 
              fontFamily: 'Gilroy, Poppins', 
              fontSize: '14px', 
              color: '#69717f',
              paddingLeft: '20px'
            }}>
              {uploadedFiles.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

