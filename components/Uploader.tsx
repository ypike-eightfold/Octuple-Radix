// Uploader Component Implementation
// This file provides the TypeScript interfaces and implementation guide for the Uploader component

/**
 * Represents a file in the uploader's file list
 */
interface FileItem {
  uid: string;
  name: string;
  size: number;
  type: string;
  status: 'pending' | 'uploading' | 'success' | 'error';
  percent: number;
  response?: any;
  error?: Error;
  originFileObj?: File;
  url?: string;
  preview?: string;
}

/**
 * Props interface for the Uploader component
 */
interface UploaderProps {
  /** The URL endpoint for the upload or a custom handler function */
  action?: string | ((file: File) => Promise<any>);
  /** Allows the user to select and upload multiple files at once */
  multiple?: boolean;
  /** A comma-separated string of accepted file types */
  accept?: string;
  /** A controlled list of file objects to be displayed */
  fileList?: FileItem[];
  /** A callback function that fires when the upload state changes */
  onChange?: (info: { file: FileItem; fileList: FileItem[] }) => void;
  /** A hook to process or validate a file before the upload begins */
  beforeUpload?: (file: File, fileList: File[]) => boolean | Promise<boolean>;
  /** The visual style of the file list */
  listType?: 'text' | 'picture' | 'picture-card' | 'picture-circle';
  /** The content that acts as the upload trigger */
  children?: any;
  /** The maximum number of files that can be uploaded */
  maxCount?: number;
  /** Whether to show the file list */
  showUploadList?: boolean;
  /** Whether to enable drag and drop */
  dragAndDrop?: boolean;
  /** Custom validation function */
  customRequest?: (options: {
    file: File;
    filename: string;
    action?: string | ((file: File) => Promise<any>);
    onProgress: (percent: number) => void;
  }) => Promise<any>;
  /** Disabled state */
  disabled?: boolean;
  /** Progress indicator configuration */
  progress?: {
    strokeColor?: string;
    strokeWidth?: number;
    format?: (percent: number) => string;
  };
  /** Upload list item render function */
  itemRender?: (originNode: any, file: FileItem, fileList: FileItem[]) => any;
  /** Preview file function */
  onPreview?: (file: FileItem) => void;
  /** Remove file function */
  onRemove?: (file: FileItem) => boolean | Promise<boolean>;
  /** Download file function */
  onDownload?: (file: FileItem) => void;
  /** Accessible label for the upload trigger */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Uploader Component Implementation Guide
 * 
 * This component provides a comprehensive file upload interface with:
 * - Click-to-upload functionality using the Figma-designed button
 * - Drag and drop support
 * - File list display with progress indicators
 * - Multiple upload styles (text, picture, picture-card, picture-circle)
 * - Comprehensive accessibility support
 * - Custom validation and upload handling
 * 
 * Key Features:
 * - Uses the exact button design from Figma with Material Design Icons
 * - Supports both controlled and uncontrolled usage patterns
 * - Provides comprehensive file status tracking
 * - Includes ARIA live regions for screen reader announcements
 * - Supports custom upload request handlers
 * - Includes progress bars and error handling
 * 
 * Styling:
 * - Uses Tailwind CSS classes matching the Figma design
 * - Button background: #b0f3fe (light blue)
 * - Text color: #054d7b (dark blue)
 * - Hover states: #9ee8f7 and #8cddf5
 * - Border radius: rounded-3xl (24px)
 * - Padding: 8px
 * - Icon: Material Design Icons font, 20px
 * - Text: Gilroy SemiBold, 16px, 20px line height
 * 
 * Accessibility Features:
 * - Keyboard navigation support (Enter and Space keys)
 * - ARIA labels and roles
 * - Screen reader announcements for status changes
 * - Focus management
 * - Clear error messaging
 * 
 * Usage Examples:
 * 
 * Basic Usage:
 * <Uploader
 *   action="/api/upload"
 *   accept="image/*,.pdf"
 *   multiple
 *   dragAndDrop
 * />
 * 
 * Controlled Usage:
 * <Uploader
 *   action="/api/upload"
 *   fileList={fileList}
 *   onChange={handleChange}
 *   beforeUpload={validateFile}
 *   maxCount={5}
 * />
 * 
 * Custom Button:
 * <Uploader action="/api/upload" dragAndDrop={false}>
 *   <button>Custom Upload Button</button>
 * </Uploader>
 * 
 * Picture Upload:
 * <Uploader
 *   action="/api/upload"
 *   listType="picture"
 *   accept="image/*"
 *   onPreview={handlePreview}
 *   onDownload={handleDownload}
 * />
 */

// Export the interfaces for use in other components
export type { FileItem, UploaderProps };

// Default export placeholder for documentation
export default UploaderProps; 