import React from 'react';

interface ComponentCardProps {
  path: string;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  path,
  badge,
  badgeClass,
  title,
  description,
}) => {
  const handleClick = () => {
    if (window.parent) {
      // Get the parent window's origin and construct the full URL
      const parentOrigin = window.parent.location.origin;
      const fullPath = `${parentOrigin}/${path}`;
      window.parent.location.href = fullPath;
    }
  };

  return (
    <div
      className="component-card"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <span className={`category-badge ${badgeClass}`}>{badge}</span>
      <div style={{ fontSize: '16px', fontWeight: 600, color: '#1f2937', margin: '8px 0' }}>{title}</div>
      <div style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>{description}</div>
    </div>
  );
};

