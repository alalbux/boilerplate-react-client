// style-dictionary.config.js
module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "build/",
      files: [
        {
          format: "scss/variables",
          destination: "_variables.scss",
        },
      ],
    },
  },
};
