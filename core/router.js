export function route(prompt) {
  if (prompt.match(/draw|image|picture|generate image/i)) {
    return "image";
  }
  if (prompt.match(/code|function|class|script/i)) {
    return "code";
  }
  return "chat";
}
