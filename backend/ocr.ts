import { exec, execSync } from 'node:child_process';
import { join, basename, dirname, extname } from 'node:path/posix';
import { isAbsolute } from 'node:path';
import fs from 'fs-extra';
import { OCRParameter, OCRResult } from '../types';
import { sleep } from '../utils';
import pdf2image from './pdf2image';
import { normalize } from './utils';
import sizeOf from 'image-size';

/**
 * db shufflenet v2 py
 * ppocr v3
 */
export default async function ocr({
  img,
  cache = true,
  pdf,
  page,
  cache_path,

  rec_model = 'ch_ppocr_mobile_v2.0',
  rec_backend = 'onnx',
  det_model = 'ch_PP-OCRv3_det',
  det_backend = 'onnx',
  resized_shape = 1496,
  box_score_thresh = 0.3,
  min_box_size = 10,
}: Partial<OCRParameter> & {
  cache?: boolean;
  cache_path?: string;
  img?: string;
  pdf?: string;
  page?: number; // start from 1
}): Promise<{
  ocr_results: OCRResult[];
  dimensions: { height: number; width: number };
}> {
  const target = pdf ? await pdf : img!;
  const abs_target_path = isAbsolute(target)
    ? target
    : join(normalize(__dirname), `../public/books/${target}`);

  const last_dirname = dirname(target).split('/').slice(-1);
  cache_path = cache_path
    ? cache_path!
    : (join(
        normalize(__dirname),
        `ocr_cache/${last_dirname}/${basename(target).replace(
          /[^\d]/g,
          '',
        )}.json`,
      ) as string);
  if (cache && (await fs.pathExists(cache_path!))) {
    return JSON.parse((await fs.readFile(cache_path)).toString());
  }
  if (!(await fs.pathExists(dirname(cache_path)))) {
    await fs.ensureDir(dirname(cache_path));
  }
  const abs_ocr_target = pdf
    ? await pdf2image({ pdf_path: abs_target_path, page: page! - 1 })
    : abs_target_path;
  const dimensions = sizeOf(abs_ocr_target);
  const ocr_command = `python backend/ocr.py ${abs_ocr_target} ${rec_model} ${rec_backend} ${det_model} ${det_backend} ${resized_shape} ${box_score_thresh} ${min_box_size}`;
  const raw = execSync(ocr_command).toString();

  const candidates: string[] = raw.split('\n');
  const t = JSON.parse(
    candidates[candidates.length - 2].replace(/"score": NaN\,/g, '"score": 0,'),
  );

  const res: {
    ocr_results: OCRResult[];
    dimensions: { height: number; width: number };
  } = {
    ocr_results: t.map((i: any) => ({
      text: i.text,
      box: i.position,
    })),
    dimensions: {
      height: dimensions.height!,
      width: dimensions.width!,
    },
  };

  pdf && (await fs.remove(abs_ocr_target));
  await fs.writeFile(cache_path!, JSON.stringify(res));

  return res;
}
