const styleSheet = document.styleSheets[0];

let headingOpacity = styleSheet.cssRules[2].style.opacity;

console.log(headingOpacity);
headingOpacity = headingOpacity + 0.2;
console.log(headingOpacity)

console.log(styleSheets.cssRules[2])

let typeHeadingOpacity = styleSheets.cssRules[2].styleMap.get("opacity").value;
console,log(typeHeadingOpacity)
typeHeadingOpacity = typeHeadingOpacity + 0.2;
console.log(typeHeadingOpacity)