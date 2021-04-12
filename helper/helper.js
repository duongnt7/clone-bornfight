function convertColor(hex, dec) {
  console.log("hex", hex, dec);
  let color = hex - dec.toString(16);
  console.log(color);
  // return color;
}

export { convertColor };
