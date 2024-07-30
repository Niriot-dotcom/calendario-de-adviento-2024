export const textToDivId = (text: string) => {
  // let newText = text.replace(/[^a-zA-Z0-9]+/g, "_").toLowerCase();
  let newText = text.replaceAll(" ", "-").toLowerCase();
  return newText;
};

export function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
