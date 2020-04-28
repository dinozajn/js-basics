const argx = 3;
let argbool1 = true;
let argnum1 = 2;
let argstring1 = '33';

function task1 (x) {
    return (2 * x + 4);
}

let wynik1 = task1(argx);

function task2 (x) {
    return (x * x);
}

let wynik2 = task2(argx);

let wynik3 = task1(task2(argx));

function sum (x,y,z) {
    x = Number(x);
    y = Number(y);
    z = Number(z);
    return (x + y + z);
}

let wynik4 = sum(argbool1, argnum1, argstring1);

function display (w, x, y, z) {
    return (
        console.log("wynik pierwszego równania to:", w),
        console.log("wynik drugiego równania to:", x),
        console.log("wynik trzeciego równania to:", y),
        console.log("suma argumentów to:", z)
    )
    
}

display (wynik1, wynik2, wynik3, wynik4);

function linear (a, b) {
    let x = 4;
    function wynik5 (x){
        return (a * x + b);
    }
    return wynik5 (x);
}

console.log(linear (2, 3));
