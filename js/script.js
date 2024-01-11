//1 prendi il container dal dom
const container = document.querySelector('.container');

//2. creare un ciclo che vada da 1 a 100
for (i = 1; i <= 100; i++) {

    //3. creare un elemento html con classe box
    const box = document.createElement('div');
    //8. aggiungi all'elemento le opportune calssi di bootstrap
    box.classList.add('box', 'col-2');

    //3. se il numero è divisibile per 15 
    if (i % 15 == 0) {

        //stampa FizzBuzz
        box.innerText = 'FizzBuzz';
    
    //4. se il numero è divisibile per 5 
    } else if ( i % 5 == 0 ) {

        //stampa Buzz
        box.innerText = 'Buzz';

    //5. se il numero è divisibile per 3 
    } else if ( i % 3 == 0 ) {

        //stampa Fizz
        box.innerText = 'Fizz';

    //6. altrimenti 
    } else {

        //stampa il numero
        box.innerText = i;
    }

    //7. metti l'elemento creato in pagina
    container.append(box);
    
};