// Task 1 .  

for (let x = 0; x < 16; x++)
 {
    if (x === 0) {
        console.log (x + " is even");
    }
    else if (x % 2 === 0) {
        console.log (x + " is even");
    }
    else {console.log (x + " is odd");
}
}

// Task 2 . 

for ( u = 1; u < 61 ; u++) {

    if (u % 3 === 0 && u % 5 === 0) {
        console.log ("FizzBuzz");
    }
    else if (u % 3 === 0) {
        console.log ("Fizz");   
    }
    else if (u % 5 === 0) {
        console.log ("Buzz");
    }
    else {
        console.log (u);
    } }


// Task 3 .   

let a = "";
for (let b = 1; b < 9; b++){
    for (let c = 1; c <= b; c ++) {
        a = a + c;
    }
    a += "\n"; }

console.log (a);


// Task 4 .  

let aa = "12";
let bb = aa.length;
console.log (bb);


let c = "3476";
let d = c.length;
console.log (d);


let e = "8";
let f = e.length;
console.log (f);


// Task 5 .  tbh pahanjy chem haskanum, ankap em arel :D

let sum10 = 0;
for (let k = 1; k < 6 ; k++) {
    sum10 += k}
   { console.log (sum10);
}

let sum1 = 0;
for (let m = 1; m < 16; m ++) {
    sum1 += m}
    { console.log (sum1);
    }


let sum2 = 0;
for (let g = 1; g < 100; g ++) {
    sum2 += g}
    { console.log (sum2);
     }



let sum3 = 0;
for (let h = 1; h < 5050; h ++) {
    sum3 += h}
    { console.log (sum3);
    }


// Task 6 .  Sa google a, bayc senc include chenq ancel :D

let str5 = "2364";
if (str5.includes ("5")) {
  console.log ("yes");
}
else {
  console.log ("no")
}

let str6 = "6";
if (str6.includes ("8")) {
  console.log ("yes");
}
else {
  console.log ("no");
}

let str7 = "45689";
if ( str7.includes ("8")) {
 console.log ("yes")
}
else {
 console.log ("no")
}

// Task 7 .   Es ynkerners ognel en, yes chem karacel u google n el chognec


let input1 = "895796";
let sum11 = 0;
for (let index1 = 0; index1 < input1.length; index1++) 
{
    let charToInt1 = parseInt (input1 [index1])
    
        sum11 += charToInt1;
}
console.log (sum11);




    let input = "25";
    let sum = 0;
    for (let index = 0; index < input.length; index++) 
    {
        let charToInt = parseInt (input [index])
        {
            sum += charToInt;
        }
    
    }
    console.log (sum);




    let input2 = "2";
    let sum12= 0;
    for (let index2 = 0; index2 < input2.length; index2++) 
    {
        let charToInt2 = parseInt (input2 [index2])
        {
            sum12 += charToInt2;
        }
    
    }
    console.log (sum12);


