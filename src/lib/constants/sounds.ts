export function PlayMagic() {
  // const url = "https://cdn.pixabay.com/audio/2021/08/09/audio_e2a6340055.mp3";
  const url =
    "https://cdn.pixabay.com/download/audio/2024/08/31/audio_8b8059137e.mp3";
  const audio = new Audio(url);
  audio.volume = 0.5;
  audio.play();
}
