Component: Form
Overview
The Form component provides structured input collection, layout, data binding, and validation. It works in conjunction with Form.Item.    

When to Use
Use Form when: Collecting user data for submission (registration, settings), creating/editing entities, search/filter interfaces.    

Consider other components if: Only a single input is needed without wider submission context.    

Form Sub-Components
Form.Item: Wraps a field (control + label + validation). Props: label, name, rules, help, validateStatus.    

Best Practices
Clearly label all fields.    

Group related fields. Indicate required fields.    

Provide clear validation messages.    

Ensure a clear primary submission button.    

Things to Avoid
Don't ask for unnecessary information.    

Avoid overly complex validation rules.    

Don't rely on placeholder text as labels.    

Key Properties (API Highlights for
form: (FormInstance) From Form.useForm().    

initialValues: (object).    

onFinish: (function) On successful submission.    

onFinishFailed: (function) On validation failure.    

layout: (horizontal, vertical, inline).    

Accessibility Considerations
Each control needs a programmatically associated label (Form.Item handles this).    

Validation errors linked with aria-describedby.    

Full keyboard navigation.    

Group related controls (RadioButtons, CheckBoxes) with <fieldset>/<legend>.    

