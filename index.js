function Styler(styles) {
  const stylesMap = {};
  for (const screen in styles) {
    const screenStylesArray = styles[screen]
      .split(" ")
      .map((item) => item.trim());

    for (let screenStyle of screenStylesArray) {
      if (screen !== "all") {
        if (screen === "xxl") screenStyle = "2xl:" + screenStyle;
        else screenStyle = screen + ":" + screenStyle;
      }
      stylesMap[screenStyle] = 1;
    }
  }
  let stylesString = "";

  for (const style in stylesMap) {
    stylesString += style + " ";
  }

  return stylesString.trim();
}

export default Styler;
