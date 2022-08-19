// const fs = require("fs");

// fs.writeFile("read.txt", "today is awosome today :", (err) => {
//   console.log("file is created");
//   console.log(err);
// });

// // we pass them a function as a argument - a callback - that gets called when that task completes.
// // the callback hass an argument that tells yu whether the operation completed successfully.
// // Now we need to say what to do when fs.writeFile has completed (even if it's nothing), and start checking for errrors.

// fs.appendFile("read.txt", "plx checkout the code", (err) => {
//   console.log("cods is completed");
//   console.log(err);
// });

// fs.readFile("read.txt", "UTF-8", (err, data) => {
//   console.log(data);
// });

// const array = [2, 23, 4, 5 , 8, 10]

// const filterNuumber = array.filter(function(value){
//   return value >= 9;

// })

// console.log(filterNuumber)

// const array = [-1, 20, -22, 30, 40];

// const filNum = array.filter((num) => {
//   return num <= 30;
// });

// console.log(filNum);
function filtr(){
  const arrayofobj = [
    { name: "been ", job: "freelancer" },
    { name: "mar", job: "teacher" },
    { name: "david", job: "js developer" },
  ];
  
  const freelaner = arrayofobj.filter((profession) => {
    return profession.job == "freelancer";
  });
  console.log(freelaner);
  
}

filtr()

console.log(filtr())


const arrayofobj = [
  { name: "been ", job: "freelancer" },
  { name: "mar", job: "teacher" },
  { name: "david", job: "js developer" },
];

const freelaner = arrayofobj.filter((profession) => {
  return profession.job == "freelancer";
});
console.log(freelaner);
