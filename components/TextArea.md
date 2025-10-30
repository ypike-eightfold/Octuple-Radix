Component: TextArea
Overview
The TextArea allows multi-line free-form text input.    

When to Use
Use TextArea when: Collecting longer text (comments, descriptions).    

Consider other components if: Single-line input (TextInput), or rich text editing is needed.    

Best Practices
Always associate a clear label.    

Set appropriate initial rows; consider autoSize.    

Use maxLength and showCount if there are limits.    

Things to Avoid
Don't use for short, single-line inputs.    

Don't use placeholder as the sole label.    

Key Properties (API Highlights)
value/defaultValue: (string).    

onChange: (function (event) => void).    

rows: (number).    

autoSize or autosize: (boolean or object { minRows, maxRows }).    

maxLength: (number).    

showCount: (boolean or object).    

allowClear: (boolean).    

Accessibility Considerations
Must have an associated label.    

Validation errors linked with aria-describedby.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Inputs/TextArea/TextArea.tsx