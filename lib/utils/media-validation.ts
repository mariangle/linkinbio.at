export function isValidURL(url: string) {
  const urlRegex = /^(?:https?):\/\/[\w-]+(?:\.[\w-]+)+[\w.,@?^=%&:/~+#-]*$/;
  return urlRegex.test(url);
}

export function isValidMedia(url: string) {
  return isValidURL(url) && /\.(jpg|jpeg|png|gif|mp4)/i.test(url);
}

export function isValidVideo(url: string) {
  return url.endsWith(".mp4");
}

export function getExtensionFromURL(url: string): string {
  // Use a regular expression to match the file extension in the URL
  const match = url.match(/\.(jpg|jpeg|png|gif|mp4)$/i);

  // If a match is found, return the extension with a dot prefix, otherwise return an empty string
  return match ? match[0] : "";
}
