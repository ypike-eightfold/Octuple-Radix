Component: SkillBlock
Overview
The SkillBlock is a specialized component used exclusively to represent skills. It combines visual treatments from the Card and Tag components to create a unique and consistent representation for skills across all products.    

When to Use
Use to display a skill with associated metadata, actions, or assessment status.    

Use in profiles, job descriptions, or search results to highlight specific skills.    

Best Practices
Use the status and assessment props to visually communicate the state of the skill (e.g., 'match', 'highlight', 'below', 'exceed').    

Use the expandable prop with expandedContent to show additional details without cluttering the initial view.    

Leverage the menuItems prop for secondary actions to keep the UI clean.    

Key Properties (API Highlights)
label: (string) The name of the skill.    

status: ('default', 'highlight', 'match') The visual status of the skill. Default: default.    

assessment: ('below', 'meet', 'exceed', 'upskilling', etc.) The assessment status, which applies a specific color theme.    

theme: (OcThemeName | SkillThemeName) The color theme of the skill. Default: white.    

expandable: (boolean) If true, the skill block can be expanded to show more content.    

expandedContent: (ReactNode) The content to show when the block is expanded.    

menuItems: (Array   

endorsement: (boolean) Whether the skill is endorsed.    

required: (boolean) Whether the skill is marked as required.    

onClick: (function) Callback fired on click.    

https://github.com/EightfoldAI/octuple/blob/main/src/components/Skill/SkillBlock.tsx