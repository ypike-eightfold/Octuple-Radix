import React from 'react';
import { LiveTaskBarV2Props } from './LiveTaskBarV2.types';
import './LiveTaskBarV2.css';

/**
 * LiveTaskBarV2 - A horizontal status/activity bar with tasks and actions
 * 
 * Perfect for displaying live metrics, notifications, and quick actions.
 * Common in AI assistant interfaces and dashboards.
 */
export const LiveTaskBarV2 = React.forwardRef<HTMLDivElement, LiveTaskBarV2Props>(
  (
    {
      header,
      tasks = [],
      actions = [],
      classNames,
      style,
      role = 'toolbar',
      ...rest
    },
    ref
  ) => {
    const containerClasses = [
      'live-task-bar-v2',
      classNames,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={containerClasses}
        style={style}
        role={role}
        aria-label="Live task status"
        {...rest}
      >
        {/* Left Section: Header + Tasks */}
        <div className="live-task-bar-v2-left">
          {header && (
            <div className="live-task-bar-v2-header" aria-hidden={false}>
              {header}
            </div>
          )}
          {tasks.length > 0 && (
            <div
              className="live-task-bar-v2-tasks"
              role="group"
              aria-label="Task items"
            >
              {tasks.map((task, index) => (
                <div key={`task-${index}`} className="live-task-bar-v2-task-item">
                  {task}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Section: Actions */}
        {actions.length > 0 && (
          <div
            className="live-task-bar-v2-actions"
            role="group"
            aria-label="Action items"
          >
            {actions.map((action, index) => (
              <div key={`action-${index}`} className="live-task-bar-v2-action-item">
                {action}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

LiveTaskBarV2.displayName = 'LiveTaskBarV2';

