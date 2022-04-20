
const randomNumber = () => {
    let number = Math.round(Math.random());
    if (number === 0) return "🌝";
    return "🌞";
}

let result = randomNumber();
console.log(result);