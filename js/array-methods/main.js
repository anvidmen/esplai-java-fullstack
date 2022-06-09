let lunch = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];
const addBeers = lunch.fill("🍻", lunch.indexOf("🍕") + 1);
// addbeers = ["🍔", "🌯", "🍣","🍕", "🍻", "🍻","🍻", "🍻", "🍻"]

let food = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const existPineapple = food.some(pineapple => pineapple === "🍍");
//existPineapple = true

const removePineapple = food.splice(food.indexOf("🍍"), 1);
//removePineapple = [ "🍍" ]
//food = [ "🍕", "🍕", "🍕", "🍕" ]

let fruits = ["🍓", "🍋", "🍓", "🍋", "🍓"];
const replacedByMushrooms = fruits.map(value => value === "🍓" ? "🍄" : value);
//replacedByMushrooms = [ '🍄', '🍋', '🍄', '🍋', '🍄' ]

let spicyFood = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
const spicyFoodWithMilk = [];
spicyFood.forEach(value => {
    spicyFoodWithMilk.push(value)
    if (value === "🌶️") spicyFoodWithMilk.push("🥵")
});
//spicyFoodWithMilk = ['🌶️', '🥵', '🥛','🌶️', '🥵', '🥛','🌶️', '🥵', '🥛']

let cardGame = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
const jokerCardGame = [];
cardGame.forEach(value => {
    if (value === "🎴") {
        jokerCardGame.push(value);
        jokerCardGame.push("🃏");
    }
});
//jokerCardGame = ['🎴', '🃏', '🎴', '🃏', '🎴', '🃏', '🎴', '🃏', '🎴', '🃏', '🎴', '🃏']
