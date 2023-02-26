//let продал = prompt ('Сколько продал');
//let resulet = (продал > 50) ? 'Молодец' : 'бездарный' ; 
//console.log(resulet);

//let age = prompt(age > 18);
//let accessAllowed = (age > 18) ? true : false;
//console.log(accessAllowed);
let questions = prompt ('Правда ли, что Сальвадор Дали нарисовал логотип к продукту Chupa Chups?  Да это 1, НЕТ это 2');
if (questions <= 1 ) {
    alert ('Да ты умен или очень везучий');
}
else if(questions <= 2 ) {
    alert ('Ну как ты этого не знал');
}
else {
    alert('Ты не то нажал')
}
console.log(questions)