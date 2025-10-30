# Content Design Evaluation

- Date (UTC): 2025-09-15T00-00-00Z
- Scope: Prototype › Configuration panel (Generate QR code)
- Evaluator: AI assistant
- Sources: system/evaluations/content_design/guidance documents/info.md

## Executive summary
Copy is clear and concise, but a few labels could be clarified and helper text added for discoverability.

## Method
- Approach: Heuristics and content standards
- Guidance: Content Design guidance (info.md)

## Findings
- Title clarity — Severity 4
  - Location: Panel title “Generate QR code”.
  - Issue: Good, action-oriented.
  - Recommendation: Keep.

- Filter labels — Severity 3
  - Location: “Instant interview”, “Category (dept/keyword)”.
  - Issue: Potential ambiguity.
  - Recommendation: Add helper text or rename to “Instant interview available” and “Category (department/keyword)”.

- Job type grouping — Severity 4
  - Location: “Job type”.
  - Issue: Group label is fine; options are clear.
  - Recommendation: Keep; consider separate Temporary and Contract if needed by analytics.

- Preview label — Severity 4
  - Location: “Preview”.
  - Issue: Fine as-is; consider adding “This QR encodes the URL below.”

## Recommendations summary
- Quick wins: add helper text; show copy confirmation; ensure primary text color for labels.
- Medium: validation for Job ID; fieldset/legend semantics; focus restore.

## Appendix
- Evaluated: Configuration panel with Octuple components.
