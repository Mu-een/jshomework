// Add 5 dates to current date
let theDate = new Date();
let currentDate = theDate.getDate();
console.log(new Date(theDate.setDate(currentDate + 5)));

// format date
let objectDate = new Date();

let day = objectDate.getDate();
let month = objectDate.getMonth();
let year = objectDate.getFullYear();

let version1 = (`${month + 1}/${day}/${year}`);
console.log(version1);

let version2 = (`${day}/${month + 1}/${year}`);
console.log(version2); 

let version3 = (`${month + 1}-${day}-${year}`);
console.log(version3); 

let version4 = (`${day}-${month + 1}-${year}`);
console.log(version4);

let version5 = (`${year}.${month + 1}.${day}`);
console.log(version5);





// The new Date() constructor returns a new Date object
// month is indexed at 0. The value starts at 0. Example: 7 will be August instead of 8s