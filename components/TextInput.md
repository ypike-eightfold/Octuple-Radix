Component: TextInput
Overview
The TextInput component (Input) allows single-line free-form text entry. Input fields are a user interface (UI) element that allows users to enter text into a UI. They are typically found in forms and dialogs. There are 3 input field styles in 3 different sizes. Mixing different style input fields in one interface can create a bad visual design.    

When to Use
Use TextInput when: Collecting short text (names, emails, search queries).    

Consider other components if: Multi-line (TextArea), predefined options (Select), password (htmlType="password").    

Best Practices
Always associate a clear label.    

Use placeholder as a hint, not a label.    

Indicate required fields. Offer clear validation.    

Use prefix/suffix/allowClear for enhanced usability.    

Set appropriate htmlType (email, search, password).    

Things to Avoid
Don't use placeholder as the only label.    

Avoid disabling without reason.    

Don't rely solely on visual cues for errors.    

Key Properties (API Highlights)
value/defaultValue: (string).    

onChange: (function (event) => void).    

placeholder: (string).    

disabled/readOnly: (boolean).    

status: (success, warning, error).    

prefix/suffix: (node).    

htmlType: (string).    

allowClear: (boolean or object).    

maxLength/showCount: (number / boolean or object).    

addonBefore/addonAfter: (node).    

Accessibility Considerations
Must have associated label (<label htmlFor> or aria-label).    

Errors linked via aria-describedby.    

Clear button needs accessible label.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Inputs/TextInput/TextInput.tsx