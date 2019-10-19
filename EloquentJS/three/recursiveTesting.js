


function power (base,exponent) {
    if (exponent ==0) {
        return 1;
    } else {
        return base * power(base,exponent-1);
    }
}

console.log(power(2,3)); //returns -> 2*(2*(2*(1))))

/*

first: return 2 * power (2,3-1) -> resolves to 2
second: return 2 * power (2,2-1) -> resolves to 2
third: return 1 -> resolves to 1

*/
