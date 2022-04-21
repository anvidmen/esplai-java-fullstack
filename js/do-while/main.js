let number = 1;
let i = 0;

do {
    if (i === 0) {
        //Entra en la primera iteracion la i con valor 0, posteriormente aunmenta i=1 y a number se le resta quedando a number=0
        i++;
        number--;
        console.log(number)
    } else {
        //Desde la segunda iteracion seguira entrando hasta cumplir la iteracion number<5
        number++
        console.log(number)
    }

} while (number < 5);