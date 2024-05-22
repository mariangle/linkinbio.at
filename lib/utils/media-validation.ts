export function isValidURL(url: string) {
  const urlRegex = /^(?:https?):\/\/[\w-]+(?:\.[\w-]+)+[\w.,@?^=%&:/~+#-]*$/;
  return urlRegex.test(url);
}

export function isValidImage(url: string) {
  return isValidURL(url) && /\.(jpg|jpeg|png|gif|mp4)/i.test(url);
}
export function isValidVideo(url: string) {
  return url.endsWith(".mp4");
}
