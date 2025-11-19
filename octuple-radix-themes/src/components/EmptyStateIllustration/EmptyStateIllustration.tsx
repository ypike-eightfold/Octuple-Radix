import React from 'react';
import './EmptyStateIllustration.css';

/**
 * NOTE: To use actual Figma illustrations, export PNG files from Figma
 * and place them in the ./illustrations/ directory. See README.md for instructions.
 * 
 * For now, this component uses a placeholder to avoid import errors.
 */

export type EmptyStateIllustrationType =
  | 'empty-data'
  | 'technical-error'
  | 'empty-conversation'
  | 'empty-search'
  | 'tasks-complete'
  | 'empty-successor'
  | 'unclaimed-profile'
  | 'empty-documents'
  | 'alert';

export interface EmptyStateIllustrationProps {
  /** Type of empty state illustration */
  type?: EmptyStateIllustrationType;
  /** Width of the illustration */
  width?: number;
  /** Height of the illustration */
  height?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * EmptyStateIllustration component
 * 
 * Displays various empty state illustrations for different use cases.
 * Based on Figma design specifications.
 */
export const EmptyStateIllustration: React.FC<EmptyStateIllustrationProps> = ({
  type = 'empty-data',
  width = 200,
  height = 184,
  className = '',
}) => {
  // For now, show a placeholder message since PNG files need to be exported from Figma
  return (
    <div className={`empty-state-illustration ${className}`} style={{ 
      width, 
      height,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f9ff',
      border: '2px dashed #8ED0FA',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center'
    }}>
      <div style={{
        fontSize: '48px',
        marginBottom: '12px'
      }}>
        🎨
      </div>
      <div style={{
        fontSize: '14px',
        fontWeight: 600,
        color: '#1a212e',
        marginBottom: '8px'
      }}>
        {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </div>
      <div style={{
        fontSize: '12px',
        color: '#69717f',
        maxWidth: '180px'
      }}>
        Export PNG from Figma and place in <code>illustrations/</code> folder
      </div>
    </div>
  );
};

EmptyStateIllustration.displayName = 'EmptyStateIllustration';

