// console log di prova
// console.log('hello!')

// scrivi programma che stampi in console n° da 1 a 100
for (let i = 0; i < 100; i++) {
    const number = i + 1
    // console.log(number)

   

    if (number % 3 == 0 && number % 5 == 0) {
        console.log( 'FizzBuzz') // per i numeri sia multipli di 3 che di 5 stamp fizzbuzz
    } else if (number % 5 == 0) {
        console.log('Buzz') // per i multipli di 5 stamp buzz

    } else if (number % 3 == 0) {
        console.log( 'Fizz') // per i multipli di 3 stamp fizz al posto dei numeri
    }
    else {
        console.log (number) // per i numeri che non rientrano nella condizione stamp i + 1
    }







}