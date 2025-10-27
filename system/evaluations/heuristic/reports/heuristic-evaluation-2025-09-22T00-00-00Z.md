# Heuristic Evaluation

- Date (UTC): 2025-09-22T00-00-00Z
- Scope: Admin Console → PCS Configure Personalized Career Site (list view and details for section=base)
- Evaluator: Cursor AI Assistant
- Sources: system/evaluations/heuristic/guidance documents/info.md; components/Progress.md; components/Stepper.md
- Version: prototype

## Executive summary
Overall usability is solid for a prototype. Navigation is straightforward and the visual hierarchy is mostly consistent. Top issues to address: lack of confirmation for destructive actions (Reset/Exit), limited clarity of the step indicator, hidden navigation in details view that reduces wayfinding, and absence of unsaved-changes protection.

## Method
- Framework: Nielsen’s 10 usability heuristics
- Guidance: Heuristic Evaluation Guidance (info.md)

## Findings by heuristic

### 1) Visibility of system status
- Issue: Progress shows 1/14, but the current step name is not surfaced near the indicator; users may not connect the dots between the bar and the active section.
- Location: Blue header on PCS details (`/admin-console?nav=pcs.configure-personalized-career-site&section=base`)
- Severity: 3 (Medium)
- Evidence: Text label “Current step 1/14” and a discrete steps bar; no explicit step label adjacent to the bar.
- Recommendation: Pair the steps bar with the active step label, e.g., “Step 1: Base Career Site,” or add an active indicator state for the first segment with a label.

### 2) Match between system and the real world
- Issue: Acronym “PCS” may be unclear to new admins unless expanded.
- Location: Left nav title and deep-link param (`nav=pcs.configure-personalized-career-site`).
- Severity: 4 (Low)
- Evidence: Acronym appears without expansion in some contexts.
- Recommendation: Use “Personalized Career Site (PCS)” on first mention; subsequent mentions can use PCS.

### 3) User control and freedom
- Issue: Reset can be destructive and currently has no confirmation.
- Location: Blue header actions (Reset)
- Severity: 2 (High)
- Evidence: Immediate action; no confirm or undo.
- Recommendation: Add a confirmation modal summarizing the changes to be reset and provide an undo path if feasible.

- Issue: Exit returns the user to the list but does not warn about unsaved changes.
- Location: Blue header actions (Exit)
- Severity: 3 (Medium)
- Evidence: No route guard or save prompt when edits exist.
- Recommendation: Detect dirty state and prompt before exiting.

### 4) Consistency and standards
- Issue: The visual weight of Reset and Exit can appear similar; destructive vs navigational intent could be clearer.
- Location: Blue header actions
- Severity: 4 (Low)
- Evidence: Both rendered as small buttons with similar prominence.
- Recommendation: Style Reset as neutral/tertiary; keep Exit as secondary; ensure spacing follows design system guidance.

### 5) Error prevention
- Issue: High-impact toggles (Enable Career Site) can be flipped accidentally without staging or confirmation.
- Location: PCS details → Base section
- Severity: 3 (Medium)
- Evidence: Toggle patterns without a Save/Publish model.
- Recommendation: Stage edits and require Save/Publish; confirm destructive flips.

### 6) Recognition rather than recall
- Issue: Left nav hides in details, reducing wayfinding to other sections.
- Location: PCS details layout
- Severity: 3 (Medium)
- Evidence: `isPcsConfig` hides the accordion; users lose visible IA context.
- Recommendation: Provide a compact in-page section list or breadcrumb with quick links.

### 7) Flexibility and efficiency of use
- Issue: No quick-jump or keyboard-accessible section index in details view.
- Location: PCS details
- Severity: 4 (Low)
- Evidence: Keyboard nav implemented in left nav only; that UI is hidden in details.
- Recommendation: Add an in-page index with anchors and preserve arrow/home/end key behavior.

### 8) Aesthetic and minimalist design
- Issue: Progress steps can compress visually when width is constrained.
- Location: Blue header progress
- Severity: 4 (Low)
- Evidence: Discrete steps appear cramped at smaller widths.
- Recommendation: Apply a responsive `minWidth` or percentage-based width; optionally adapt to a simpler bar on narrow viewports.

### 9) Help users recognize, diagnose, and recover from errors
- Issue: No inline validation/help text patterns illustrated for inputs.
- Location: PCS details inputs
- Severity: 4 (Low)
- Evidence: TextInput/Toggle examples lack helper/error text.
- Recommendation: Add helper and error states for required fields and invalid input.

### 10) Help and documentation
- Issue: No contextual help or “Learn more” affordances for complex settings.
- Location: Section headers and blue header
- Severity: 4 (Low)
- Evidence: No links or tooltips pointing to docs.
- Recommendation: Add concise help links or tooltips for key configurations.

## Cross-cutting recommendations
- Non-destructive workflow: Introduce Save/Publish, confirm for Reset/Exit on dirty state.
- Improve step clarity: Show active step name next to the step indicator; provide active segment styling.
- Maintain recognition in details: Provide a compact section index or chips.
- Make progress responsive: Ensure adequate width and spacing for discrete steps.
- Add validation/help patterns: Helper and error text for critical fields.

## Appendix
- Heuristic checklist: Nielsen’s 10
- References: info.md; Progress.md; Stepper.md
