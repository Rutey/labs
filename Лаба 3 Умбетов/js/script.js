document.getElementById('button').addEventListener('click', function() {
    var X = parseFloat(document.getElementById('X').value);
    var valueXMinThree = X - 3;
    var valueXMinThreeCube = Math.pow(valueXMinThree, 3);
    var valueXMinThreeSixth = Math.pow(valueXMinThree, 6);
    
    var result = 4 * valueXMinThreeSixth - 7 * valueXMinThreeCube + 2;
    
    document.getElementById('result').textContent = "Значение функции y: " + result;
});