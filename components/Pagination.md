Component: Pagination
Overview
A pagination UI component allows users to navigate through a large set of data by viewing it in pages. It typically consists of a series of buttons or links that represent the different pages of data, as well as a way for users to specify the page they want to view.    

When to Use
Use Pagination when: Displaying large lists/tables, or breaking up long articles.    

Consider other components if: Small number of items (infinite scroll/"Load More" button might be better).    

Best Practices
Clearly indicate current page.    

Provide easy navigation (next, previous, specific page jump).    

Show total items/pages if known.    

Use simplified for small space pagination requirement.    

Use dots for carousel use case.    

Use default for page and tables.    

Things to Avoid
Don't use if content fits one page well.    

Avoid overly complex controls.    

Key Properties (API Highlights)
current: (number) Current page.    

total: (number) Total number of data items.    

pageSize: (number) Items per page.    

onChange: (function (page, pageSize) => void).    

showSizeChanger: (boolean).    

showQuickJumper: (boolean).    

showTotal: (function (total, range) => ReactNode).    

simple: (boolean) For simpler controls.    

variants: (default, dot, simplified).    

Accessibility Considerations
Wrap in <nav aria-label="Pagination">.    

Current page: aria-current="page".    

Prev/Next buttons: accessible labels, aria-disabled="true" when applicable.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Pagination/Pagination.tsx