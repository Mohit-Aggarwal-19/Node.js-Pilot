// const add = require('./add.js');

const superHero = require('./super-hero.js');
const superHero2 = require('./super-hero.js');

const pattern1 = require('./pattern1.js');

const pattern2 = require('./pattern-2.js');

const pattern3 = require('./pattern-3.js');

const {add, subtract} = require('./pattern-3.js');

const pattern4 = require('./pattern-4.js');

const pattern5 = require('./pattern-5.js');

const path = require("node:path")
// console.log("hello world")
// console.clear()
// var obj={
//   "name":"Mohit Aggarwal",
//   "age":26,
//   "Country":"India",  
// }

// console.table(obj)

// console.log("summ", add(1,4))

// console.log("get superHero 1",superHero.getName());
// console.log("set superHero 1",superHero.setName("Superman"));

// console.log("get superHero 2",superHero2.getName());

// console.log("export pattern 1", pattern1(2,3));

// console.log("export pattern 2",pattern2(2,6));

// console.log("export pattern 3",pattern3.add(2,5));
// console.log("export pattern 3",pattern3.subtract(2,5));
// console.log("export pattern 3",subtract(2,3));
// console.log("export pattern 3",add(2,6));

// console.log("export pattern 4",pattern4.add(3,66));
// console.log("export pattern 4",pattern4.substract(3,66));

// console.log("export pattern 5",pattern5.add(4,55));
// console.log("export pattern 5",pattern5.subtract(4,55));

// console.log("math.mjs",add(2,33));

console.log("path",path.join("/folder1","/folder2","index.html"));
