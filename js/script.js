//1 prendi il container dal dom
const container = document.querySelector('.container');

//2. creare un ciclo che vada da 1 a 100
for (i = 1; i <= 100; i++) {

    //3. creare un elemento html con classe box
    const box = document.createElement('div');
    box.classList.add('box');

    //crea una variabile che conterrà il testo da stampare
    //6. altrimenti stampa l'indice del ciclo dentro l'elemento creato
    let boxText = `${i}`;

    //3. se il numero è divisibile per 15 
    if (i % 15 == 0) {

        //stampa FizzBuzz
        boxText = 'FizzBuzz';
    
    //4. se il numero è divisibile per 5 
    } else if ( i % 5 == 0 ) {

        //stampa Buzz
        boxText = 'Buzz';

    //5. se il numero è divisibile per 3 
    } else if ( i % 3 == 0 ) {

        //stampa Fizz
        boxText = 'Fizz';

    }

    //stampa il numero
    box.innerText = boxText;

    //8. aggiungi all'elemento le opportune calssi di bootstrap
    box.classList.add('box',boxText);

    //7. metti l'elemento creato in pagina
    container.append(box);
    
};