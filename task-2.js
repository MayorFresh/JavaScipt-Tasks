//Write a code that prints the following. 

/*99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

...

1 bottles of beer on the wall, 1 bottles of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
*/

var i = 99;
var j = 98;
while (i>=0 && j>=0){
    if (j==0)
    {
        j='no more';
    }
    if (i==0)
    {
        i='no more';
    }

    console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${j} bottles of beer on the wall.`);
    i--;
    j--;
}
// console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.\nGo to the store and buy some more, ${j-99} bottles of beer on the wall.`);