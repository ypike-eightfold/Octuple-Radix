Component: PersistentBar
Overview
The PersistentBar is a bar that remains fixed at the top or bottom of the viewport to provide users with persistent access to important information or actions.    

When to Use
Use a bottomBar for primary page actions like "Save Draft" or "Submit".    

Use a topBar for contextual information, filters, or batch actions related to the page content.    

Use the topBarPagination type for navigating large datasets.    

Best Practices
Keep the content and actions concise to avoid cluttering the viewport.    

Use the closable prop for informational bars that the user can dismiss.    

Key Properties (API Highlights)
type: ('bottomBarWithText', 'bottomBarSecondaryButtons', 'topBarButtons', etc.) Defines the layout and content of the bar.    

title: (string) The main title text for the bar.    

content: (string) The main descriptive content for the bar.    

closable: (boolean) If true, the bar can be dismissed by the user.    

onClose: (function) Callback fired when the bar is closed.    

actionButtonOneProps / Two / Three: (ButtonProps) Props for the main action buttons.    

paginationProps: (PaginationProps) Props to configure the pagination component when type is topBarPagination.    

bordered: (boolean) Whether the bar has a border. Default: false.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/PersistentBar/PersistentBar.tsx