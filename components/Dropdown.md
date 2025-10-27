Component: Dropdown
Overview
A drop-down menu is a list of options that appears when a user clicks an element, such as a button or icon. The title of the menu or the currently-selected item is always displayed. Drop-down menus are a design pattern that allows you to display a list of contents, navigation points, and functions without flooding the user with many options simultaneously.    

When to Use
Use Dropdown when: Grouping related actions (Edit, Delete), compact navigation links (user menu), or a "More options" button.    

Consider other components if: Selecting data values (Select), only 1-2 primary actions (Buttons), or mutually exclusive settings (RadioButtons/Tabs).    

Best Practices
Use clear, concise labels for menu items.    

Ensure trigger clearly indicates a dropdown (e.g., chevron icon).    

Close on item selection, Escape, or outside click.    

Things to Avoid
Don't overload with too many items; consider submenus sparingly.    

Don't use for critical, frequently used actions.    

Key Properties (API Highlights)
menu or items: (array of objects) Defines menu items (key, label, icon, disabled, onClick, children for submenus).    

trigger: (click, hover, contextMenu).    

placement: Position of overlay.    

overlay: (node) Typically a Menu component.    

children: (node) The trigger element.    

Accessibility Considerations
Trigger: aria-haspopup="true", aria-expanded, aria-controls.    

Menu: role="menu" or listbox.    

Items: role="menuitem".    

Full keyboard navigation (arrows, Enter/Space, Escape).    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Dropdown/Dropdown.tsx

