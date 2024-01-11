//1. creare un ciclo che vada da 1 a 100
for (i = 1; i <= 100; i++) {

    //2. se il numero è divisibile per 15 
    if (i % 15 == 0) {

        //stampa FizzBuzz
        console.log('FizzBuzz');
    
    //3. se il numero è divisibile per 5 
    } else if ( i % 5 == 0 ) {

        //stampa Buzz
        console.log('Buzz');

    // 4. se il numero è divisibile per 3 
    } else if ( i % 3 == 0 ) {

        //stampa Fizz
        console.log('Fizz');

    //5. altrimenti 
    } else {

        //stampa il numero
        console.log(i);
    }

};