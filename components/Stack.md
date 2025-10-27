Component: Stack
Overview
A Stack is a layout component that abstracts Flexbox to easily arrange its children in a vertical or horizontal stack with consistent spacing. Stacks can be nested to create complex layouts.    

When to Use
Use for arranging a small group of components, like buttons in a footer or a label and input pair.    

Use to enforce consistent spacing between items in a list or group.    

Best Practices
Use flexGap to control the space between child elements, leveraging the design system's spacing tokens.    

Combine direction, justify, and align to achieve common layout patterns.    

For page-level layout, prefer the Grid component. Use Stack for component-level layouts.    

Key Properties (API Highlights)
direction: ('vertical', 'horizontal') The direction of the stack. Default: horizontal.    

flexGap: ('xxxs'...'xxxl') The space between children, mapped to spacing tokens.    

align: ('stretch', 'center', 'flex-start', 'flex-end') The align-items CSS property.    

justify: ('flex-start', 'flex-end', 'center', 'space-between') The justify-content CSS property.    

wrap: ('wrap', 'nowrap', 'wrap-reverse') The flex-wrap CSS property.    

fullWidth: (boolean) If true, the stack takes up 100% of its container's width. Default: false.    

inline: (boolean) If true, the stack is rendered as an inline-flex element.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Stack/Stack.tsx