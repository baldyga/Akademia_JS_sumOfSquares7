function sumOfSquares (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += Math.pow(array[i],2);
    }
    console.log("Suma kwadratów: " + sum);
}
sumOfSquares([0,1,2,3,4,5]);