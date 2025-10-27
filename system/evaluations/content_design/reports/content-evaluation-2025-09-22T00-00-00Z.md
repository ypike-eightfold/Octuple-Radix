# Content Design Evaluation

- Date (UTC): 2025-09-22T00-00-00Z
- Scope: Admin Console → PCS Configure Personalized Career Site (list view and details for section=base)
- Evaluator: Cursor AI Assistant
- Sources: Content Design Standards.md; Terms list.md; report_template.md
- Version: prototype

## Scores

### Content Quality Score: **🟡 Good, Good enough**

### Response Confidence Score: **4**

## Findings (sorted by severity)
- Title: Potentially destructive action lacks confirmation (Reset)
- Location: Blue header actions (Reset)
- Severity: 2
- Evidence: Prominent Reset action without confirmation copy or summary
- Why it matters: Risk of data loss; users need clear guardrails and clarity
- Recommendation: Add confirmation dialog copy: “Reset configuration? This clears all unsaved changes for this page.” Primary: “Reset”, Secondary: “Cancel”

- Title: Exit action lacks unsaved-changes warning copy
- Location: Blue header actions (Exit)
- Severity: 3
- Evidence: No prompt when navigating back to list
- Why it matters: Prevents accidental loss of edits; sets clear expectation
- Recommendation: Show prompt: “Discard changes and exit?” Primary: “Discard and exit”, Secondary: “Stay”

- Title: Step indicator label could be clearer
- Location: Blue header under “Current step 1/14”
- Severity: 3
- Evidence: Numeric ratio lacks step name context
- Why it matters: Users scan for where they are and what’s next
- Recommendation: Change label to “Step 1 of 14: Base Career Site”

- Title: Acronym not expanded on first mention
- Location: Left navigation section title and product card
- Severity: 4
- Evidence: “PCS” used without expansion in some places
- Why it matters: Reduces comprehension for first-time admins
- Recommendation: “Personalized Career Site (PCS)” on first mention, use PCS thereafter

- Title: Field help and error text missing for key inputs
- Location: Base section → Company Name
- Severity: 4
- Evidence: No helper or validation text
- Why it matters: Users need guidance on format/requirements
- Recommendation: Helper: “Your company’s public-facing name.” Error: “Enter 2–60 characters.”

- Title: Toggle copy should clarify impact
- Location: Base section → Enable Career Site; Enable Candidate Sign In
- Severity: 4
- Evidence: Only short labels; no immediate consequence text
- Why it matters: Users need to understand effects before toggling
- Recommendation: Add short descriptions beneath toggles; e.g., “Disabling makes the site unavailable (returns 404).”

---
---

## Executive summary
Copy is concise and mostly consistent. Key gaps are confirm/warning microcopy for risky actions, clarity in the step indicator, and guidance for inputs/toggles. Implementing these will reduce uncertainty and support safer decision-making.

## Method
- Approach: Heuristics-driven content review (clarity, brevity, usefulness)
- Guidance: Content Design Standards; Terms list
- Best practices: Plain language, action-first CTAs, consistent capitalization, confirmation/warning patterns

## Recommendations summary
- Quick wins (≤ 1 day)
  - Update step label to “Step 1 of 14: Base Career Site”
  - Add helper text to Company Name
  - Expand “PCS” on first mention
- Medium (≤ 1 week)
  - Add confirmation dialog copy for Reset and Exit
  - Add consequence descriptions under toggles
- Larger efforts (> 1 week)
  - Establish Save/Publish flow with staged copy and error states

## Appendix
- Screens evaluated: Admin Console header; PCS list; PCS details (Base)
- References: Content Design Standards; Terms list; report template
