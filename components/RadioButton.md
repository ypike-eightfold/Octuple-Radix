Component: RadioButton
Overview
A radio button is a GUI element that allows users to select one option from a group of options. They are typically used in forms where multiple options are available, and only one can be selected. Usually used in a Radio.Group.    

When to Use
Use RadioButton when: Users choose one option from a small, visible set (2-5 choices).    

Consider other components if: Multiple options selectable (CheckBox), many options (Select).    

RadioButton Sub-Components
Radio.Group: Wrapper. Props: value, onChange, options, optionType (default, button), buttonStyle (outline, solid).    

Radio: Single radio. Props: value, disabled, children (label).    

Radio.Button: Radio styled as a button.    

Variant: (default, pill).    

Best Practices
Always use in groups of two or more.    

Each radio needs a clear label.    

One option should typically be selected by default if logical.    

Things to Avoid
Don't use if multiple selections are allowed.    

Avoid using for too many options.    

Accessibility Considerations
Group with <fieldset> and <legend> (or role="radiogroup" with aria-labelledby).    

Each radio label associated with its input.    

Keyboard: Tab to group, Arrows to navigate/select.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/RadioButton/RadioButton.tsx

https://github.com/EightfoldAI/octuple/blob/main/src/components/RadioButton/RadioGroup.tsx
