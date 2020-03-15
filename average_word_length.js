/**
 * 2. Create an average word calculator function.
 * The function must take in text and return the number of the average word length. 
 */


function avgWordLengthCalc(str){
    if (str.length == 0) return 0;

    let words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
        sum += words[i].length;
    }
    return (sum / words.length).toFixed(2);
}