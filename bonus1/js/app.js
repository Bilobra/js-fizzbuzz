// console log di prova
// console.log('hello!')


const gridElement = document.querySelector('.grid')
console.log(gridElement)
gridElement.innerHTML = ''

// scrivi programma che stampi in console n° da 1 a 100
for (let i = 0; i < 100; i++) {
    const number = i + 1
    // console.log(number)

    // //  creaimo un elemento
    const divElement = document.createElement('div')
    // lo modifichiamo mettendogli qualcosa all'interno
    divElement.classList.add('cell')
    divElement.append(number)
    console.log(divElement)

    

    if (number % 3 == 0 && number % 5 == 0) {
        // console.log( 'BuzzFizz') // per i numeri sia multipli di 3 che di 5 stami fizzbuzz
        divElement.append(`BuzzFizz`)
        divElement.classList.add('buzzfizz_cell')
    } else if (number % 5 == 0) {
        // console.log('Buzz') // per i multipli di 5 stampi buzz
        divElement.append(`Buzz`)
        divElement.classList.add('buzz_cell')
    } else if (number % 3 == 0) {
        // console.log( 'Fizz') // per i multipli di 3 stampi fizz al posto dei numeri
        divElement.append(`Fizz`)
        divElement.classList.add('fizz_cell')
    }
    else {
        // console.log (number) // per i numeri che non rientrano nella condizione stamp i + 1
        divElement.classList.add('normal_cell')
    }

    gridElement.append(divElement)








}