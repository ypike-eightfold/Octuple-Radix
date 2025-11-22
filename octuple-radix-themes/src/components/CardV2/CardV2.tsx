import React from 'react';
import { CardV2Props, CardSize, CardType } from './CardV2.types';
import { AvatarV2 } from '../AvatarV2';
import { PillV2 } from '../PillV2';
import { ButtonV2 } from '../ButtonV2';
import { IconV2 } from '../IconV2';
import './CardV2.css';

export const CardV2 = React.forwardRef<HTMLDivElement, CardV2Props>(
  (
    {
      allowDisabledFocus = false,
      avatar,
      body,
      bodyClassNames,
      bodyListOnePillProps,
      bodyListTwoPillProps,
      bodyListOneProps,
      bodyListTwoProps,
      bordered = false,
      children,
      classNames,
      disabled = false,
      dropShadow = false,
      footer,
      footerButtonProps,
      footerClassNames,
      footerIcon,
      footerProps,
      header,
      headerButtonProps,
      headerClassNames,
      headerIcon,
      headerTitle,
      height,
      icon,
      insetFocusVisible = false,
      isSelected = false,
      name,
      size = CardSize.Medium,
      style,
      subHeaderProps,
      subHeaderSeparatorIcon,
      tag,
      type = CardType.list,
      width,
      ...rest
    },
    ref
  ) => {
    const cardClasses: string[] = ['card-v2'];
    cardClasses.push(`card-v2-${size}`);
    cardClasses.push(`card-v2-${type}`);
    
    if (bordered) cardClasses.push('card-v2-bordered');
    if (dropShadow) cardClasses.push('card-v2-drop-shadow');
    if (disabled) cardClasses.push('card-v2-disabled');
    if (isSelected) cardClasses.push('card-v2-selected');
    if (insetFocusVisible) cardClasses.push('card-v2-inset-focus');
    if (classNames) cardClasses.push(classNames);

    const cardStyles: React.CSSProperties = {
      ...style,
      ...(width && { width }),
      ...(height && { height }),
    };

    // Render Header
    const renderHeader = () => {
      if (!header && !headerTitle && !headerIcon && !headerButtonProps) {
        return null;
      }

      return (
        <div className={`card-v2-header ${headerClassNames || ''}`}>
          {header || (
            <>
              {headerIcon && (
                <IconV2
                  name={headerIcon}
                  type="material"
                  size={24}
                  className="card-v2-header-icon"
                />
              )}
              {headerTitle && (
                <h3 className="card-v2-header-title">{headerTitle}</h3>
              )}
              {headerButtonProps && (
                <ButtonV2 {...headerButtonProps} className="card-v2-header-button" />
              )}
            </>
          )}
        </div>
      );
    };

    // Render Body
    const renderBody = () => {
      // If custom body or children provided, use that
      if (body || children) {
        return (
          <div className={`card-v2-body ${bodyClassNames || ''}`}>
            {body || children}
          </div>
        );
      }

      // Otherwise, render structured content
      const hasStructuredContent =
        avatar || name || bodyListOneProps || bodyListTwoProps || tag || icon;

      if (!hasStructuredContent) {
        return null;
      }

      return (
        <div className={`card-v2-body ${bodyClassNames || ''}`}>
          {avatar && <AvatarV2 {...avatar} />}
          
          {icon && (
            <IconV2
              name={icon}
              type="material"
              size={48}
              className="card-v2-body-icon"
            />
          )}

          {name && <div className="card-v2-name">{name}</div>}

          {subHeaderProps && subHeaderProps.length > 0 && (
            <div className="card-v2-subheaders">
              {subHeaderProps.map((subHeader, index) => (
                <React.Fragment key={index}>
                  <span className="card-v2-subheader">{subHeader}</span>
                  {index < subHeaderProps.length - 1 && (
                    <IconV2
                      name={subHeaderSeparatorIcon || 'fiber_manual_record'}
                      type="material"
                      size={8}
                      className="card-v2-subheader-separator"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {bodyListOneProps && (
            <div className="card-v2-body-list">
              {bodyListOneProps.type && (
                <div className="card-v2-body-list-type">{bodyListOneProps.type}</div>
              )}
              {bodyListOneProps.iconProps && (
                <IconV2
                  {...bodyListOneProps.iconProps}
                  name={bodyListOneProps.iconProps.name!}
                  className="card-v2-body-list-icon"
                />
              )}
              {bodyListOneProps.contents && (
                <ul className="card-v2-body-list-contents">
                  {bodyListOneProps.contents.map((item, index) => (
                    <li key={index} className="card-v2-body-list-item">
                      {item.showIcon && (
                        <IconV2
                          name="check_circle"
                          type="material"
                          size={16}
                          className="card-v2-body-list-item-icon"
                        />
                      )}
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              )}
              {bodyListOnePillProps && (
                <PillV2 {...bodyListOnePillProps} />
              )}
            </div>
          )}

          {bodyListTwoProps && (
            <div className="card-v2-body-list">
              {bodyListTwoProps.type && (
                <div className="card-v2-body-list-type">{bodyListTwoProps.type}</div>
              )}
              {bodyListTwoProps.iconProps && (
                <IconV2
                  {...bodyListTwoProps.iconProps}
                  name={bodyListTwoProps.iconProps.name!}
                  className="card-v2-body-list-icon"
                />
              )}
              {bodyListTwoProps.contents && (
                <ul className="card-v2-body-list-contents">
                  {bodyListTwoProps.contents.map((item, index) => (
                    <li key={index} className="card-v2-body-list-item">
                      {item.showIcon && (
                        <IconV2
                          name="check_circle"
                          type="material"
                          size={16}
                          className="card-v2-body-list-item-icon"
                        />
                      )}
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              )}
              {bodyListTwoPillProps && (
                <PillV2 {...bodyListTwoPillProps} />
              )}
            </div>
          )}

          {tag && (
            <div className="card-v2-tag">
              <PillV2 {...tag} />
            </div>
          )}
        </div>
      );
    };

    // Render Footer
    const renderFooter = () => {
      if (!footer && !footerIcon && !footerProps && !footerButtonProps) {
        return null;
      }

      return (
        <div className={`card-v2-footer ${footerClassNames || ''}`}>
          {footer || (
            <>
              {footerIcon && (
                <IconV2
                  name={footerIcon}
                  type="material"
                  size={20}
                  className="card-v2-footer-icon"
                />
              )}
              {footerProps && footerProps.length > 0 && (
                <div className="card-v2-footer-props">
                  {footerProps[0] && (
                    <IconV2
                      {...footerProps[0]}
                      name={footerProps[0].name!}
                      size={20}
                      className="card-v2-footer-props-icon"
                    />
                  )}
                  {footerProps[1] && (
                    <span className="card-v2-footer-props-text">{footerProps[1]}</span>
                  )}
                </div>
              )}
              {footerButtonProps && (
                <ButtonV2 {...footerButtonProps} className="card-v2-footer-button" />
              )}
            </>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cardClasses.join(' ')}
        style={cardStyles}
        aria-disabled={disabled}
        {...rest}
      >
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
      </div>
    );
  }
);

CardV2.displayName = 'CardV2';
