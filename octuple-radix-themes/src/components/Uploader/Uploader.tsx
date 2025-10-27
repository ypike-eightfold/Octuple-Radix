import React, { useState, useCallback } from 'react';
import { Card, Flex, Text, Button, Progress } from '@radix-ui/themes';
import { Icon } from '../Icon';

export interface UploaderProps {
  /**
   * Accept file types (e.g., "image/*", ".pdf,.doc")
   */
  accept?: string;
  /**
   * Maximum file size in bytes
   */
  maxSize?: number;
  /**
   * Allow multiple files
   */
  multiple?: boolean;
  /**
   * Callback when files are selected
   */
  onFilesSelected?: (files: File[]) => void;
  /**
   * Callback for upload progress
   */
  onUploadProgress?: (progress: number) => void;
}

interface FileWithProgress {
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'complete' | 'error';
}

export function Uploader({
  accept,
  maxSize = 10 * 1024 * 1024, // 10MB default
  multiple = true,
  onFilesSelected,
  onUploadProgress,
}: UploaderProps) {
  const [files, setFiles] = useState<FileWithProgress[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((fileList: FileList | null) => {
    if (!fileList) return;

    const newFiles = Array.from(fileList).map(file => ({
      file,
      progress: 0,
      status: 'pending' as const,
    }));

    setFiles(prev => [...prev, ...newFiles]);
    
    if (onFilesSelected) {
      onFilesSelected(Array.from(fileList));
    }

    // Simulate upload progress
    newFiles.forEach((fileWithProgress, index) => {
      simulateUpload(files.length + index);
    });
  }, [files.length, onFilesSelected]);

  const simulateUpload = (index: number) => {
    const interval = setInterval(() => {
      setFiles(prev => {
        const updated = [...prev];
        if (updated[index]) {
          updated[index].status = 'uploading';
          updated[index].progress += 10;
          
          if (updated[index].progress >= 100) {
            updated[index].progress = 100;
            updated[index].status = 'complete';
            clearInterval(interval);
          }
          
          if (onUploadProgress) {
            onUploadProgress(updated[index].progress);
          }
        }
        return updated;
      });
    }, 200);
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }, [handleFiles]);

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <Flex direction="column" gap="4" style={{ width: '100%', maxWidth: '600px' }}>
      <Card
        style={{
          padding: '32px',
          border: isDragging ? '2px dashed var(--accent-9)' : '2px dashed var(--gray-6)',
          background: isDragging ? 'var(--accent-2)' : 'var(--gray-2)',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <Flex direction="column" align="center" gap="3">
          <Icon 
            name="cloud_upload" 
            size={48} 
            color={isDragging ? 'var(--accent-9)' : 'var(--gray-9)'} 
          />
          <Text size="4" weight="medium" align="center">
            {isDragging ? 'Drop files here' : 'Drag & drop files here'}
          </Text>
          <Text size="2" color="gray" align="center">
            or click to browse
          </Text>
          <Text size="1" color="gray" align="center">
            Max file size: {formatFileSize(maxSize)}
          </Text>
        </Flex>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          style={{ display: 'none' }}
        />
      </Card>

      {files.length > 0 && (
        <Flex direction="column" gap="2">
          <Text size="2" weight="bold">
            Uploaded Files ({files.length})
          </Text>
          {files.map((fileWithProgress, index) => (
            <Card key={index}>
              <Flex direction="column" gap="2">
                <Flex justify="between" align="center">
                  <Flex gap="2" align="center" style={{ flex: 1 }}>
                    <Icon 
                      name={
                        fileWithProgress.status === 'complete' ? 'check_circle' :
                        fileWithProgress.status === 'error' ? 'error' :
                        'description'
                      } 
                      size={20}
                      color={
                        fileWithProgress.status === 'complete' ? 'var(--green-9)' :
                        fileWithProgress.status === 'error' ? 'var(--red-9)' :
                        'var(--gray-9)'
                      }
                    />
                    <Flex direction="column" style={{ flex: 1, minWidth: 0 }}>
                      <Text size="2" weight="medium" style={{ 
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {fileWithProgress.file.name}
                      </Text>
                      <Text size="1" color="gray">
                        {formatFileSize(fileWithProgress.file.size)}
                      </Text>
                    </Flex>
                  </Flex>
                  <Button
                    variant="ghost"
                    size="1"
                    color="red"
                    onClick={() => removeFile(index)}
                  >
                    <Icon name="close" size={16} />
                  </Button>
                </Flex>
                {fileWithProgress.status !== 'complete' && fileWithProgress.status !== 'error' && (
                  <Progress value={fileWithProgress.progress} size="1" />
                )}
              </Flex>
            </Card>
          ))}
        </Flex>
      )}
    </Flex>
  );
}

