/** 
 * 1. Convert Object to Array
 * 
 * Create a function that converts an object into array
 * toArr({ key1: 'value1', key2: 'value2' }) // [["key1", "value1"], ["key2", "value2"]]
 * toArray({}) // [] Return an empty array if the object is empty.
*/

function toArray(obj){
    let result = [];
    let b = Object.keys(obj);
    if (b.length == 0) return [];

    for (i = 0; i != b.length; i++){
        result[i] = [b[i], obj[b[i]]];
    }
    return result;
  } 