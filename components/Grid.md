Component: Grid (Layout)
Overview
The Grid components (Row and Col) provide a responsive layout system based on a 12-column structure for arranging content. The columns will rearrange depending on the screen size. It has a fixed gutter value, and a dynamic margin value to restructure the column layout best for the viewport width.    

When to Use
Use Grid when: Structuring overall page layout, arranging components responsively, aligning content with consistent spacing.    

Consider other components if: Simple vertical stack (Flexbox/block) or very simple horizontal arrangements.    

Grid Components
: Container for columns. Props: gutter, align, justify, wrap.    

: Column within a Row. Props: span (1-24), offset, order, pull, push, and responsive props (xs, sm, md, lg, xl, xxl).    

Best Practices
Plan layouts mobile-first or desktop-first using responsive props.    

Use gutter on <Row> for spacing.    

Nest Row and Col as needed, but avoid excessive nesting.    

Things to Avoid
Don't use for small-scale alignment within a component; Flexbox is often better.    

Avoid applying margins directly to <Col> if gutter suffices.    

Accessibility Considerations
Ensure visual order matches DOM order, especially with push/pull/order.    

Test responsiveness on various screen sizes.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Grid/Grid.stories.tsx