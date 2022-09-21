console.log('Hello world');

function primeList() {
    //Tar först bort den nuvarande texten
    writePrimeList.innerHTML = '';

    //Hämtar vad användaren har skrivit in i input
    const inputListNum = document.getElementById('inputPrimeList').value;

    //Skapar en array med de fem första primtalen
    const primeNumberArray = [2, 3, 5, 7, 11];

    //For loop som skriver ut så många tal som man har skrivit att den ska skriva ut
    for(var i=0; i < inputListNum; i++) {
        writePrimeList.innerHTML += primeNumberArray[i] + ', ';
    }
};

function primePosition() {
    var inputPositionNum = document.getElementById('inputPrimePosition').value;

    const primeNumberArray = [2, 3, 5, 7, 11];
   
    //Ändrar så att användarens input blir en mindre därav en position till vänster i indexen
    inputPositionNum -= 1;

    writePrimePosition.innerHTML = (primeNumberArray[inputPositionNum]);
}