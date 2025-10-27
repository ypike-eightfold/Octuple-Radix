Component: Portal
Overview
A Portal is a utility component that renders its children into a different part of the DOM, outside of their parent component's DOM hierarchy.    

When to Use
Use for components that need to break out of their container, such as modals, dialogs, tooltips, and popovers, to avoid CSS stacking context or overflow issues.    

Key Properties (API Highlights)
children: (ReactNode) The content to be portaled to another location in the DOM.    

getContainer: (() => HTMLElement) A function that returns the DOM node where the children will be appended. Defaults to document.body.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Portal/Portal.tsx