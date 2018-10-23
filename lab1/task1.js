const start = new Date().getTime();
const x = 20;
let result = 1

for (let index = 0; index < x; index++) {
    result *= x-index;   
    console.log(x);
    console.log(index);
    console.log(
        result
    );
    
    
      
}

console.log(`task1 ${result}`);
const end = new Date().getTime();
console.log(`task1 finished in ${end-start} ms`);