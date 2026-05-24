function normalizeJsBasicsLabel(label) {
  if (typeof label !== "string") {
    return "";
  }
  return label.trim().toLowerCase();
}

console.log(normalizeJsBasicsLabel("  JavaScript Basics  "));
console.log(normalizeJsBasicsLabel("JS-BASICS"));
