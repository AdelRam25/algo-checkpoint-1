let stringLength = (string)=> string.length;
console.log(stringLength('hello world.'))

// **********************************

let countWords = (string) => string.split(" ").length;
console.log(countWords('hello world.'))



let strings = 'hello world.';
let vowels = 0; 

for (let string of strings) {
    if ('aeiouyAEIOUY'.includes(string)) {
        vowels++;
    }
}

console.log(vowels);