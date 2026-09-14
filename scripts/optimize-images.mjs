import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const INPUT_DIR = '.images'
const OUTPUT_DIR = 'src/assets/projects'
const MAX_WIDTH = 1600
const QUALITY = 80
const SUPPORTED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg'])

await mkdir(INPUT_DIR, { recursive: true })
await mkdir(OUTPUT_DIR, { recursive: true })

const files = (await readdir(INPUT_DIR)).filter((file) =>
  SUPPORTED_EXTENSIONS.has(path.extname(file).toLowerCase())
)

if (files.length === 0) {
  console.log(`No images found in ${INPUT_DIR}/`)
}

for (const file of files) {
  const name = path.basename(file, path.extname(file))
  const output = path.join(OUTPUT_DIR, `${name}.webp`)

  await sharp(path.join(INPUT_DIR, file))
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output)

  const { size } = await stat(output)
  console.log(`${file} -> ${output} (${Math.round(size / 1024)} KB)`)
}
