## How to Use the Evaluations Package

### What this is
- **Purpose**: Run three types of evaluations for your app and store consistent Markdown reports.
- **Types**: `content_design`, `heuristic`, `a11y` (accessibility).

### Ideal installation (recommended)
Add the uncompressed (unzipped) `evaluations` folder into your project's `system/` directory.

1. Unzip this package so the folder name is `evaluations/`.
2. Move it into your project here: `Project/system/evaluations/`.
3. Ensure the structure looks like this:

```text
system/
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

If your project does not have a `system/` folder, create it first.

### Optional setup: guidance documents
- Place any evaluation-specific rules or checklists inside each evaluation’s `guidance documents/` folder.
- If no guidance docs are present, the agent uses general best practices for that evaluation type.
- Functional leads (Content Design, UXR, Design Systems) should be managing guidance documents.

### How to run evaluations (agent commands)
In your agent chat or command interface, use one of the following:

```text
run content evaluation
run heuristic evaluation
run a11y evaluation
```

Recognized synonyms:
- Content: `run content assessment`, `run content eval`
- Accessibility: `run accessibility evaluation`, `run accessibility assessment`, `run accessibility eval`, `run a11y eval`
- Heuristic: `run heuristic assessment`, `run heuristic eval`

### What happens when you run a command
- The agent assesses using best practices for the chosen evaluation type.
- It incorporates any relevant rules found in that evaluation’s `guidance documents/`.
- It generates a Markdown report in the corresponding `reports/` directory.
- **File naming**: `{type}-evaluation-{YYYY-MM-DDTHH-mm-ssZ}.md` (UTC). Examples:
  - `content-evaluation-2025-09-04T14-23-58Z.md`
  - `heuristic-evaluation-2025-09-04T14-23-58Z.md`
  - `a11y-evaluation-2025-09-04T14-23-58Z.md`
- Naming is designed to sort correctly by timestamp in long lists of reports.

### Report format
- Reports use consistent templates per evaluation type with a shared header and severity scale.
- For details on templates and structure, see `evaluations/exe.md`.

### Tips
- **Scope**: Be explicit in chat about what screen/flow to evaluate.
- **Evidence**: Provide URLs, screenshots, or copy snippets to improve findings quality.
- **Guidance**: Add or update files under `guidance documents/` for custom rules.

### Troubleshooting
- **No report created**: Confirm the `reports/` folder exists for the evaluation type.
- **Wrong location**: Ensure the folder is located at `Project/system/evaluations/`.
- **Naming issues**: Ensure your system clock/timezone doesn’t alter UTC formatting.
- **Custom rules not applied**: Verify files are in the correct `guidance documents/` directory and referenced content is readable.

### FAQ
- **Where are reports saved?** In the evaluation’s `reports/` folder, e.g., `system/evaluations/content_design/reports/`.
- **How do I add custom rules?** Put documents into the matching `guidance documents/` folder; they will be cited and used.
- **Can I rerun an evaluation?** Yes—each run creates a new timestamped report.

