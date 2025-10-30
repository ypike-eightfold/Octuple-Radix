// scripts/parse_props.ts

import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'react-docgen-typescript';

// --- Configuration ---
const octupleRepoPath = path.resolve(__dirname, '../../octuple'); // Adjusted path
const componentsSourceDir = path.join(octupleRepoPath, 'src/components');
const contextComponentsDir = path.join(__dirname, '../components');

// --- Helper Function to Format Props into a Markdown Table ---
function formatPropsToMarkdown(props: any): string {
  let table = '| Property | Type | Default | Description |\n';
  table += '|:---|:---|:---|:---|\n';

  for (const propName in props) {
    const prop = props[propName];
    const name = `\`${propName}\``;
    const type = prop.type? `\`${prop.type.name.replace(/\|/g, '\\|')}\`` : '';
    const defaultValue = prop.defaultValue? `\`${prop.defaultValue.value}\`` : '';
    const description = prop.description? prop.description.replace(/\n/g, ' ') : '';
    table += `| ${name} | ${type} | ${defaultValue} | ${description} |\n`;
  }
  return table;
}

// --- Main Function ---
async function parseComponentProps() {
  console.log('Starting component props parsing...');

  try {
    // 1. Get all component files from the Octuple source directory
    const componentFiles = fs.readdirSync(componentsSourceDir, { withFileTypes: true })
     .filter(dirent => dirent.isDirectory())
     .map(dirent => path.join(componentsSourceDir, dirent.name, `${dirent.name}.tsx`)); // Assumes ComponentName/ComponentName.tsx structure

    for (const filePath of componentFiles) {
      if (!fs.existsSync(filePath)) continue;

      const componentName = path.basename(filePath, '.tsx');
      console.log(`Parsing props for ${componentName}...`);

      // 2. Use react-docgen-typescript to parse the component file
      const docs = parse(filePath);
      if (!docs.length || !docs[0].props) {
        console.warn(`No props found for ${componentName}.`);
        continue;
      }

      // 3. Format the extracted props into a Markdown table
      const propsTable = formatPropsToMarkdown(docs[0].props);

      // 4. Read the corresponding.md file from the context kit
      const mdFilePath = path.join(contextComponentsDir, `${componentName}.md`);
      if (!fs.existsSync(mdFilePath)) {
        console.warn(`Markdown file not found for ${componentName} at ${mdFilePath}. Skipping.`);
        continue;
      }
      let mdContent = fs.readFileSync(mdFilePath, 'utf8');

      // 5. Replace the "Key Properties" section in the markdown file
      // This regex looks for the "Key Properties" heading and replaces everything until the next heading or end of file.
      const regex = /(## Key Properties \(API Highlights\))([\s\S]*?)(?=\n## |$)/;
      if (mdContent.match(regex)) {
        mdContent = mdContent.replace(regex, `$1\n\n${propsTable}`);
        fs.writeFileSync(mdFilePath, mdContent, 'utf8');
        console.log(`Successfully updated props in ${mdFilePath}`);
      } else {
        console.warn(`Could not find "## Key Properties (API Highlights)" section in ${mdFilePath}.`);
      }
    }
  } catch (error) {
    console.error('An error occurred during props parsing:', error);
  }

  console.log('Component props parsing complete.');
}

// --- Run the script ---
parseComponentProps();