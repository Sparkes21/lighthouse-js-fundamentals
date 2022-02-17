
const whichSchool = function (age) {
  if (age < 13) { return console.log("Elementary School");}
  else if (age > 13 && age <= 18) { return console.log("Secondary School");}
  else {return console.log("Lighthouse Labs")};
}


var num = 99;

while (num >= 1) {if (num === 1) {
    console.log(num + " bottle of juice on the wall! " 
    + num + " bottle of juice! Take one down pass it around. . . " 
    + (num - 1) + " bottles of juice on the wall!");} 
    else if (num === 2) {
        console.log(num + " bottles of juice on the wall! " 
        + num + " bottles of juice! Take one down pass it around. . . " 
        + (num -1) + " bottle of juice on the wall!");}
        else {
            console.log(num + " bottles of juice on the wall! " 
            + num + " bottles of juice! Take one down pass it around. . . " 
            + (num-1) + " bottles of juice on the wall!");
            
        } num = num -1;
    } 
    ;
    for (var x = 0; x < 5; x = x + 1) {
      for (var y = 0; y < 3; y = y + 1) {
        console.log(x + "," + y);
      }
    };

    var x = 9
    for (var x = 9; x >= 1; x-- ) {console.log("hello " + x);}
    

