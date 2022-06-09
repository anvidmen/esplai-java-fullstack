let array = ["a", "b", "c", "d", "e"]

array.forEach(element => {
    console.log(element)
});

console.log("-----------------------")

let number = [1, 2, 3, 4, 5]

number.forEach(element => {
    let revertNumber = number.length - element + 1;
    console.log(revertNumber)
});
