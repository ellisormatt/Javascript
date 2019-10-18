//prints all numbers from 1 to 100
//for numbers divisible by 3, print "Fizz" instead of the number
//for numbers divisible by 5, print "Buzz" instead of the number

for(let i=1;i<101;i++) {
    if (i%3 == 0) {
        console.log('Fizz');
    } else if (i%5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}