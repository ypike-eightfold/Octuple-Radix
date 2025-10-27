# Content Design Evaluation

- Date (UTC): 2025-09-05T00-00-00Z
- Scope: TBD
- Evaluator: Agent
- Sources: content_design guidance documents; general best practices
- Version: 

## Scores

### Content Quality Score: **{{content_quality_score}}**
<!--
- Rating guidance:
  - 🟩 Great, World-class — Likely does not require content polish
  - 🟨 Good, Good enough — Might benefit from content polish
  - 🟧 Below standards — Would benefit from improving content design
  - 🟥 Blocker — Cannot ship
-->

### Response Confidence Score: **{{response_confidence_score}}**
<!--
- Scale: 1–5 (High = 5, Moderate = 3–4, Low = 1–2)
- Basis: see ../guidance documents/response_confidence_score instructions for custom Gem.md
- If score < 5, include clarifying questions and assumptions.
-->

## Findings (sorted by severity)
{{#each findings}}
- Title: {{title}}
- Location: {{location}}
- Severity: {{severity}} {{severity_color}}
- Evidence: {{evidence}}
- Why it matters: {{why_it_matters}}
- Recommendation: {{recommendation}}
{{/each}}


---
---


## Executive summary
{{summary}}

## Method
- Approach: {{approach}}
- Guidance: Abide by all relevant documents in ../guidance documents/. Cite all guidance used under "Sources" and in the appendix.
- Best practices: {{best_practices}}

## Recommendations summary
- Quick wins (≤ 1 day)
- Medium (≤ 1 week)
- Larger efforts (> 1 week)

## Severity scale
- 🔴 Severity 1 (Critical): Blocks key tasks or breaks compliance expectations.
- 🟠 Severity 2 (High): Major friction or frequent errors, high user impact.
- 🟡 Severity 3 (Medium): Noticeable issues, moderate impact or limited scope.
- 🟣 Severity 4 (Low): Minor issues, polish or edge cases.

## Appendix
- Screens evaluated
- References
  - ../guidance documents/Content quality framework for Gem OH.md
  - ../guidance documents/response_confidence_score instructions for custom Gem.md

