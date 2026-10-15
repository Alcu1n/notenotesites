import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const files = [...new Set(execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], {encoding:'utf8'}).split('\0').filter(file => file && existsSync(file) && (/^(app|components|lib|public|tests|scripts)\//.test(file) || ['package.json','package-lock.json','tsconfig.json','eslint.config.mjs','playwright.config.ts'].includes(file))))].sort();
const hash = createHash('sha256');
for (const file of files) hash.update(file).update('\0').update(readFileSync(file)).update('\0');
console.log(JSON.stringify({baseCommit:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),worktreeSourceSha256:hash.digest('hex'),fileCount:files.length,files,node:process.version,preview:process.argv[2]||null},null,2));
