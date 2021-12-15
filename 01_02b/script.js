const styleSheets = document.styleSheets;
console.log(styleSheets);

const styleSheetsArray = Array.from(styleSheets)
const targetSheet = styleSheetsArray.find((styleSheets) => {
 if (styleSheets?.href){
     const pathName = new URL(styleSheets.href).pathname.split("/").pop()
     if (pathName === "extra.css") {
         return styleSheets
     }
 }
})
console.log(targetSheet)