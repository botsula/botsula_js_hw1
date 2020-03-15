/**
 * 3. **Maximum Possible Total**
 * Given an array of 10 numbers, return the **maximum possible total** made by summing just **5 of the 10 numbers**.
 */

function maxTotal(arr){
    if (arr.length != 10){
        console.log("The length of array isn`t 10, sorry, boiii.");
        return 1;
    }
    let totalSum = 0;
    for (let i = 0; i != 5; i++){
        let max = Math.max(...arr);
        totalSum += max;
        let removed = arr.splice(arr.indexOf(max), 1);
    }
    return totalSum;
}
