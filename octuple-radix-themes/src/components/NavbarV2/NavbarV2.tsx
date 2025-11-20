import React from 'react';
import { Icon } from '../Icon';
import { NavigationMenuV2, NavigationMenuV2Item } from '../NavigationMenuV2';
import './NavbarV2.css';

export interface NavbarV2Tab {
  /** Tab label */
  label: string;
  /** Whether this tab is active */
  active?: boolean;
  /** Optional dropdown indicator */
  hasDropdown?: boolean;
  /** Dropdown menu items (if hasDropdown is true) */
  menuItems?: NavigationMenuV2Item[];
  /** Click handler */
  onClick?: () => void;
}

export interface NavbarV2Props {
  /** Logo element (e.g., Eightfold logo) */
  logo?: React.ReactNode;
  /** Product icon */
  productIcon?: React.ReactNode;
  /** Product name text */
  productName?: string;
  /** Navigation tabs */
  tabs?: NavbarV2Tab[];
  /** Search bar configuration */
  searchBar?: {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
  };
  /** Action buttons (e.g., Copilot, Settings, Notifications) */
  actionButtons?: React.ReactNode;
  /** User profile section */
  profile?: {
    avatar?: React.ReactNode;
    dropdown?: React.ReactNode;
  };
  /** Additional CSS classes */
  className?: string;
}

export const NavbarV2 = React.forwardRef<HTMLDivElement, NavbarV2Props>(
  (
    {
      logo,
      productIcon,
      productName,
      tabs = [],
      searchBar,
      actionButtons,
      profile,
      className = '',
    },
    ref
  ) => {
    const [searchValue, setSearchValue] = React.useState(searchBar?.value || '');
    const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
      if (searchBar?.onChange) {
        searchBar.onChange(value);
      }
    };

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && searchBar?.onSearch) {
        searchBar.onSearch(searchValue);
      }
    };

    const handleTabClick = (tab: NavbarV2Tab, index: number) => {
      if (tab.hasDropdown && tab.menuItems && tab.menuItems.length > 0) {
        setOpenDropdown(openDropdown === index ? null : index);
      }
      if (tab.onClick) {
        tab.onClick();
      }
    };

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      };

      if (openDropdown !== null) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [openDropdown]);

    return (
      <div ref={ref} className={`navbar-v2 ${className}`}>
        <div className="navbar-v2__container">
          {/* Left Side - Branding & Tabs */}
          <div className="navbar-v2__left">
            {/* Branding */}
            {(logo || productIcon || productName) && (
              <div className="navbar-v2__branding">
                {logo && <div className="navbar-v2__logo">{logo}</div>}
                
                {(logo && (productIcon || productName)) && (
                  <div className="navbar-v2__separator" />
                )}
                
                {(productIcon || productName) && (
                  <div className="navbar-v2__product">
                    {productIcon && (
                      <div className="navbar-v2__product-icon">{productIcon}</div>
                    )}
                    {productName && (
                      <div className="navbar-v2__product-name">{productName}</div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Navigation Tabs */}
            {tabs.length > 0 && (
              <div className="navbar-v2__tabs" ref={dropdownRef}>
                {tabs.map((tab, index) => (
                  <div key={index} className="navbar-v2__tab-wrapper">
                    <button
                      type="button"
                      className={`navbar-v2__tab ${tab.active ? 'navbar-v2__tab--active' : ''}`}
                      onClick={() => handleTabClick(tab, index)}
                    >
                      <div className="navbar-v2__tab-content">
                        <span className="navbar-v2__tab-label">{tab.label}</span>
                        {tab.hasDropdown && (
                          <span className="navbar-v2__tab-icon">
                            <Icon name="expand_more" size={20} />
                          </span>
                        )}
                      </div>
                      <div className="navbar-v2__tab-indicator" />
                    </button>

                    {/* Dropdown Menu */}
                    {tab.hasDropdown && tab.menuItems && openDropdown === index && (
                      <NavigationMenuV2
                        items={tab.menuItems}
                        showArrow={true}
                        arrowPosition={24}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Search, Actions, Profile */}
          <div className="navbar-v2__right">
            {/* Search Bar */}
            {searchBar && (
              <div className="navbar-v2__search">
                <span className="navbar-v2__search-icon">
                  <Icon name="search" size={20} />
                </span>
                <input
                  type="text"
                  className="navbar-v2__search-input"
                  placeholder={searchBar.placeholder || 'Type to search'}
                  value={searchValue}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                />
              </div>
            )}

            {/* Action Buttons */}
            {actionButtons && (
              <div className="navbar-v2__actions">{actionButtons}</div>
            )}

            {/* Profile */}
            {profile && (
              <div className="navbar-v2__profile">
                {profile.avatar && (
                  <div className="navbar-v2__avatar">{profile.avatar}</div>
                )}
                {profile.dropdown && (
                  <div className="navbar-v2__dropdown">{profile.dropdown}</div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="navbar-v2__border" />
      </div>
    );
  }
);

NavbarV2.displayName = 'NavbarV2';

