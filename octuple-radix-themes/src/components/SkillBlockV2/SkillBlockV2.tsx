import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { SkillBlockV2Props } from './SkillBlockV2.types';
import { IconV2 } from '../IconV2';
import './SkillBlockV2.css';

export const SkillBlockV2 = React.forwardRef<HTMLDivElement, SkillBlockV2Props>(
  (
    {
      label,
      status = 'default',
      assessment,
      size = 'medium',
      endorsement = false,
      required = false,
      requiredMark = true,
      clickable = false,
      hoverable = false,
      disabled = false,
      bordered = true,
      expandable = false,
      expanded: controlledExpanded,
      content,
      expandedContent,
      icon,
      menuItems,
      classNames,
      width,
      minWidth = 'fit-content',
      maxWidth,
      style,
      onClick,
      onExpandChange,
      ...rest
    },
    ref
  ) => {
    const [internalExpanded, setInternalExpanded] = useState(false);
    
    // Use controlled or uncontrolled expansion
    const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
    
    const handleExpandToggle = () => {
      const newExpanded = !isExpanded;
      if (controlledExpanded === undefined) {
        setInternalExpanded(newExpanded);
      }
      onExpandChange?.(newExpanded);
    };
    
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && clickable) {
        onClick?.(e);
      }
    };
    
    const blockClassNames: string[] = ['skill-block-v2'];
    
    if (classNames) blockClassNames.push(classNames);
    if (status !== 'default') blockClassNames.push(`skill-block-v2-${status}`);
    if (assessment) blockClassNames.push(`skill-block-v2-assessment-${assessment}`);
    if (size) blockClassNames.push(`skill-block-v2-${size}`);
    if (endorsement) blockClassNames.push('skill-block-v2-endorsed');
    if (clickable && !disabled) blockClassNames.push('skill-block-v2-clickable');
    if (hoverable && !disabled) blockClassNames.push('skill-block-v2-hoverable');
    if (disabled) blockClassNames.push('skill-block-v2-disabled');
    if (!bordered) blockClassNames.push('skill-block-v2-borderless');
    if (isExpanded) blockClassNames.push('skill-block-v2-expanded');
    
    const blockStyle: React.CSSProperties = {
      width,
      minWidth,
      maxWidth,
      ...style,
    };
    
    return (
      <div
        ref={ref}
        className={blockClassNames.join(' ')}
        style={blockStyle}
        onClick={handleClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        aria-disabled={disabled}
        {...rest}
      >
        {/* Header Section */}
        <div className="skill-block-v2-header">
          <div className="skill-block-v2-label-section">
            {icon && (
              <IconV2
                name={icon}
                type="material"
                size="medium"
                className="skill-block-v2-icon"
              />
            )}
            <div className="skill-block-v2-label-wrapper">
              <span className="skill-block-v2-label">{label}</span>
              {required && requiredMark && (
                <span className="skill-block-v2-required-mark" aria-label="required">
                  *
                </span>
              )}
              {endorsement && (
                <span title="Endorsed">
                  <IconV2
                    name="verified"
                    type="material"
                    className="skill-block-v2-endorsement-icon"
                  />
                </span>
              )}
            </div>
          </div>
          
          <div className="skill-block-v2-actions">
            {expandable && expandedContent && (
              <button
                type="button"
                className="skill-block-v2-expand-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpandToggle();
                }}
                aria-expanded={isExpanded}
                aria-label={isExpanded ? 'Collapse' : 'Expand'}
                disabled={disabled}
              >
                <IconV2
                  name={isExpanded ? 'expand_less' : 'expand_more'}
                  type="material"
                  size="medium"
                />
              </button>
            )}
            
            {menuItems && menuItems.length > 0 && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button
                    type="button"
                    className="skill-block-v2-menu-button"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="More actions"
                    disabled={disabled}
                  >
                    <IconV2 name="more_vert" type="material" size="medium" />
                  </button>
                </DropdownMenu.Trigger>
                
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="skill-block-v2-menu-content"
                    align="end"
                    sideOffset={4}
                  >
                    {menuItems.map((item) => (
                      <DropdownMenu.Item
                        key={item.key}
                        className="skill-block-v2-menu-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          item.onClick?.();
                        }}
                        disabled={item.disabled}
                      >
                        {item.icon && (
                          <IconV2
                            name={item.icon}
                            type="material"
                            size="small"
                            className="skill-block-v2-menu-item-icon"
                          />
                        )}
                        {item.label}
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            )}
          </div>
        </div>
        
        {/* Content Section */}
        {content && (
          <div className="skill-block-v2-content">
            {content}
          </div>
        )}
        
        {/* Expanded Content Section */}
        {isExpanded && expandedContent && (
          <div className="skill-block-v2-expanded-content">
            {expandedContent}
          </div>
        )}
      </div>
    );
  }
);

SkillBlockV2.displayName = 'SkillBlockV2';

