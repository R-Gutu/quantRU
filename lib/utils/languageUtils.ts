export function getIntroByLanguage(language: string) {
  switch (language) {
    case "ro":
      return '/ro/videos/intro-ro.mp4';
    case "ru":
      return '/ru/videos/intro-ru.mp4';
    default:
      return '/en/videos/intro-en.mp4';
  }
}