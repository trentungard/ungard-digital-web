const colors = require('./tokens/colors');
const fontSize = require('./tokens/fontSize');
const spacing  = require('./tokens/spacing');

module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url(../public/hero-img.jpg)",
        'articles-headline': 'url(../public/articles-headline.jpg)'
      },
      colors: colors.colors,
      spacing: spacing.spacing,
      fontSize: fontSize.fontSize,
    },
  }
};
