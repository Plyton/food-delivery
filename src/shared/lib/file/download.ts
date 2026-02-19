function createLink(href: string, fileName: string): void {
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName.replace(/\.(?=.*\.)/g, '_');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function downloadBlob(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  createLink(url, fileName);
  URL.revokeObjectURL(url);
}

export function downloadBase64(base64String: string, fileName: string): void {
  createLink(base64String, fileName);
}
