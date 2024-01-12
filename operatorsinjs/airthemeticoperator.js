let x = 3;
x += 2;
let y = 5;
let z = 15;
z++

value = x+y+z
console.log("x+y+z = " + value);
console.log(x+y+z)
console.log(x-y+z)
console.log(x*z)
console.log(z/x)
console.log(z%x)
console.log(z)
document.write(z)

function headChange(){
    document.getElementById("mainHead").textContent = "hello";
   }

function resetHead(){
    document.getElementById("mainHead").textContent = "airhtemetic operator";
    }

document.getElementById("demoPrint").innerHTML = "Value of x+y+z = " + value;
