import type { VercelRequest, VercelResponse } from '@vercel/node';
import JSZip from 'jszip';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { files } = req.body; // files: { filename: string, content: string }[]
  const zip = new JSZip();
  if (Array.isArray(files)) {
    for (const f of files) {
      zip.file(f.filename, f.content);
    }
  } else {
    zip.file('readme.txt', 'No files provided');
  }
  const buffer = await zip.generateAsync({ type: 'nodebuffer' });
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', 'attachment; filename=export.zip');
  res.send(buffer);
}
