console.log("main.js linked!");

import { Game } from "./Game";

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("pixi-container");
  const game = appElement ? new Game(appElement) : null;

  // Handle cleanup on window unload
  window.addEventListener("unload", () => {
    if (game) game.destroy();
  });
});
