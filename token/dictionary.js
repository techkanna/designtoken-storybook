const StyleDictionary = require("style-dictionary").extend({
  source: ["token/docs/output.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "src/scss/variables/",
      files: [
        {
          destination: "_colors.scss",
          format: "scss/variables",
          filter: {
            type: "color"
          }
        },
        {
          destination: "_typography.scss",
          format: "scss/variables",
          filter: {
            type: "typography"
          }
        }
      ]
    }
  }
});

StyleDictionary.buildAllPlatforms();
console.log("done!");