const myTest12 = () => {
  let fruits = ['Pisang', 'Jeruk', 'Apel', 'Mangga'];
  console.log(fruits);

  fruits.pop()
  console.log(fruits);

  fruits.shift()
  return fruits;
}

console.log(myTest12());
