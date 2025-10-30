Component: Select
Overview
The Select component (dropdown list) allows users to choose one or more options from a predefined list. It can also be a multi-selector with the Pill component inside.    

When to Use
Use Select when: Choosing from a medium-to-large list of data values, space is limited, or multiple selections are needed compactly (mode="multiple").    

Consider other components if: Few options (RadioButtons), free-form text (TextInput), or options are actions (Dropdown).    

Select Sub-Components
Select.Option: Single option (value, disabled, children).    

Select.OptGroup: Groups options (label).    

Best Practices
Use a meaningful default or placeholder.    

Order options logically. Group long lists.    

Clearly indicate selected value.    

Things to Avoid
Don't use for very few options.    

Avoid extremely long, ungrouped lists.    

Key Properties (API Highlights)
value: (string/number or array).    

onChange: (function (value, option) => void).    

options: (array of objects {{label, value}}).    

placeholder: (string/node).    

mode: (multiple, tags).    

allowClear: (boolean).    

showSearch: (boolean).    

filterOption: (boolean or function).    

virtual: (boolean) For performance with many options.    

Accessibility Considerations
Needs an associated label.    

Keyboard navigation: Tab to focus, Arrows/Enter/Space to open/navigate/select, Escape to close.    

ARIA: role="combobox", aria-haspopup="listbox", aria-expanded. List role="listbox", options role="option", aria-selected.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Select/Select.tsx