export const aaa = 'aaa';

export const hexIsBright = (color: string) => {
  const hex = color.replace('#', '');
  const rColor = parseInt(hex.substr(0, 2), 16);
  const gColor = parseInt(hex.substr(2, 2), 16);
  const bColor = parseInt(hex.substr(4, 2), 16);
  const brightness = ((rColor * 299) + (gColor * 587) + (bColor * 114)) / 1000;

  return brightness > 155 ? 'dark-content' : 'light-content';
};