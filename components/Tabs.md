Component: Tabs
Overview
A tabs component allows users to switch between different views or content panels. Tabs are typically organized in a horizontal or vertical layout, and each tab has a label that describes the content that is contained within it.    

When to Use
Use Tabs when: Organizing content into distinct sections (profile details, activity), presenting different facets of an item.    

Consider other components if: Sequential process (Stepper), collapsible sections (Accordion), hierarchical navigation (Breadcrumb/Menu).    

Best Practices
Use short, clear tab labels.    

Ensure active tab is visually distinct.    

Order tabs logically.    

Things to Avoid
Don't use for navigating to entirely different application sections.    

Avoid nesting tabs.    

Key Properties (API Highlights)
items: (array of objects) Defines tabs: key, label/tab, children/content, disabled.    

activeKey: (string) Controlled active tab.    

onChange: (function (activeKey: string) => void).    

type: (line, card, editable-card).    

tabPosition: (top, right, bottom, left).    

Accessibility Considerations
Tab list: role="tablist".    

Each tab: role="tab", aria-selected, aria-controls.    

Tab panel: role="tabpanel", aria-labelledby.    

Keyboard: Tab to active tab, Arrows to navigate tabs (activates), Tab into panel content.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Tabs/Tab/Tab.tsx