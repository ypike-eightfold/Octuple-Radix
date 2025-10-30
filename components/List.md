Component: List
Overview
The List component displays a series of related items, from simple text to complex entries with avatars and actions.    

When to Use
Use List when: Displaying collections (notifications, activity feeds, comments, features).    

Consider other components if: For complex tabular data (Table) or primarily navigation (Menu).    

List Sub-Components
List.Item: A single list item. Props: actions, extra.    

List.Item.Meta: For structured content within an item. Props: avatar, title, description.    

Best Practices
Keep item content concise and scannable.    

Maintain consistent structure and style.    

Consider virtualization for very long lists.    

Things to Avoid
Don't overload list items with disparate information (consider Card).    

Don't use for primary page layout (use Grid).    

Key Properties (API Highlights for
dataSource: (array) Data for list items.    

renderItem: (function (item, index) => React.ReactNode).    

bordered: (boolean).    

header/footer: (node).    

loading: (boolean).    

grid: (object) Configuration for grid layout.    

itemLayout: (horizontal, vertical).    

pagination: (boolean or object).    

Accessibility Considerations
Use semantic <ul>/<ol> and <li> where appropriate.    

Interactive items must be keyboard accessible.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/List/List.tsx