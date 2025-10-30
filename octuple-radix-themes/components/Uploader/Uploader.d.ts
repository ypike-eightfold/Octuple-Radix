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
     * Visual variant of the uploader
     */
    variant?: 'default' | 'compact';
    /**
     * Callback when files are selected
     */
    onFilesSelected?: (files: File[]) => void;
    /**
     * Callback for upload progress
     */
    onUploadProgress?: (progress: number) => void;
}
export declare function Uploader({ accept, maxSize, // 10MB default
multiple, variant, onFilesSelected, onUploadProgress, }: UploaderProps): import("react/jsx-runtime").JSX.Element;
