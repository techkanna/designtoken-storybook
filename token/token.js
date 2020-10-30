const fetch = require("node-fetch");
require('dotenv').config()
const getPalette = require('./src/color');
const getFontStyles = require('./src/typo');
const _system = require('./src/write-in-file');

async function getFigmaObjTree(figmaApiKey, figmaId) {
  let figmaTreeStructure;
  try {
    let result = await fetch("https://api.figma.com/v1/files/" + figmaId, {
      method: "GET",
      headers: {
        "X-Figma-Token": figmaApiKey
      }
    });

    figmaTreeStructure = await result.json();
  } catch (err) {
    console.log(err);
  }

  const stylesArtboard = figmaTreeStructure.document.children.filter(item => {
    return item.name === "styles";
  })[0].children;

  baseTokeensJSON = {
    token: {
      grids: {},
      spacers: {},
      colors: {},
      fonts: {}
    }
  };

  Object.assign(baseTokeensJSON.token.colors, getPalette(stylesArtboard));
  Object.assign(baseTokeensJSON.token.fonts, getFontStyles(stylesArtboard));

  _system._writeInFile(baseTokeensJSON);
}

getFigmaObjTree(process.env.FIGMAAPIKEY, process.env.FIGFILEID);
