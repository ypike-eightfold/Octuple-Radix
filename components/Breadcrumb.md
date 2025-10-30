Component: Breadcrumb
Overview
A breadcrumb UI is a navigation element that shows the user's current location within a website or app. It is typically displayed as a list of links, with each link representing a different level in the website's hierarchy. Breadcrumbs are a valuable way-finding tool. Showing the current page inside the breadcrumb is not needed as a permanent page level header is recommended for all pages.    

When to Use
Use Breadcrumb when: Your site has a clear hierarchical structure with multiple levels.    

Consider other components if: Your site structure is flat or you're showing steps in a linear process (use Stepper).    

Best Practices
Place breadcrumbs consistently at the top of the page.    

The last item (current page) is usually not a link.    

Use a clear separator.    

Things to Avoid
Don't use breadcrumbs as a replacement for primary navigation.    

Avoid overly long or complex breadcrumb trails.    

Key Properties (API Highlights)
items: (array of objects) Defines the breadcrumb trail. Each object: path (optional URL), title, icon (optional), menu (optional for dropdown).    

separator: (string/node) Separator character. Default: /.    

maxItems: (number) Max items to display before collapsing.    

itemRender: (function) Custom render function for items.    

Accessibility Considerations
Wrap in <nav aria-label="breadcrumb">.    

Current page item should have aria-current="page".    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Breadcrumb/Breadcrumb.tsx
