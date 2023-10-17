function getElementWidth(content, padding, border){
    const getElementWidth = Number;
    const totalWidth = Number.parseFloat(content) + 2 * Number.parseFloat(padding) + 2 * Number.parseFloat(border);

    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

//function getElementWidth(content, padding, border){
//    const contentWidth = parseFloat(content);
//    const paddingWidth = parseFloat(padding);
 //   const borderWidth = parseFloat(border);
   
//    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

//    return totalWidth;
//}