const styleSheets = document.styleSheets;
console.log(styleSheets);

const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split("/").pop();
    if (pathName === "extra.css") {
      return styleSheet;
    }
  }
});
console.log(targetSheet);
targetSheet.disabled = true ;