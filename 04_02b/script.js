const listItem = document.querySelector(".animals li:nth-child(6) a");
console.log(listItem.style.cssText);
listItem.style.setProperty("--color", "skyblue");
console.log(listItem.style.cssText);

const styleSheet = document.styleSheets[0];
console.log(styleSheet.cssRules[0].style.cssText)
styleSheets.cssRules[0].style.setProperty("--border-coler", "hrl(53, 100%, 50%)")
console.log(styleSheet.cssRules[0].style.cssText)