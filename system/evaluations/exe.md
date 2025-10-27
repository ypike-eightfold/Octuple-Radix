## Evaluations - Instructions

### Purpose
- **Goal**: Define how to run three evaluations for this app and how to structure, name, and store the resulting reports.
- **Evaluations**: `content_design`, `heuristic`, `a11y` (accessibility).

### Information architecture
```text
evaluations/
  content_design/
    guidance documents/
    reports/
  heuristic/
    guidance documents/
    reports/
  a11y/
    guidance documents/
    reports/
```

- **`guidance documents/`**: Put any evaluation-specific guidelines here (beyond general best practices). If this folder is empty or missing, use general best practices for that evaluation type.
- **`reports/`**: All generated evaluation outputs are saved here.

### Primary commands (agent triggers)
- **run content evaluation**
- **run heuristic evaluation**
- **run a11y evaluation**

Also recognize the following synonyms:
- **content**: "run content assessment"
- **a11y**: "run accessibility evaluation", "run accessibility assessment"
- **heuristic**: "run heuristic assessment"

### What happens when a command runs
1. **Assess using best practices** for the selected evaluation type.
2. **Include any specific rules** found in that evaluation's `guidance documents/` directory.
3. **Create a new Markdown report** in the corresponding `reports/` folder.
4. **File naming**: `{type}-evaluation-{timestamp}.md`
   - `type` ∈ `content`, `heuristic`, `a11y`
   - `timestamp` format: `YYYY-MM-DDTHH-mm-ssZ` (UTC, zero-padded, hyphenated) to ensure lexicographic sort order.
   - Example: `content-evaluation-2025-09-04T14-23-58Z.md`
5. **Formatting**: Use the templates below. Keep formatting consistent for each type across all reports.

### Common report header (all types)
Include this header at the top of every report.

```markdown
# {Evaluation Type} Evaluation

- Date (UTC): {YYYY-MM-DDTHH-mm-ssZ}
- Scope: {app area(s) assessed}
- Evaluator: {name or agent}
- Sources: {list guidance docs and best-practices references used}
- Version: {optional version of app or commit SHA}
```

### Severity scale (use across all types)
- **Severity 1 (Critical)**: Blocks key tasks or breaks compliance expectations.
- **Severity 2 (High)**: Major friction or frequent errors, high user impact.
- **Severity 3 (Medium)**: Noticeable issues, moderate impact or limited scope.
- **Severity 4 (Low)**: Minor issues, polish or edge cases.

---

### Content design report template
```markdown
## Executive summary
Brief overview of overall content quality, key strengths, and top prioritized issues.

## Method
- Approach: {heuristics, frameworks}
- Guidance: {list guidance docs if any}
- Best practices: {summarize core standards}

## Findings
For each issue:
- Title: {concise problem statement}
- Location: {screen/flow/URL}
- Severity: {1-4}
- Evidence: {example copy, screenshots if available}
- Why it matters: {impact on comprehension/UX}
- Recommendation: {clear, actionable rewrite or pattern}

## Recommendations summary
- Quick wins (≤ 1 day)
- Medium (≤ 1 week)
- Larger efforts (> 1 week)

## Appendix
- Full list of evaluated screens
- References to guidance documents and standards
```

### Heuristic evaluation report template
```markdown
## Executive summary
Overall usability status and top issues.

## Method
- Framework: Nielsen’s 10 heuristics (or specified alternative)
- Guidance: {list guidance docs if any}

## Findings by heuristic
Repeat per heuristic (e.g., Visibility of system status, Match with real world, etc.):
- Issue: {concise description}
- Location: {screen/flow/URL}
- Severity: {1-4}
- Evidence: {steps, screenshots if available}
- Recommendation: {action}

## Cross-cutting recommendations
Prioritized roadmap with rationale.

## Appendix
- Heuristic checklist and notes
- References
```

### Accessibility (a11y) evaluation report template
```markdown
## Executive summary
Overall a11y conformance and highest-risk items.

## Method
- Standards: WCAG 2.2 (A/AA) unless otherwise specified
- Tools: {screen reader, color contrast tools, keyboard-only, etc.}
- Guidance: {list guidance docs if any}

## Findings by success criterion
Repeat per relevant SC:
- SC: {e.g., 1.4.3 Contrast (Minimum)}
- Location: {screen/flow/URL}
- Severity: {1-4}
- Evidence: {observed behavior, screenshots, code snippets if needed}
- Recommendation: {fix description}

## Conformance and prioritization
- Summary of pass/fail by SC
- Highest-priority remediations and owners

## Appendix
- Test setup and environment
- References to WCAG and tooling
```

### Guidance document usage
- If present, guidance documents take precedence over general best practices where they are more specific.
- Cite all guidance documents used in the report header under "Sources" and in the appendix.

### Output requirements recap
- **Always** write reports to the appropriate `reports/` directory for the evaluation type.
- **Always** use the naming convention `{type}-evaluation-{YYYY-MM-DDTHH-mm-ssZ}.md`.
- **Always** apply the corresponding template and the common header.
- **Always** include references to any `guidance documents/` used.

