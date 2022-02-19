var donuts = ["glazed", "powdered", "jelly"];
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];
var arraysInArrays =[[1, 2, 3], 
["Julia", "James"],
 [true, false, true, false]
];
console.log(donuts[1]);

donuts [1] = "glazed cruller";
console.log(donuts[1]);


var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(element){
  element = element + (element * 0.15);
  
});
console.log(totals);