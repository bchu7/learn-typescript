import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

/**
 * Create a folder item# and files index.ts, ITEM#.md
 * Usage: ts-node create item3
 */
namespace EffectiveTypescript {
  export function main(): void {
    // extract commandline, find arg 'item#'
    const [, , input] = process.argv;
    const match = input?.match(/^item(\d+)$/);

    if (!match) {
      console.error('Usage: ts-node create item<number>  (e.g. item3)');
      process.exit(1);
    }

    // 'item3' --> '3'
    const itemNumber = match[1].replace('item', '');

    const dir = `./src/item${itemNumber}`;
    const md = `ITEM${itemNumber}.md`;

    // Read README.md and extract the title line for this item number
    const thingsToRemember = '### Things to Remember';
    let title = '';    
    try {
      const readme = readFileSync('README.md', 'utf-8');
      const regex = new RegExp(`- Item ${itemNumber}: (.+)`);
      const found = readme.match(regex);
      if (found) {
        title = `## Item ${itemNumber}: ${found[1]}`;
      } else {
        title = `## Item ${itemNumber}: [Title not found in README]`;
      }
    } catch (err) {
      console.error('Error reading README.md:', err);
      process.exit(1);
    }

    // Create folder if needed
    if (!existsSync(dir)) {
      mkdirSync(dir);
    }

    // create files
    writeFileSync(join(dir, 'index.ts'), `// ${title}\n\nnamespace Item${itemNumber} {\n}`, { flag: 'w' });
    writeFileSync(join(dir, md), `${title}\n\n${thingsToRemember}\n`, { flag: 'w' });

    console.log(title);
  }
}

EffectiveTypescript.main();

