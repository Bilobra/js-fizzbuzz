// console log di prova
console.log('hello!')

// scrivi programma che stampi in console n° da 1 a 100
for (let i = 0; i < 100; i++) {
    const number = i + 1
    console.log(number)


    if ( number % 5 == 0 ) {
        console.log( number + 'Buzz')
    } else if  (number % 3 == 0) {
        console.log( number + 'fizz')
    } else if ( (number % 3 && number % 5 ==0)){
        console.log(number + 'buzzfizz')
    }
    
    // per i multipli di 3 stampi fizz al posto dei numeri

    // per i multipli di 5 stampi buzz


    // per i numeri sia multipli di 3 che di 5 stami fizzbuzz


}