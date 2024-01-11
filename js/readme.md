### Traccia:
 
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".  
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".  

#### BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso le funzioni document.createElement() e append()) un elemento html con il numero o la stringa corretta da mostrare.

#### BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.  
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

### Svolgimento Traccia:

1. creare un ciclo che vada da 1 a 100

2. se il numero è divisibile per 15 stampa FizzBuzz

3. se il numero è divisibile per 5 stampa Buzz

4. se il numero è divisibile per 3 stampa Fizz

5. altrimenti stampa il numero

### Svolgimento BONUS 1:

1. prendi il container dal dom

2. creare un ciclo che vada da 1 a 100

3. creare un elemento html 

4. se l'indice del ciclo è divisibile per 15 stampa FizzBuzz dentro l'elemento creato

5. se l'indice del ciclo è divisibile per 5 stampa Buzz dentro l'elemento creato

5. se l'indice del ciclo è divisibile per 3 stampa Fizz dentro l'elemento creato

6. altrimenti stampa l'indice del ciclo dentro l'elemento creato

7. metti l'elemento creato in pagina

### Svolgimento BONUS 2:

8. aggiungi all'elemento le opportune calssi di bootstrap