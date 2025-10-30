Component: Menu
Overview
A menu is a graphical control element that displays a list of options for the user to select. Menus are a common feature of operating systems, software applications, and web-based applications.    

When to Use
Use Menu when: Creating navigation (navbars, sidebars), as content for Dropdowns, or context-specific action lists.    

Consider other components if: Selecting a single data value (Select) or displaying non-interactive items (List).    

Menu Sub-Components
Menu.Item: Clickable option (key, disabled, icon, danger).    

Menu.SubMenu: Item opening a nested submenu (key, title, icon, children).    

Menu.ItemGroup: Groups items under a title.    

Menu.Divider: Visual separator.    

Best Practices
Use clear, concise labels.    

Organize logically; use submenus sparingly.    

Clearly indicate the active/selected item.    

Things to Avoid
Don't create overly deep submenu hierarchies.    

Don't use for tasks requiring complex input.    

Key Properties (API Highlights for
)
items: (array of objects) Declarative definition.    

mode: (vertical, horizontal, inline).    

theme: (light, dark).    

selectedKeys: (array of strings) Controlled.    

openKeys: (array of strings) Controlled open submenus.    

onClick: (function).    

inlineCollapsed: (boolean) For collapsed inline menu.    

Accessibility Considerations
Keyboard navigation: Arrow keys, Enter/Space, Escape.    

ARIA roles: role="menu"/menubar, role="menuitem".    

Indicate selection with aria-current or aria-selected.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Menu/Menu.tsx