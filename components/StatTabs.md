Component: StatTabs
Overview
StatTabs are a variant of the Tabs component, designed for navigating between frequently accessed, distinct content categories that often include a statistical value. They use a combination of a label and a value (the "stat") to articulate each section.    

When to Use
Use to display key metrics or categories at the top of a dashboard or list, where each tab represents a filtered view with a corresponding count (e.g., "All (50)", "Active (30)", "Inactive (20)").    

Best Practices
Use the ratioA and ratioB props to display the statistical value clearly.    

Use the status prop to apply validation colors (e.g., 'success', 'warning', 'error') to a specific tab.    

Key Properties (API Highlights)
variant: ('stat') Must be set to stat to enable this functionality.    

value: (TabValue) The key of the currently active tab.    

onChange: (function) Callback fired when a new tab is selected.    

bordered: (boolean) Whether the tab group has a bottom border. Default: true.    

divider: (boolean) Whether to show a dashed line separator between tabs. Default: true.    

statgrouptheme: (ThemeName) The color theme for the tab group.    

Individual Stat (Tab) Props:

ratioA: (string | number) The primary value of the stat (the numerator).    

ratioB: (string | number) The secondary value of the stat (the denominator).    

status: ('success', 'warning', 'error') The validation status of the individual tab.    

