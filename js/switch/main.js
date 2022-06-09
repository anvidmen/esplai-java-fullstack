const number = 2

const months = () => {
    switch (number) {
        case 1: console.log("January")
            break;
        case 2: console.log("February")
            break;
        case 3: console.log("March")
            break;
        case 4: console.log("April")
            break;
        case 5: console.log("May")
            break;
        case 6: console.log("June")
            break;
        case 7: console.log("July")
            break;
        case 8: console.log("August")
            break;
        case 9: console.log("September")
            break;
        case 10: console.log("October")
            break;
        case 11: console.log("November")
            break;
        case 12: console.log("December")
            break;
        default:
            break;
    }
}

months()

const string = prompt("Enter a number from one to five, only letters!")
const numbers = () => {
    switch (string) {
        case "uno":
            alert(1)
            break;
        case "dos":
            alert(2)
            break;

        case "tres":
            alert(3)
            break;

        case "cuatro":
            alert(4)
            break;

        case "cinco":
            alert(5)
            break;

        default:
            alert("The value is not correct")
            break;
    }
}

numbers()
