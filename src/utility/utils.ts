export const loadSvg = (filename: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = `assets/${filename}.svg`;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load SVG: ${filename}`));
  });
};
