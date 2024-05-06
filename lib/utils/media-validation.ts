export function isValidURL(url: string) {
  const urlRegex = /^(?:https?):\/\/[\w-]+(?:\.[\w-]+)+[\w.,@?^=%&:/~+#-]*$/;
  return urlRegex.test(url);
}

export function isValidImage(url: string) {
  return (
    isValidURL(url) &&
    (url.includes(".jpg") ||
      url.includes(".png") ||
      url.includes(".jpeg") ||
      url.endsWith(".gif"))
  );
}
export function isValidVideo(url: string) {
  return url.endsWith(".mp4");
}
