// PDF processing utilities using pdf-lib (client-side only)

export interface ProcessingResult {
  success: boolean;
  data?: Uint8Array;
  error?: string;
  outputName?: string;
}

export interface FileWithData {
  name: string;
  size: number;
  data: Uint8Array;
}

// Format bytes to human readable
export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

// Merge multiple PDFs
export async function mergePdfs(files: FileWithData[]): Promise<ProcessingResult> {
  try {
    const { PDFDocument } = await import("pdf-lib");
    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const pdf = await PDFDocument.load(file.data);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach((page) => mergedPdf.addPage(page));
    }

    const pdfBytes = await mergedPdf.save();
    return {
      success: true,
      data: pdfBytes,
      outputName: "merged.pdf",
    };
  } catch (e: unknown) {
    return { success: false, error: (e as Error).message };
  }
}

// Compress PDF
export async function compressPdf(file: FileWithData): Promise<ProcessingResult> {
  try {
    const { PDFDocument } = await import("pdf-lib");
    const pdf = await PDFDocument.load(file.data);

    // Optimize the PDF
    const pdfBytes = await pdf.save({
      useObjectStreams: true,
      addDefaultPage: false,
    });

    return {
      success: true,
      data: pdfBytes,
      outputName: file.name.replace(/\.pdf$/i, "_compressed.pdf"),
    };
  } catch (e: unknown) {
    return { success: false, error: (e as Error).message };
  }
}

// Split PDF - extract pages
export async function splitPdf(
  file: FileWithData,
  pageRanges: { start: number; end: number }[]
): Promise<ProcessingResult> {
  try {
    const { PDFDocument } = await import("pdf-lib");
    const pdf = await PDFDocument.load(file.data);
    const totalPages = pdf.getPageCount();

    const mergedPdf = await PDFDocument.create();

    for (const range of pageRanges) {
      const start = Math.max(1, range.start);
      const end = Math.min(totalPages, range.end);
      for (let i = start - 1; i < end; i++) {
        const [page] = await mergedPdf.copyPages(pdf, [i]);
        mergedPdf.addPage(page);
      }
    }

    const pdfBytes = await mergedPdf.save();
    return {
      success: true,
      data: pdfBytes,
      outputName: `extracted_pages.pdf`,
    };
  } catch (e: unknown) {
    return { success: false, error: (e as Error).message };
  }
}

// Rotate PDF pages
export async function rotatePdf(
  file: FileWithData,
  rotation: 90 | 180 | 270,
  pageIndices?: number[]
): Promise<ProcessingResult> {
  try {
    const { PDFDocument, degrees } = await import("pdf-lib");
    const pdf = await PDFDocument.load(file.data);
    const pages = pdf.getPages();

    const indicesToRotate = pageIndices ?? pages.map((_, i) => i);

    for (const idx of indicesToRotate) {
      if (idx >= 0 && idx < pages.length) {
        const page = pages[idx];
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees((currentRotation + rotation) % 360));
      }
    }

    const pdfBytes = await pdf.save();
    return {
      success: true,
      data: pdfBytes,
      outputName: file.name.replace(/\.pdf$/i, "_rotated.pdf"),
    };
  } catch (e: unknown) {
    return { success: false, error: (e as Error).message };
  }
}

// Watermark PDF with text
export async function watermarkPdfText(
  file: FileWithData,
  text: string,
  options: {
    opacity?: number;
    fontSize?: number;
    rotation?: number;
    position?: "center" | "diagonal" | "tile";
    color?: string;
  } = {}
): Promise<ProcessingResult> {
  try {
    const {
      PDFDocument,
      rgb,
      degrees,
      StandardFonts,
    } = await import("pdf-lib");

    const {
      opacity = 0.15,
      fontSize = 48,
      rotation = -45,
      position = "diagonal",
      color = "#888888",
    } = options;

    const pdf = await PDFDocument.load(file.data);
    const pages = pdf.getPages();
    const font = await pdf.embedFont(StandardFonts.HelveticaBold);

    // Parse hex color
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    for (const page of pages) {
      const { width, height } = page.getSize();

      if (position === "diagonal") {
        page.drawText(text, {
          x: width / 4,
          y: height / 2,
          size: fontSize,
          font,
          color: rgb(r, g, b),
          opacity,
          rotate: degrees(rotation),
        });
      } else if (position === "center") {
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        page.drawText(text, {
          x: (width - textWidth) / 2,
          y: (height - fontSize) / 2,
          size: fontSize,
          font,
          color: rgb(r, g, b),
          opacity,
        });
      } else if (position === "tile") {
        // Tile watermarks across the page
        const spacing = 200;
        for (let y = 0; y < height + spacing; y += spacing) {
          for (let x = 0; x < width + spacing * 2; x += spacing * 2) {
            page.drawText(text, {
              x,
              y,
              size: fontSize * 0.7,
              font,
              color: rgb(r, g, b),
              opacity: opacity * 0.7,
              rotate: degrees(rotation),
            });
          }
        }
      }
    }

    const pdfBytes = await pdf.save();
    return {
      success: true,
      data: pdfBytes,
      outputName: file.name.replace(/\.pdf$/i, "_watermarked.pdf"),
    };
  } catch (e: unknown) {
    return { success: false, error: (e as Error).message };
  }
}

// Extract text from PDF
export async function extractText(file: FileWithData): Promise<{ success: boolean; text?: string; error?: string }> {
  try {
    // Use pdf.js for text extraction since pdf-lib doesn't support it
    const pdfjsLib = await import("pdfjs-dist");

    // Set worker
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

    const doc = await pdfjsLib.getDocument({ data: file.data.slice(0) }).promise;
    let fullText = "";

    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items
        .map((item: unknown) => (item as { str: string }).str)
        .join(" ");
      fullText += `--- Page ${i} ---\n${pageText}\n\n`;
    }

    return { success: true, text: fullText };
  } catch (e: unknown) {
    return { success: false, error: (e as Error).message };
  }
}

// Download helper
export function downloadBytes(data: Uint8Array, filename: string) {
  const blob = new Blob([new Uint8Array(data)], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Read file as ArrayBuffer then convert to Uint8Array
export function readFileAsBytes(file: File): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (result instanceof ArrayBuffer) {
        resolve(new Uint8Array(result));
      } else {
        reject(new Error("Failed to read file"));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(file);
  });
}
