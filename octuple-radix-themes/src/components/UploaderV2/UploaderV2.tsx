import React, { useState, useCallback, useRef } from 'react';
import { Icon } from '../Icon';
import './UploaderV2.css';

export type UploaderV2Size = 'small' | 'medium' | 'large';

export interface UploaderV2File {
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'success' | 'error';
  progress?: number;
  url?: string;
}

export interface UploaderV2Props {
  /** Size variant */
  size?: UploaderV2Size;
  
  /** Accepted file types (e.g., ".doc,.docx,.pdf,.txt") */
  accept?: string;
  
  /** Allow multiple file uploads */
  multiple?: boolean;
  
  /** Maximum file size in bytes */
  maxSize?: number;
  
  /** Custom width (inherits to file list) */
  width?: string | number;
  
  /** Callback when files are selected */
  onFilesSelected?: (files: File[]) => void;
  
  /** Callback for upload */
  onUpload?: (file: File) => Promise<void>;
  
  /** Callback when file is removed */
  onRemove?: (file: UploaderV2File) => void;
  
  /** Privacy policy link */
  privacyPolicyUrl?: string;
  
  /** Terms of service link */
  termsOfServiceUrl?: string;
  
  /** Show legal text */
  showLegalText?: boolean;
  
  /** Custom legal text */
  legalText?: React.ReactNode;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Additional CSS class */
  className?: string;
}

export const UploaderV2: React.FC<UploaderV2Props> = ({
  size = 'small',
  accept,
  multiple = false,
  maxSize,
  width,
  onFilesSelected,
  onUpload,
  onRemove,
  privacyPolicyUrl = '#',
  termsOfServiceUrl = '#',
  showLegalText = true,
  legalText,
  disabled = false,
  className = '',
}) => {
  const [files, setFiles] = useState<UploaderV2File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const generateFileId = (): string => {
    return `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };

  const handleFiles = useCallback(async (fileList: FileList | null) => {
    if (!fileList || disabled) return;

    const filesArray = Array.from(fileList);
    
    // Validate file size
    if (maxSize) {
      const invalidFiles = filesArray.filter(f => f.size > maxSize);
      if (invalidFiles.length > 0) {
        alert(`Some files exceed the maximum size of ${formatFileSize(maxSize)}`);
        return;
      }
    }

    const newFiles: UploaderV2File[] = filesArray.map(file => ({
      id: generateFileId(),
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploading',
      progress: 0,
    }));

    setFiles(prev => [...prev, ...newFiles]);

    if (onFilesSelected) {
      onFilesSelected(filesArray);
    }

    // Upload files
    if (onUpload) {
      for (let i = 0; i < filesArray.length; i++) {
        const file = filesArray[i];
        const fileId = newFiles[i].id;
        
        try {
          await onUpload(file);
          setFiles(prev => prev.map(f => 
            f.id === fileId ? { ...f, status: 'success', progress: 100 } : f
          ));
        } catch (error) {
          setFiles(prev => prev.map(f => 
            f.id === fileId ? { ...f, status: 'error' } : f
          ));
        }
      }
    } else {
      // Simulate upload if no onUpload provided
      newFiles.forEach(newFile => {
        simulateUpload(newFile.id);
      });
    }
  }, [disabled, maxSize, onFilesSelected, onUpload]);

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setFiles(prev => prev.map(f => 
        f.id === fileId ? { ...f, progress, status: progress === 100 ? 'success' : 'uploading' } : f
      ));
      
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 200);
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = dropZoneRef.current?.getBoundingClientRect();
    if (rect && (e.clientX < rect.left || e.clientX >= rect.right || e.clientY < rect.top || e.clientY >= rect.bottom)) {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (!disabled) {
      handleFiles(e.dataTransfer.files);
    }
  }, [disabled, handleFiles]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    // Reset input value to allow selecting the same file again
    e.target.value = '';
  }, [handleFiles]);

  const handleRemoveFile = (fileId: string) => {
    const fileToRemove = files.find(f => f.id === fileId);
    if (fileToRemove && onRemove) {
      onRemove(fileToRemove);
    }
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const sizeClass = `uploaderv2-dropzone--${size}`;
  const containerStyle = width ? { width: typeof width === 'number' ? `${width}px` : width } : {};

  return (
    <div className={`uploaderv2-container ${className}`} style={containerStyle}>
      {/* Drop Zone */}
      <div
        ref={dropZoneRef}
        className={`uploaderv2-dropzone ${sizeClass} ${isDragging ? 'uploaderv2-dropzone--dragging' : ''} ${disabled ? 'uploaderv2-dropzone--disabled' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="uploaderv2-dropzone__content">
          <Icon 
            name="upload_file" 
            size={48} 
            color={disabled ? '#bec2ca' : '#69717f'}
          />
          <div className="uploaderv2-dropzone__text">
            <div className="uploaderv2-dropzone__title">
              Drag and drop file
            </div>
            <div className="uploaderv2-dropzone__subtitle">
              {accept || '(.doc, .docx, .pdf, or .txt)'}
            </div>
          </div>
        </div>
        
        <button
          className="uploaderv2-button"
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current?.click();
          }}
          disabled={disabled}
          type="button"
        >
          <Icon name="file_upload" size={20} color="#054d7b" />
          <span>Select file</span>
        </button>
        
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          disabled={disabled}
          style={{ display: 'none' }}
          aria-label="File upload input"
        />
      </div>

      {/* Legal Text */}
      {showLegalText && (
        <div className="uploaderv2-legal">
          {legalText || (
            <>
              <span className="uploaderv2-legal__text">By uploading, you agree to the </span>
              <a 
                href={privacyPolicyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="uploaderv2-legal__link"
              >
                Privacy Policy
                <Icon name="open_in_new" size={16} />
              </a>
              <span className="uploaderv2-legal__text"> and </span>
              <a 
                href={termsOfServiceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="uploaderv2-legal__link"
              >
                Terms of Services
                <Icon name="open_in_new" size={16} />
              </a>
            </>
          )}
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="uploaderv2-filelist">
          {files.map((file) => (
            <div key={file.id} className={`uploaderv2-file uploaderv2-file--${file.status}`}>
              <div className="uploaderv2-file__info">
                <Icon 
                  name={
                    file.status === 'success' ? 'check_circle' :
                    file.status === 'error' ? 'error' :
                    'description'
                  }
                  size={20}
                  color={
                    file.status === 'success' ? '#2b715f' :
                    file.status === 'error' ? '#a63232' :
                    '#69717f'
                  }
                />
                <div className="uploaderv2-file__details">
                  <div className="uploaderv2-file__name">{file.name}</div>
                  <div className="uploaderv2-file__size">{formatFileSize(file.size)}</div>
                </div>
              </div>
              
              {file.status === 'uploading' && file.progress !== undefined && (
                <div className="uploaderv2-file__progress">
                  <div 
                    className="uploaderv2-file__progress-bar"
                    style={{ width: `${file.progress}%` }}
                  />
                </div>
              )}
              
              <button
                className="uploaderv2-file__remove"
                onClick={() => handleRemoveFile(file.id)}
                aria-label={`Remove ${file.name}`}
              >
                <Icon name="close" size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

UploaderV2.displayName = 'UploaderV2';

