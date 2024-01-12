let a = "red , yellow , black , yellow , black , black";
console.log(typeof a);
console.log(a)

// length of string 

let a1 = a.length;
console.log(a1);

// escape
let b1 = "my name is \"bhanu\"";
console.log(b1)

// slice

let c1 = a.slice(6,12);
console.log(c1);

// subsstring (negative value mtlb 0)

let c2 = a.substring(-4,3);
console.log(c2);

// subsstr

let c3 = a.substr(6,6);
console.log(c3);

// replace (g for select all & i for all case)

let d1 = a.replace("yellow" , "green");
console.log(d1);

let d2 = a.replaceAll("yellow", "green");
console.log(d2);

let d3 = a.replace(/BLACK/ig , "purple");
console.log(d3);

// case changing

let e1 = a.toUpperCase();
console.log(e1);

// concating 

let b = "hello"
let c = "mr"
let d = "nobody"

let f1 = b + " " + c + " " + d ;
console.log(f1);

let f2 = b.concat(" ",c," ",d);
console.log(f2);

// trimming     (start & end)

let e = "     BHANU     "

let g1 = e.trim();
console.log(g1);

let g2 = e.trimEnd();
console.log(g2);

let g3 = e.trimStart();
console.log(g3);

// padding

let h1 = c.padStart(5,"0");
console.log(h1)

let h2 = c.padEnd(5,"0");
console.log(h2);

// split (convert string into arry)

let i = "red, green, blue, purple";
console.log(typeof i);
i1 = i.split(",");
console.log(typeof i1);
console.log(i1);

let i2 = ["redmi", "realme", 45];
console.log(i2);