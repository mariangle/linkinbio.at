export function isValidUrl(url: string) {
  return url.startsWith("https://");
}

export function isValidImage(url: string) {
  return (
    isValidUrl(url) &&
    (url.includes(".jpg") ||
      url.includes(".png") ||
      url.includes(".jpeg") ||
      url.endsWith(".gif"))
  );
}
export function isValidVideo(url: string) {
  return url.endsWith(".mp4");
}
