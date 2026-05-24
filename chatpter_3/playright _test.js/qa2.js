function isValidJsBasicsIdentifier(Name) {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(Name);
}

console.log(isValidJsBasicsIdentifier("myVariable")); // true
console.log(isValidJsBasicsIdentifier("123variable")); // false