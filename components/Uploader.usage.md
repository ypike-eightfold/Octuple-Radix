# Uploader Component Usage Guide

## Basic Implementation

The Uploader component provides a comprehensive file upload interface based on the Figma design. Here's how to implement it:

### Basic Usage

```jsx
<Uploader
  action="/api/upload"
  accept="image/*,.pdf,.doc,.docx"
  multiple
  dragAndDrop
  ariaLabel="Upload documents or images"
/>
```

### Controlled Component

```jsx
const [fileList, setFileList] = useState([]);

const handleChange = (info) => {
  setFileList(info.fileList);
};

<Uploader
  action="/api/upload"
  fileList={fileList}
  onChange={handleChange}
  beforeUpload={(file) => {
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return false;
    }
    return true;
  }}
  maxCount={5}
  showUploadList={true}
/>
```

### Custom Upload Button

```jsx
<Uploader
  action="/api/upload"
  showUploadList={false}
  dragAndDrop={false}
>
  <button className="custom-upload-btn">
    📎 Attach Files
  </button>
</Uploader>
```

### Picture Upload with Preview

```jsx
const handlePreview = (file) => {
  window.open(file.url, '_blank');
};

const handleDownload = (file) => {
  const link = document.createElement('a');
  link.href = file.url;
  link.download = file.name;
  link.click();
};

<Uploader
  action="/api/upload"
  accept="image/*"
  listType="picture"
  onPreview={handlePreview}
  onDownload={handleDownload}
  multiple
  maxCount={10}
/>
```

### Custom Upload Handler

```jsx
const customUpload = async ({ file, onProgress }) => {
  const formData = new FormData();
  formData.append('file', file);
  
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.upload.addEventListener('progress', (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100);
        onProgress(percent);
      }
    });
    
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(`Upload failed with status ${xhr.status}`));
      }
    });
    
    xhr.addEventListener('error', () => {
      reject(new Error('Upload failed'));
    });
    
    xhr.open('POST', '/api/upload');
    xhr.send(formData);
  });
};

<Uploader
  customRequest={customUpload}
  multiple
  accept=".pdf,.doc,.docx"
  dragAndDrop
/>
```

### Function-based Action

```jsx
const uploadFunction = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('/api/custom-upload', {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': 'Bearer your-token-here'
    }
  });
  
  if (!response.ok) {
    throw new Error('Upload failed');
  }
  
  return response.json();
};

<Uploader
  action={uploadFunction}
  accept="*"
  multiple
  beforeUpload={(file) => {
    console.log('Uploading file:', file.name);
    return true;
  }}
  onChange={(info) => {
    console.log('Upload status changed:', info);
  }}
/>
```

## Key Features

### Design Elements (from Figma)
- **Button Background**: `#b0f3fe` (light blue)
- **Text Color**: `#054d7b` (dark blue)
- **Hover States**: `#9ee8f7` and `#8cddf5`
- **Border Radius**: `rounded-3xl` (24px)
- **Padding**: 8px
- **Icon**: Material Design Icons font, 20px
- **Text**: Gilroy SemiBold, 16px, 20px line height

### Accessibility Features
- Keyboard navigation (Enter and Space keys)
- ARIA labels and roles
- Screen reader announcements for status changes
- Focus management
- Clear error messaging

### File Status Tracking
- **pending**: File selected but not started
- **uploading**: File being uploaded with progress
- **success**: File uploaded successfully
- **error**: Upload failed with retry option

### Upload Modes
- **Click to Upload**: Default button interface
- **Drag and Drop**: Drop zone for file dragging
- **Custom Trigger**: Use custom button or element

### File List Display Options
- **text**: Simple text list
- **picture**: List with image thumbnails
- **picture-card**: Card-style display
- **picture-circle**: Circular image display

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `action` | `string \| function` | - | Upload endpoint URL or custom handler |
| `multiple` | `boolean` | `false` | Allow multiple file selection |
| `accept` | `string` | - | Accepted file types |
| `fileList` | `FileItem[]` | - | Controlled file list |
| `onChange` | `function` | - | Upload state change callback |
| `beforeUpload` | `function` | - | File validation before upload |
| `listType` | `string` | `'text'` | File list display style |
| `maxCount` | `number` | - | Maximum number of files |
| `showUploadList` | `boolean` | `true` | Show file list |
| `dragAndDrop` | `boolean` | `true` | Enable drag and drop |
| `disabled` | `boolean` | `false` | Disable component |
| `customRequest` | `function` | - | Custom upload request handler |
| `onPreview` | `function` | - | File preview callback |
| `onRemove` | `function` | - | File removal callback |
| `onDownload` | `function` | - | File download callback |
| `ariaLabel` | `string` | `'Upload files'` | Accessibility label |
| `className` | `string` | `''` | Additional CSS classes |

## Best Practices

1. **File Validation**: Always use `beforeUpload` for file size and type validation
2. **Progress Feedback**: Show upload progress for better user experience
3. **Error Handling**: Provide clear error messages and retry options
4. **Accessibility**: Include proper ARIA labels and keyboard navigation
5. **File Limits**: Set reasonable `maxCount` limits to prevent abuse
6. **Accept Types**: Clearly specify accepted file types
7. **Status Communication**: Use ARIA live regions for status updates 