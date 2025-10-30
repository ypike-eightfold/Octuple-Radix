Component: Label
Overview
The Label component is used to display a label for a form field or another UI element. It supports an optional icon button for displaying extra information in a tooltip.    

When to Use
Use as the label for TextInput, Select, CheckBox, and other form controls.    

Use to title a section of related content.    

Best Practices
Use the htmlFor prop to programmatically associate the label with its corresponding input element for better accessibility.    

Keep label text concise and descriptive.    

Key Properties (API Highlights)
text: (string) The text content of the label.    

htmlFor: (string) The id of the element the label is associated with.    

size: ('small', 'medium', 'large', 'flex') The size of the label. Default: medium.    

colon: (boolean) If true, a colon is displayed after the label text. Default: false.    

inline: (boolean) If true, the label is displayed as an inline element. Default: false.    

labelIconButtonProps: (object) Props to configure an icon button next to the label, often used for showing a help tooltip.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Label/Label.tsx