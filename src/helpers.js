function choice(itemsArray) {
  const randomIndex = Math.floor(Math.random() * itemsArray.length);
  return itemsArray[randomIndex];
}

function remove(itemsArray, item) {
  for (let i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i] === item) {
      return itemsArray.splice(i, 1)[0];
    }
  }
}

export { choice, remove };
