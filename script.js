// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0)
//     console.log(i)
// }

// for (let i = 1; i < 10; i += 1) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }

  

    
  
let food1 = {
    title:'Суп Шулэн',
    sostav: ['Лапша', 'мясо', 'картошка'],
    priceCooking: 0,
    price: 200, // 'стоимость Шулэна 200 рублей' ,
  };
  let food2 = {
    title:'Буузы',
    sostav: ['Тесто', 'фарш говяжий', 'фаршсвиной', 'лук'],
    priceCooking: 0,
    price: 250, //'стоимость бууз: 40 руб за 1 шт., 35 руб за 1 шт. замороженные',      
  };
  let food3 = {  
    title:'Цуйван',
    sostav: ['Лапша', 'мясо', 'перецболгарский', 'лук'],
    priceCooking: 0,
    price: 150, //'стоимость Цуйвана 150 руб за 200 гр., стоимость Цуйвана 250 руб за 400 гр.',    
  };
  let food4 = { 
    title:'Морс',
    sostav: ['Вода', 'ягода',],
    priceCooking: 0,
    price: 50, //'50 руб за 200 гр.',    
  };

  let food5 = {
    title:'Борщ',
    sostav: ['Капуста', 'мясо курицы', 'картошка'],
    priceCooking: 0,
    price:  120, //['120 руб за 200 гр.', '220 руб за 400 гр.'],    
  };
  let food6 = { 
    title:'Пельмени',
    sostav: ['Тесто', 'фарш говяжий', 'фаршсвиной', 'лук'],
    priceCooking: 0,
    price: 100, //['100 руб за 120 гр.', '200 руб за 240 гр.'],    
  };
  let food7 = {      
    title:'Пюре с котлетой',
    sostav: ['Картошка', 'фарш', 'подлив', 'лук'],
    priceCooking: 0,
    price: 130, //['130 руб за 200 гр.', '260 руб за 400 гр.'],    
  };
  let food8 = {
    title:'Чай',
    sostav: ['Вода', 'пакетикчая'],
    priceCooking: 0,
    price: 50, //'50 руб за 200 гр.',    
  };
      
  let food9 = {
    title:'Суп Шулэн',
    sostav: ['Лапша', 'мясо', 'картошка'],
    priceCooking: 0,
    price: 100, //['100 руб за 200 гр.', '200 руб за 400 гр.'],    
  };
  let food10 = { 
    title:'Буузы',
    sostav: ['Тесто', 'фарш говяжий', 'фаршсвиной', 'лук'],
    priceCooking: 0,
    price: 40, //['40 руб за 1 шт.', '35 руб за 1 шт. замороженные'],    
  };
  let food11 = {
    title:'Цуйван',
    sostav: ['Лапша', 'мясо', 'перецболгарский', 'лук'],
    priceCooking: 0,
    price: 150, //['150 руб за 200 гр.', '250 руб за 400 гр.'],    
  };
  let food12 = {
    title:'Морс',
    sostav: ['Вода', 'ягода'],
    priceCooking: 0,
    price: 50, //'50 руб за 200 гр.',    
  };
  
  let food13 = {
    title:'Суп Шулэн',
    sostav: ['Лапша', 'мясо', 'картошка'],
    priceCooking: 0,
    price: 100, // ['100 руб за 200 гр.', '200 руб за 400 гр.'],    
  };
  let food14 = {  
    title:'Буузы',
    sostav: ['Тесто', 'фарш говяжий', 'фаршсвиной', 'лук'],
    priceCooking: 0,
    price: 40, // ['40 руб за 1 шт.', '35 руб за 1 шт. замороженные'],    
  };
  let food15 = {  
    title:'Цуйван',
    sostav: ['Лапша', 'мясо', 'перецболгарский', 'лук'],
    priceCooking: 0,
    price: 150, // ['150 руб за 200 гр.', '250 руб за 400 гр.'],    
  };
  let food16 = {  
    title:'Морс',
    sostav: ['Вода', 'ягода'],
    priceCooking: 0,
    price: 50, // '50 руб за 200 гр.',    
  };

    
let Menu = [
food1,  food2, food3,  food4,  food5,  food6,
food7,  food8, food9,  food10, food11, food12,
food13, food14, food15, food15, food16,
] ;    




let sostavprice = {
Лапша: 20,
мясо: 100, 
картошка:30,
Тесто: 25,
фаршговяжий: 120,
фаршсвиной: 110,
лук: 10,
перецболгарский: 15,
Вода: 12,
ягода: 30,
Капуста: 18,
мясокурицы: 70,
пакетикчая: 5,
подлив: 2,

};


for (let i=0; i < Menu.length; i++) {
let sum = 0;
    for (let j=0; j < Menu[i].sostav.length; j++) {
        sum += sostavprice  [Menu[i].sostav[j]];
    }
    Menu[i].priceCooking = sum;
};

console.log(`Созданный массив из объектов блюд cо стоимостью: ${JSON.stringify(Menu)}`);

for (let i = 0; i < Menu.length; i++) {
Menu[i].profit = Menu[i].price - Menu[i].priceCooking;
};

console.log(`Созданный массив из объектов блюд с профитом: ${JSON.stringify(Menu)}`);
//console.log(Menu)




// let pancakesWithJam = {
//   name: "Блины с повидлом",
//   ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "jam"],
//   priceCooking: 0,
//   priceSale: 300
// };

// let pancakesWithCheese = {
//   name: "Блины с сыром",
//   ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "cheese"],
//   priceCooking: 0,
//   priceSale: 400
// };

// let pancakesWithCottageCheese = {
//   name: "Блины с творогом",
//   ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "cottageCheese"],
//   priceCooking: 0,
//   priceSale: 450
// };

// let pancakesWithMeat = {
//   name: "Блины с мясом",
//   ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "meat"],
//   priceCooking: 0,
//   priceSale: 600
// };

// let pancakesWithSalmon = {
//   name: "Блины с лососем",
//   ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "salmon"],
//   priceCooking: 0,
//   priceSale: 800
// };

// let pancakesWithBananas = {
//   name: "Блины с бананом",
//   ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "bananas"],
//   priceCooking: 0,
//   priceSale: 350
// };

// let pancakesWithChocolate = {
//   name: "Блины с шоколадом",
//   ingredients: ["milk", "water", "eggs", "sugar", "salt", "flour", "oil", "chocolate"],
//   priceCooking: 0,
//   priceSale: 400
// };

// // массив из блюд
// let meals = [
//   pancakesWithJam,
//   pancakesWithCheese,
//   pancakesWithCottageCheese,
//   pancakesWithMeat,
//   pancakesWithSalmon,
//   pancakesWithBananas,
//   pancakesWithChocolate
// ];

// //Отдельно создайте объект хранящий стоимость этих ингредиентов. 
// let ingredientsPrices = {
//   milk: 50,
//   water: 30,
//   eggs: 40,
//   sugar: 10,
//   salt: 5,
//   flour: 30,
//   oil: 20,
//   jam: 60,
//   cheese: 70,
//   cottageCheese: 100,
//   meat: 100,
//   salmon: 150,
//   bananas: 50,
//   chocolate: 60
// };

// //Посчитайте стоимость приготовления динамически (с помощью цикла)
// for (let i = 0; i < meals.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < meals[i].ingredients.length; j++) {
//       sum += ingredientsPrices[meals[i].ingredients[j]];
//   }
//   meals[i].priceCooking = sum;
// };

// console.log(`Созданный массив из объектов блюд cо стоимостью: ${JSON.stringify(meals)}`);


// //Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. 
// for (let i = 0; i < meals.length; i++) {
//   meals[i].profit = meals[i].priceSale - meals[i].priceCooking;
// };

// console.log(`Созданный массив из объектов блюд с профитом: ${JSON.stringify(meals)}`);

//sostavsoup = sostav['Лапша'] + sostav['мясо'] + sostav['картошка'];

//console.log(sostavsoup)
//sostav.__proto__ = Menu[0].MenuOnMonday[0].sostav;
//console.log(sostav)
//console.log(sum)

//let  = Menu[0].MenuOnMonday[0].sostav[0];
//Menu[0].MenuOnMonday[0].sostav[1]
//Menu[0].MenuOnMonday[0].sostav[2]
//console.log(sumsebestiomost) 

//const titel1 = 80 // себестоимость затрат на Шулэн 
//const title2 = 20 // себестоитмоть затрат на буузы 1 шт.
//const title3 = 75 // себестоимьсть затрат на Цуйван



// let price1soup = Menu[0].MenuOnMonday[0].price1soup; // изменеие проверка
// let price1boozy = Menu[0].MenuOnMonday[1].price2boozy;
// let price1cuyvan = Menu[0].MenuOnMonday[2].price3cuyvan;
// console.log(price1soup);
// console.log(price1boozy);
//console.log(price1cuyvan);

//let dohod = `чистая прибыль с блюда Шулэн ${price1soup - sostavsoup} рублей`
//чистая прибыль с бууз ${price2[0]- title2} рублей
//чистая прибыль с замороженных бууз ${price2[1]-title2} рублей
//чистая прибыль с блюда Цуйван со 150 грамм ${price3[0]-title3} рублей;
//чистая прибыль с блюда Цуйван с 250 грамм ${price3[1]-title3} рублей
//console.log(dohod);

//let Me = Menu[0];
//console.log(Me);

//let Me2 = Menu[1];
//console.log(Me2);

//let Me3 = Menu[2];
//console.log(Me3);


//Menu.pop();       
//console.log(Menu);


//Menu.unshift(`MenuOnTuesday`);
//console.log(Menu);







//let monitor = Menu[0]. MenuOnMonday[3]. sostav4[1];  
//console.log(monitor); 
//let title2 = Menu[0]. MenuOnTuesday[2]. sostav3[2];
//console.log(title2);


