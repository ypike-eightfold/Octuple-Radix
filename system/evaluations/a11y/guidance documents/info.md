## Accessibility (a11y) Guidance (info.md)

### Purpose
- Central guidance for accessibility evaluations. Use these defaults when no other specific docs are present.

### Default standards and best practices
- Conformance target: WCAG AA or better. Default: WCAG 2.2 AA. Also adhere to WCAG 2.1 AA and Section 508 where applicable.
- Secondary check: Reference USDS/USWDS accessibility guidance where relevant (patterns, components, content), but WCAG remains the primary standard for conformance.
- WAI-ARIA usage appropriate to role semantics; avoid ARIA when native semantics suffice.
- Color contrast: SC 1.4.3 and 1.4.11; test text and non-text contrast.
- Keyboard operability and focus management; visible focus indicators.
- Names, roles, values exposed to assistive tech; correct labeling and relationships.
- Forms: error identification, instructions, and suggestions; programmatic association.
- Motion, timing, and flashing content safeguards.

### Tools and methods
- Screen readers (e.g., VoiceOver, NVDA), keyboard-only, contrast analyzers, and manual checks.

**Accessibility First:** For any interactive component generated (e.g., Buttons, Links, Inputs), you MUST describe the required keyboard interactions (Tab, Enter, Space, Arrows). For any design containing text on a colored background, you MUST verify that the color combination passes WCAG AA contrast using the Octuple color tokens and state the result. For icon-only buttons, you MUST specify the required aria-label.

**Accessibility Required:** Design and build for everyone, regardless of ability. Ensure usability and full participation by adhering to established standards like WCAG 2.1 AA and Section 508. Compassion and extreme ownership drive our commitment to inclusive products for users including those who are blind, have limited vision, are deaf, have limited mobility, or are sensory-sensitive.

### Organization-specific rules (add links/notes here)
- Add any documents in this folder that tailor requirements, for example:
  - Approved component patterns and a11y specs
  - Browser/AT support matrix
  - Exception processes and risk acceptance criteria

### Report expectations
- Use the a11y template defined in `../../exe.md`.
- Organize findings by success criterion; apply the shared severity scale.
- Cite any docs in this folder under "Sources".

### Ownership
- Maintained by Functional Leads: Design Systems (primary) with collaboration from UXR and Content Design.

### Version history
- YYYY-MM-DD: Initial version.
