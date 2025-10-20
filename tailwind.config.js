// tailwind.config.js
module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "canopy-green": "#014038",
      "meadow-mist": "#96BAA0",
      "sky-bloom": "#BDD4DA",
      "sunlit-petal": "#F0C06D",
      "cloudy-gray": "#F7F7F7",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "canopy-green": "#014038",
      "meadow-mist": "#96BAA0",
      "sky-bloom": "#BDD4DA",
      "sunlit-petal": "#F0C06D",
      "cloudy-gray": "#F7F7F7",
      "detritus-green": "#00231C",
    }),
    extend: {
      backgroundImage: {
        "maple-bg": "url('/img/Client1_MapleTree.png')",
        "apple-bg": "url('/img/Client1_AppleTree.png')",
      },
    },
  },
};
