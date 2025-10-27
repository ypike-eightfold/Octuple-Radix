// scripts/sync_tokens.ts

import * as fs from 'fs';
import * as path from 'path';

// --- Configuration ---
// IMPORTANT: Adjust this path to point to the root of your actual Octuple design system repository
const octupleRepoPath = path.resolve(__dirname, '../../../octuple'); // Example: Assumes octuple repo is a sibling to your current project folder

/**
 * This array maps the source-of-truth token files from your design system's
 * codebase to the destination JSON files that the AI will consume.
 * Add or remove objects here as your token structure changes.
 */
const tokenMappings = [
  { source: path.join(__dirname, '../tokens/colors.ts'), destination: path.join(__dirname, '../tokens/colors.json') }
];

const themesSource = path.join(__dirname, '../../octuple/src/components/ConfigProvider/Theming/themes.ts');
const tokensDir = path.join(__dirname, '../tokens');

// --- Main Function ---
function syncTokens() {
  console.log('Starting token synchronization...');

  tokenMappings.forEach(mapping => {
    try {
      // Check if the source file exists before trying to read it
      if (!fs.existsSync(mapping.source)) {
        console.warn(`Source file not found, skipping: ${mapping.source}`);
        return;
      }

      console.log(`Processing ${mapping.source}...`);

      // 1. Read the source TypeScript file
      const fileContent = fs.readFileSync(mapping.source, 'utf8');

      // 2. Extract the token object using a robust regular expression for multiline objects.
      // This regex looks for a pattern like "export const colors = { ... };" and captures everything between the first { and the last } before the semicolon.
      const match = fileContent.match(/export const \w+ = (\{[\s\S]*?\});/m);
      if (!match || !match[1]) {
        console.error(`Could not find an exported token object in ${mapping.source}`);
        return;
      }

      // 3. Convert the matched string to a JSON object.
      // NOTE: Using 'eval' is a shortcut for this controlled environment.
      // For a production-grade pipeline, using a proper AST parser like Babel or ts-morph would be more robust.
      const tokenObject = eval('(' + match[1] + ')');

      // 4. Write the object to the destination JSON file, formatted for readability.
      fs.writeFileSync(mapping.destination, JSON.stringify(tokenObject, null, 2), 'utf8');

      console.log(`Successfully synced tokens to ${mapping.destination}`);

    } catch (error) {
      console.error(`Failed to process ${mapping.source}:`, error);
    }
  });

  console.log('Token synchronization complete.');
}

function extractAllThemes() {
  if (!fs.existsSync(themesSource)) {
    console.error(`Themes source file not found: ${themesSource}`);
    return;
  }

  const fileContent = fs.readFileSync(themesSource, 'utf8');

  // Extract themeDefaults first
  const defaultsMatch = fileContent.match(/export const themeDefaults(?::\s*\w+)?\s*=\s*(\{[\s\S]*?\});/m);
  let themeDefaults = {};
  if (defaultsMatch && defaultsMatch[1]) {
    themeDefaults = eval('(' + defaultsMatch[1] + ')');
  }

  // Prepare a context for referenced themes
  const context: Record<string, any> = { themeDefaults };

  // First pass: extract and evaluate all themes, but skip those that reference other themes
  const themeRegex = /export const (\w+)(?::\s*\w+)?\s*=\s*(\{[\s\S]*?\}|\.\.\.(\w+));/gm;
  let match;
  let pending: Array<{ name: string; objectString: string; ref?: string }> = [];
  while ((match = themeRegex.exec(fileContent)) !== null) {
    const name = match[1];
    if (name === 'themeDefaults') continue;
    if (match[2].startsWith('...')) {
      // This theme references another theme (e.g., ...blueViolet)
      pending.push({ name, objectString: match[2], ref: match[3] });
      continue;
    }
    try {
      const themeObject = eval('(function(themeDefaults){return ' + match[2] + ';})')(themeDefaults);
      context[name] = themeObject;
      const outPath = path.join(tokensDir, `${name}.json`);
      fs.writeFileSync(outPath, JSON.stringify(themeObject, null, 2), 'utf8');
      console.log(`Extracted theme '${name}' to ${outPath}`);
    } catch (err) {
      console.error(`Failed to extract theme '${name}':`, err);
    }
  }
  // Second pass: resolve themes that reference others
  for (const item of pending) {
    if (item.ref && context[item.ref]) {
      // Directly assign a deep clone of the referenced theme
      const themeObject = JSON.parse(JSON.stringify(context[item.ref]));
      context[item.name] = themeObject;
      const outPath = path.join(tokensDir, `${item.name}.json`);
      fs.writeFileSync(outPath, JSON.stringify(themeObject, null, 2), 'utf8');
      console.log(`Extracted referenced theme '${item.name}' to ${outPath}`);
    } else {
      console.error(`Failed to extract referenced theme '${item.name}': reference '${item.ref}' not found.`);
    }
  }
  console.log('Theme extraction complete.');
}

// --- Run the script ---
syncTokens();
extractAllThemes();