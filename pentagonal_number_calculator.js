/**
 * 4. **Pentagonal Number calculator*
 * The *n*th pentagonal number P*n* is the number of distinct dots in a pattern of dots consisting
 * of the outlines of regular pentagons with sides up to n dots,
 * when the pentagons are overlaid so that they share one vertex.
 */

function pentagonalNumber(n){
    return (3 * Math.pow(n, 2) - n) / 2
}