console.log('Hello world');

function primeList() {
    writePrimeList.innerHTML = '';
    const inputListNum = document.getElementById('inputPrimeList').value;

    const primeNumberArray = [2, 3, 5, 7, 11];

    for(var i=0; i < inputListNum; i++) {
        writePrimeList.innerHTML += primeNumberArray[i] + ', ';
    }
};

function primePosition() {
    const inputPositionNum = document.getElementById('inputPrimePosition').value;


    
}