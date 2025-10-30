Component: SkillTag
Overview
The SkillTag is a smaller, more compact representation of a skill, designed for use in spaces where a full SkillBlock would be too large, such as inside cards or as filter tags. SkillTags of medium size or larger can contain a single action button.    

When to Use
Use in lists or cards to display a list of associated skills.    

Use as filter tags for searching or sorting by skills.    

Best Practices
Use smaller sizes (xsmall, small) for purely informational tags.    

Use medium or large sizes if you need to include a removable button or other interaction.    

Use the status and assessment props consistently to convey meaning.    

Key Properties (API Highlights)
label: (string) The name of the skill.    

size: ('xsmall', 'small', 'medium', 'large') The size of the tag. Default: medium.    

status: ('default', 'highlight', 'match') The visual status of the skill. Default: default.    

assessment: ('below', 'meet', 'exceed', etc.) The assessment status, which applies a specific color theme.    

removable: (boolean) If true, a remove button is shown. Default: false.    

onRemove: (function) Callback fired when the remove button is clicked.    

clickable: (boolean) Whether the tag is clickable.    

dropdownProps / popupProps / tooltipProps: (object) Props to attach a Dropdown, Popup, or Tooltip to the tag.    

lineClamp: (number) Maximum number of lines for the label before truncation.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Skill/SkillTag.tsx