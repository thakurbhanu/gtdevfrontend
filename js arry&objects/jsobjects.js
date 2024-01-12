const person = {
    firstName: "Bhanu",
    lastName: "Bhadouriya",
    age: 21,
    eyeColor: "black",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
  };

console.log(person.firstName);
console.log(person["age"]);
let name = person.fullName();
console.log(name);



  // literals

console.log(`javascript is best language`);
console.log(`javascript is 'best' language`);
console.log(`javascript is "best" language`);

 /* console.log("quick brownfox
  jumps Over The
  lazy dog") */
console.log(`the quick browqn fox jumps over the lazy dog`);
let a = "bhanu" ;
let b = "bhadouriya";
let text = `Welcome, ${person.firstName} , ${person.lastName}!`;
console.log(text);
 

  