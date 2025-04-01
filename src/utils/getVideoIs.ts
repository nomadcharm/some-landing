export const getVideoId = (url: string): string | null => {
  const regex : RegExp= /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
  const match: RegExpMatchArray | null = url.match(regex);
  return match ? match[1] : null;
};