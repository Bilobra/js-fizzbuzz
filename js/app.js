// console log di prova
// console.log('hello!')

// scrivi programma che stampi in console n° da 1 a 100
for (let i = 0; i < 100; i++) {
    const number = i + 1
    // console.log(number)

    //  creaimo un elemento
    const divElement = document.createElement('div')
    // lo modifichiamo mettendogli qualcosa all'interno
    divElement.append(number)
    console.log(divElement)

    if (number % 3 == 0 && number % 5 == 0) {
        console.log( 'BuzzFizz') // per i numeri sia multipli di 3 che di 5 stami fizzbuzz
    } else if (number % 5 == 0) {
        console.log('Buzz') // per i multipli di 5 stampi buzz

    } else if (number % 3 == 0) {
        console.log( 'Fizz') // per i multipli di 3 stampi fizz al posto dei numeri
    }








}