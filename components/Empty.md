Component: Empty
Overview
The Empty component is used to display a placeholder state when there is no data to show, such as in an empty list, a search with no results, or an error state.    

When to Use
Use when a table, list, or chart has no data to display.    

Use to provide feedback after a search yields no results.    

Use to communicate an error state where content could not be loaded.    

Best Practices
Use the mode prop to display a relevant preset image and message for common scenarios like 'search' or 'error'.    

Provide a clear title and description to explain why the area is empty.    

Include a call-to-action as a child element (e.g., a "Create New Item" button) to guide the user.    

Key Properties (API Highlights)
mode: ('data', 'error', 'messages', 'plan', 'profile', 'search', 'tasks') Sets a predefined style for the component. Default: data.    

image: (ReactNode) A custom image or icon to display.    

title: (string) The main title text.    

description: (string) The supplementary description text.    

children: (ReactNode) Content to be rendered below the description, typically for action buttons.    

imageStyle: (React.CSSProperties) Custom styles for the image container.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Empty/Empty.tsx