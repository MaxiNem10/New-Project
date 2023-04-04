//Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания. В эту функцию должны передаваться все данные для расчета профита, результат расчетов присвойте в объект блюда.
function profit (price, priceCooking) {
return price - priceCooking;
}

let food1 = {
  title:'Суп Шулэн',
  sostav: ['Лапша', 'мясо', 'картошка'],
  priceCooking: 0,
  price: 200, // 'стоимость Шулэна 200 рублей' ,
};
let food2 = {
  title:'Буузы',
  sostav: ['Тесто', 'фаршговяжий', 'фаршсвиной', 'лук'],
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
  sostav: ['Капуста', 'мясокурицы', 'картошка'],
  priceCooking: 0,
  price:  120, //['120 руб за 200 гр.', '220 руб за 400 гр.'],    
};
let food6 = { 
  title:'Пельмени',
  sostav: ['Тесто', 'фаршговяжий', 'фаршсвиной', 'лук'],
  priceCooking: 0,
  price: 300, //['100 руб за 120 гр.', '200 руб за 240 гр.'],    
};
let food7 = {      
  title:'Пюре с котлетой',
  sostav: ['картошка', 'фаршговяжий', 'подлив', 'лук'],
  priceCooking: 0,
  price: 230, //['130 руб за 200 гр.', '260 руб за 400 гр.'],    
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
  sostav: ['Тесто', 'фаршговяжий', 'фаршсвиной', 'лук'],
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
  sostav: ['Тесто', 'фаршговяжий', 'фаршсвиной', 'лук'],
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
food13, food14, food15, food16,
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
}

 
 
 
 for (let i=0; i < Menu.length; i++) {
   let sum = 0;
       for (let j=0; j < Menu[i].sostav.length; j++) {
           sum += sostavprice  [Menu[i].sostav[j]];
        
       Menu[i].priceCooking = sum;
      
       for (let i = 0; i < Menu.length; i++) {
         Menu[i].profit = Menu[i].price - Menu[i].priceCooking;
       };
 
    }
   }
  
   console.log(`Созданный массив из объектов блюд с профитом: ${JSON.stringify(Menu)}`);

   let resultText = ''
//Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. 
for (let i = 0; i < Menu.length; i++) {
    // тут мы применим функцию расчета профита
    Menu[i].profit = profit(Menu[i].price, Menu[i].priceCooking);
    resultText += `Блюдо: ${Menu[i].title} ; Прибыль от продажи: ${Menu[i].profit}\n`;
};

alert(resultText);
    //console.log(`Созданный массив из объектов блюд cо стоимостью: ${JSON.stringify(Menu)}`);
    //console.log(Menu[15].priceCooking)