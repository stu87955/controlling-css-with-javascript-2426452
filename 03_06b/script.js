const styleSheet = document.styleSheets[0];

console.log(styleSheet.cssRules[2]);

let maxInlineValue = styleSheets.cssRules[2].styleMap.get("max-inline-size").value;
let maxInlineUnit = styleSheets.cssRules[2].styleMap.get("max-inline-size").value;

console.log(`maxInlineValue = ${maxInlineValue}, maxInlineUnit = ${maxInlineUnit} `)

styleSheets.cssRules[2].styleMap.set("max-inline-size", `${maxInlineValue * 2}${maxInlineUnit}`)
console.log(styleSheets.cssRules[2].style.maxInlineSize)

