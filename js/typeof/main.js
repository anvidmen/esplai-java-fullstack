let string = "hello world";
let number = 1234;
let bolean = true;
let isNull = null;
let isUndefined = undefined;
let array = ["hello", 12, undefined];
let object = { name: "Juan", surname: "Omen" };

const print = () => {
    let result = [string, number, bolean, isNull, isUndefined, array, object];

    for (let index = 0; index < result.length; index++) {
        let finalResult = result[index];
        console.log(`variable: ${finalResult}, type: ${typeof finalResult}`);
    }
}

print()
