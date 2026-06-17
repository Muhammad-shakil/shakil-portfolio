import fs from 'node:fs';
import path from 'node:path';

const shellPath = path.join('dist', 'client', '_shell.html');
const indexPath = path.join('dist', 'client', 'index.html');
const fallbackPath = path.join('dist', 'client', '404.html');

if (fs.existsSync(shellPath)) {
  fs.copyFileSync(shellPath, indexPath);
  console.log(`Successfully copied ${shellPath} to ${indexPath}`);
  fs.copyFileSync(shellPath, fallbackPath);
  console.log(`Successfully copied ${shellPath} to ${fallbackPath}`);
} else {
  console.error(`Error: SPA shell file not found at ${shellPath}`);
  process.exit(1);
}
