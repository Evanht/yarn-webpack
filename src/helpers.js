const capitalize = (word) => {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

const anotherFunction = () => {
  console.log("blah")
}

export {
  capitalize,
  anotherFunction,
};
