const start = new Date().getTime();
const x = 7;
let result = 1

for (let index = 0; index < x; index++) {
    result *= x-index;   
    console.log(x);
    console.log(index);
    console.log(
        result
    );     
}

console.log(`task2 ${result}`);
const end = new Date().getTime();
console.log(`task2 finished in ${end-start} ms`);
