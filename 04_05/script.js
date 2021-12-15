const hue = document.querySelector("#hue");
const saturation = document.querySelector("#saturation");
const lightness = document.querySelector("#lightness");
const alpha = document.querySelector("#alpha");
const colorSwatch = document.querySelector(".color-swatch");

const rootRules = document.styleSheets[0].cssRules[0];

/**
 * @param {string} lightness 
 */
const bw = (lightness) => {
  if (lightness < 50) {
    colorSwatch.style.color = "white";
  } else {
    colorSwatch.style.color = "black";
  }
};

/**
 
 @param {string} prop 
 @param {string} value 
 */
const updateDisplay = (prop, value) => {

  rootRules.style.setProperty(`--${prop}`, value);

  if (prop === "lightness") {
    bw(value);
  }

  const currentColors = window.getComputedStyle(colorSwatch);

  let hue = prop === "hue" ? value : currentColors.getPropertyValue("--hue");
  let saturation =
    prop === "saturation"
      ? value
      : currentColors.getPropertyValue("--saturation");
  let lightness =
    prop === "lightness"
      ? value
      : currentColors.getPropertyValue("--lightness");
  let alpha =
    prop === "alpha" ? value : currentColors.getPropertyValue("--alpha");


  colorSwatch.innerHTML = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha});`;
};

hue.addEventListener("input", () => {
  updateDisplay("hue", hue.value);
});

saturation.addEventListener("input", () => {
  updateDisplay("saturation", saturation.value);
});

lightness.addEventListener("input", () => {
  updateDisplay("lightness", lightness.value);
});

alpha.addEventListener("input", () => {
  let alphaValue = parseInt(alpha.value) / 100;
  updateDisplay("alpha", alphaValue);
});
