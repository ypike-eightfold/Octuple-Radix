Component: SearchBar
Overview
The SearchBar is a specialized input for search queries, often with a search icon and clear button. It is typically an implementation of Input.Search.    

When to Use
Use SearchBar when: Allowing users to search content, lists, or filter datasets.    

Consider other components if: Simple text input without search functionality (TextInput).    

Best Practices
Make it easily discoverable.    

Use clear placeholder text.    

Include a search icon.    

Provide a clear button.    

Consider real-time suggestions.    

Things to Avoid
Don't hide if it's primary for finding content.    

Avoid overly complex search interfaces for simple needs.    

Key Properties (API Highlights)
(Inherits from TextInput)

enterButton: (boolean or node) Shows search button.    

onSearch: (function (value, event) => void).    

loading: (boolean) Loading state on search button.    

Accessibility Considerations
Needs an accessible label (visible <label>, aria-label, or aria-labelledby).    

role="search" for the container if it's a landmark.    

Clear/Search buttons must be keyboard accessible with labels.    

