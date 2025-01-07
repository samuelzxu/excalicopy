export function playAudio(base64Audio: string) {
  const byteString = atob(base64Audio.split(",")[1]); // Decode base64
  if (!byteString) {
    return false;
  }
  const mimeMatch = base64Audio.split(",")[0].match(/:(.*?);/);
  if (!mimeMatch) {
    return false;
  }
  const mimeString = mimeMatch[1]; // Now TypeScript knows this is safe

  // Create a Uint8Array and populate it with the binary data
  const arrayBuffer = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    arrayBuffer[i] = byteString.charCodeAt(i);
  }

  // Create a Blob from the binary data and MIME type
  const blob = new Blob([arrayBuffer], { type: mimeString });

  // Create an object URL from the Blob
  const url = URL.createObjectURL(blob);

  // Automatically play the audio
  const audio = new Audio(url);
  audio.play();
}
