 - Date (UTC): {{date_utc}}
 - Scope: {{scope}}
 - Evaluator: {{evaluator}}
 - Sources: {{sources}}
 - Version: {{version}}

## Scores

### Content Quality Score: **{{content_quality_score}}**  
<!--
- Rating guidance:
  - 🟢 Great, World-class — Likely does not require content polish
  - 🟡 Good, Good enough — Might benefit from content polish
  - 🟠 Below standards — Would benefit from improving content design
  - 🔴 Blocker — Cannot ship
-->

### Response Confidence Score: **{{response_confidence_score}}**  
<!--
- Scale: 1–5 (High = 5, Moderate = 3–4, Low = 1–2)  
- Basis: see [response_confidence_score instructions for custom Gem](./response_confidence_score%20instructions%20for%20custom%20Gem.md).  
- If score < 5, include clarifying questions and assumptions.
-->

## Findings (sorted by severity)
{{#each findings}}
- Title: {{title}}
- Location: {{location}}
- Severity: {{severity}}
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
- Guidance: {{guidance}}  
  - Abide by all relevant documents in this folder. Cite all guidance used under "Sources" and in the appendix.  
- Best practices: {{best_practices}}

## Recommendations summary
- Quick wins (≤ 1 day)
- Medium (≤ 1 week)
- Larger efforts (> 1 week)

## Appendix
- Screens evaluated
- References
  - [Content quality framework for Gem OH](./Content%20quality%20framework%20for%20Gem%20OH.md)
  - [response_confidence_score instructions for custom Gem](./response_confidence_score%20instructions%20for%20custom%20Gem.md)

