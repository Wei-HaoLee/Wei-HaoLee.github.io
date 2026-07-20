import sharp from 'sharp';
import { access, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const sourceDir = join(root, 'public/images/backgrounds');
const outputDir = join(root, 'public/images/gallery');
const sources = [
  'DSCF3038.JPG', 'DSCF3056.JPG', 'DSCF3084.JPG', 'DSCF3086.JPG',
  'DSCF3142.JPG', 'DSCF3221.JPG', 'DSCF3316.JPG', 'DSCF4186.JPG',
  'DSCF4221.JPG', 'DSCF4522.JPG', 'DSCF4861.JPG'
];

await mkdir(outputDir, { recursive: true });

for (const [index, filename] of sources.entries()) {
  const source = join(sourceDir, filename);
  await access(source);
  const output = join(outputDir, `photo-${String(index + 1).padStart(2, '0')}.jpg`);
  await sharp(source)
    .rotate()
    .resize({ width: 1800, withoutEnlargement: true, fit: 'inside' })
    .jpeg({ quality: 82, progressive: true, chromaSubsampling: '4:2:0' })
    .toFile(output);
}
