Component: Table
Overview
The Table component displays structured, tabular data in rows and columns, often with sorting, filtering, and pagination.    

When to Use
Use Table when: Displaying datasets with multiple attributes per item (user lists, product catalogs), comparing data, or presenting financial data/logs.    

Consider other components if: Simple lists (List), page layout (Grid), or grouped entities (Card).    

Usage Guidelines
Sorting can be by column header value (recommended) or sort drop-down above the table.    

Buttons are always on the right.    

Maximum only 2 CTAs including kebab menu.    

Actions as a dropdown button is accepted.    

Delete and archive must always be inside kebab menu.    

Key Concepts
columns prop: Array defining columns (title, dataIndex, key, render, sorter, filters, etc.).    

dataSource prop: Array of data records, each with a unique key.    

Best Practices
Keep column headers concise.    

Align cell content appropriately.    

Use sorting, filtering, pagination for large datasets.    

Consider horizontal scrolling with fixed key columns for wide tables.    

Things to Avoid
Don't cram too many columns.    

Don't use tables for page layout.    

Key Properties (API Highlights)
columns: (array).    

dataSource: (array).    

loading: (boolean).    

pagination: (boolean or object).    

rowKey: (string or function).    

scroll: (object { x, y }).    

rowSelection: (object) For selectable rows.    

expandable: (object) For expandable rows.    

onChange: (function (pagination, filters, sorter, extra) => void).    

Accessibility Considerations
Use semantic HTML (<table>, <thead>, <th scope="col">, etc.).    

Provide a <caption> if needed.    

Sortable headers should indicate sort status (aria-sort).    

Interactive elements (pagination, selection) must be accessible.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Table/Table.tsx