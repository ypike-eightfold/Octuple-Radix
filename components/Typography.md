Component: Typography
Overview
The Typography component is a utility for rendering standard text styles, ensuring consistency and adherence to the design system's typographic scale. It provides a set of pre-styled text elements like headings, paragraphs, and links.    

When to Use
Use Typography components whenever you need to display textual content that should align with the established design system styles for headings, body text, etc.    

Consider other components if: The text is an integral part of another component that manages its own typography, such as the label on a Button.    

Typography Sub-Components
Typography.Title: For rendering semantic heading levels. Use the level prop (1-5) to specify <h1> through <h5>.    

Typography.Text: For standard body text. Can be modified with props like type (for semantic colors), strong, italic, code, etc.    

Typography.Paragraph: A wrapper for paragraph text, which inherits from Typography.Text.    

Typography.Link: A styled anchor <a> tag for navigation. See the main Link component for more details.    

Common Properties
disabled: (boolean) Renders text in a disabled state.    

ellipsis: (boolean or object) Truncates text with an ellipsis. Can be configured for multiple lines and expandability.    

copyable: (boolean or object) Adds an icon allowing the user to copy the text to the clipboard.    

editable: (boolean or object) Allows the user to edit the text in-place.    

Best Practices
Use semantic heading levels correctly to maintain a logical document structure (e.g., <h1> followed by <h2>).    

Maintain a clear visual hierarchy with the different typography styles.    

Ensure all text has sufficient color contrast against its background to meet accessibility standards.    

Things to Avoid
Do not skip heading levels (e.g., jumping from an <h1> to an <h3>). This disrupts the document outline for assistive technologies.    

Avoid using typographic styles purely for visual effect without considering their semantic meaning. For example, don't use a <h4> just to get a certain font size if it's not semantically a sub-heading.    

Accessibility Considerations
The Typography.Title component renders the correct semantic HTML elements (<h1> - <h5>), which is crucial for screen readers.    

The Typography.Paragraph component renders a <p> tag.    

If using the ellipsis prop, ensure the full text is accessible, for example, through a tooltip on hover.    

The copyable and editable features must be fully keyboard accessible.    

