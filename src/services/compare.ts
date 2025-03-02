import fs from 'node:fs';
import path from 'node:path';

function compareDirectories(dir1: string, dir2: string, ignorePaths: string[] = []): void {
  const shouldIgnore = (filePath: string) => {
    return ignorePaths.some(ignorePath => filePath.startsWith(ignorePath));
  };

  const files1 = fs.readdirSync(dir1).filter(file => !shouldIgnore(path.join(dir1, file)));
  const files2 = fs.readdirSync(dir2).filter(file => !shouldIgnore(path.join(dir2, file)));

  const allFiles = new Set([...files1, ...files2]);

  allFiles.forEach(file => {
    const filePath1 = path.join(dir1, file);
    const filePath2 = path.join(dir2, file);

    const existsInDir1 = fs.existsSync(filePath1);
    const existsInDir2 = fs.existsSync(filePath2);

    if (existsInDir1 && existsInDir2) {
      const content1 = fs.readFileSync(filePath1, 'utf-8');
      const content2 = fs.readFileSync(filePath2, 'utf-8');

      if (content1 === content2) {
        console.log(`File ${file} is identical in both directories.`);
      } else {
        console.log(`File ${file} differs between directories.`);
      }
    } else if (existsInDir1) {
      console.log(`File ${file} exists only in ${dir1}.`);
    } else {
      console.log(`File ${file} exists only in ${dir2}.`);
    }
  });
}

// Example usage:
const dir1 = 'path/to/first/directory';
const dir2 = 'path/to/second/directory';
const ignorePaths = ['path/to/first/directory/', 'path/to/second/ignoreFile2.txt'];
compareDirectories(dir1, dir2, ignorePaths);