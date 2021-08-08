/*Print a numbers 1-100 such that when any of the number is 
(1) a multiple of 3, print "FIZZ"
(2) a multiple of 5, print "BUZZ"
(3) a multiple of 3 and 5, print "FIZZBUZZ" */

var imax = prompt("Enter the max number");
var i=1;
while (i<=imax){
    var r = i;
    
    if(r%3==0 && r%5==0){
        console.log('FIZZBUZZ');
    } else if(r%3==0){
        console.log('FIZZ');
    } else if (r%5==0){
        console.log('BUZZ');
    } else {
        console.log(r);
    }
    
    i++;
}