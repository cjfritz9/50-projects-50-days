import colorSchemes from '../models/ColorSchemes';

export const randomThemeSelector = () => {
  return colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
};
