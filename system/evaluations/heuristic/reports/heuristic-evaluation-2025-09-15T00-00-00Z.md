# Heuristic Evaluation

- Date (UTC): 2025-09-15T00-00-00Z
- Scope: Prototype › Configuration panel (Generate QR code)
- Evaluator: AI assistant
- Sources: Nielsen’s 10 Heuristics; system/evaluations/heuristic/guidance documents/info.md

## Executive summary
The panel is simple and understandable. Main issues: label contrast, grouping semantics, and missing preview affordances for the URL.

## Method
- Framework: Nielsen’s 10 heuristics
- Guidance: heuristic guidance (info.md)

## Findings by heuristic
- Visibility of system status — Severity 4
  - Issue: No inline status after copying URL.
  - Recommendation: Show a brief confirmation ("Copied").

- Match between system and real world — Severity 4
  - Issue: “Instant interview” may need helper text.
  - Recommendation: Add a short description or tooltip.

- User control and freedom — Severity 4
  - Issue: Closing the panel should restore focus to the trigger.
  - Recommendation: Save trigger ref and `.focus()` on close.

- Consistency and standards — Severity 3
  - Issue: Tabs vs. fieldset; use consistent grouping pattern.
  - Recommendation: Use fieldset/legend for both groups.

- Error prevention — Severity 4
  - Issue: Job ID field has no validation.
  - Recommendation: Validate format, show helper message for invalid.

- Aesthetic and minimalist design — Severity 4
  - Issue: Spacing is good; labels should use primary color.
  - Recommendation: Keep labels and controls aligned and ensure color consistency.

## Cross-cutting recommendations
- Add success toast/snackbar for copy action.
- Add helper text for ambiguous options.
- Add fieldset/legends and restore focus on close.

## Appendix
- Reviewed in current prototype with Octuple components.
