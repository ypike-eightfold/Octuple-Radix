Component: Loader
Overview
The Loader (Spinner) provides visual feedback when content is loading or an action is processing.    

When to Use
Use Loader when: Fetching data, submitting forms, or indicating background processing.    

Consider other components if: For determinate progress (Progress) or placeholder structure (Skeleton).    

Best Practices
Place loaders strategically to indicate what's loading.    

Use appropriate size.    

Consider a delay for very quick operations to avoid "flashing".    

Things to Avoid
Don't show multiple loaders for the same state.    

Don't let loaders obscure critical information.    

Key Properties (API Highlights)
spinning or active: (boolean). Default: true.    

size: (small, default/medium, large).    

tip: (string/node) Descriptive text.    

delay: (number) Milliseconds before showing.    

indicator: (node) Custom indicator.    

children: (node) If provided, loader overlays children when spinning.    

Accessibility Considerations
Announce loading state to screen readers (e.g., aria-live, aria-busy="true" on container).    

Manage focus appropriately if loader covers interactive elements.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Loader/Loader.tsx