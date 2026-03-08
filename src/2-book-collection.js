const bookInventory = {
  "The Bluest Eye": 3,
  "Beloved": 5,
  "Homegoing": 2,
  "The Vanishing Half": 4,
  "Between the World and Me": 1
};

let total = 0
for (const key of Object.keys(bookInventory)) {
  const value = bookInventory[key];
  console.log(`${key}:`, `${value} copies available`);
  total += value
}

console.log(`The total is ${total}`)




