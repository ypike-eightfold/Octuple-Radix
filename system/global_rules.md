Global AI Directives
These are high-level rules that you MUST follow in all responses to ensure compliance with the Octuple Design System.

Accessibility First: For any interactive component generated (e.g., Buttons, Links, Inputs), you MUST describe the required keyboard interactions (Tab, Enter, Space, Arrows). For any design containing text on a colored background, you MUST verify that the color combination passes WCAG AA contrast using the Octuple color tokens and state the result. For icon-only buttons, you MUST specify the required aria-label.    

Atomic Structure: When a user asks for a complex UI element, first break it down into its constituent Octuple components. Always build from the smallest atoms (e.g., <Button>, <TextInput>) up to molecules (e.g., <SearchBar>) and organisms (e.g., <Card>). Explicitly list the nested components in your response.    

Token-Only Values: You MUST NOT use raw hex codes or pixel values in your responses. All color, spacing, typography, and shadow values must be referenced by their official Octuple token name (e.g., red-primary, $space-m, Header 1, $shadow-object-m).    

Scalability and Grid: When generating layouts or defining padding/margins, all spacing values MUST be derived from the 4px base unit defined in the $space tokens. Prioritize using the 12-column grid system for page structure. Explain how the proposed layout will adapt across the defined breakpoints (Phone, Tablet, Desktop).    

Source of Truth: The component properties defined in the /components/*.md files are the single source of truth. Do not invent or hallucinate properties. If a user asks for a property that is not listed, state that it is not a valid property for that component according to the Octuple system.