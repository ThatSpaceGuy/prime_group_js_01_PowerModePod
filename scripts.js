console.log('scripts.js sourced!');

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var bonusArray = [];
var i = 0;
var bonusPercentage = 0;

// calculateBonus written by Luis
var calculateBonus = function(){
  console.log('in calculateBonus');
  for (i = 0; i < employees.length; i++) {
    bonusPercentage = 0;

    checkNumber();
    checkSalary();
    checkRating();
    checkBonus();
  }
}; // end calculateBonus

// checkNumber written by Matt C.
var checkNumber = function(){
  if(employees[i][1].length==4){
    bonusPercentage+=5;
    console.log('in checkNumber',bonusPercentage);
  }
}; //end checkNumber

// checkSalary written by Ben J
var checkSalary = function(){
  console.log('in checkSalary');

  if(employees[i][2] > 65000){
    bonusPercentage -= 1;
    console.log(bonusPercentage);
  }
}; // end checkSalary

// checkRating written by Lisa
var checkRating = function(){
  console.log('in checkRating');
  // if rating is 2 set bonus% to zero
  console.log(employees[i]);
  switch (employees[i][3]){
    case 3:
      bonusPercentage += 4;
      break;
    case 4:
      bonusPercentage += 6;
      break;
    case 5:
      bonusPercentage += 10;
      break;
    default:
      // since their rating is not 3-5, it must be 2 or lower
      bonusPercentage = 0;
  }
  console.log(bonusPercentage);
}; // end checkRating

// checkBonus written by Ben J
var checkBonus = function(){
  console.log('in checkBonus');
  if(bonusPercentage > 13){
    bonusPercentage = 13;
    console.log(bonusPercentage);
  }
}; // end checkBonus

calculateBonus();

// dispaly the arrays - by Luis
for (var i = 0; i < bonusArray.length; i++) {
  console.log(bonusArray[i]);
}
