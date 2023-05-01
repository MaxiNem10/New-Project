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
    title:'вареники с картошкой',
    sostav: ['Тесто', 'картошка', 'лук'],
    priceCooking: 0,
    price: 100, //['100 руб за 120 гр.', '200 руб за 240 гр.'],   
    veganfood: 'true'
  };
  let food7 = {      
    title:'Пюре с котлетой',
    sostav: ['картошка', 'фаршговяжий', 'подлив', 'лук'],
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
    veganfood: true    
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
    veganfood: true    
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

 

// подсчет себестоимости 
Menu.map(function (item, index, arr) {
    let priceSostav = item.sostav.reduce(function (sum, item, index, arr) {
      return sum += sostavprice[item];
  }, 0);
 console.log(`цена ингридиентов блюда: ${priceSostav}`);
 console.log(`стоимость по меню ${item.price}`);
let priceCooking = item.price - priceSostav
console.log(`- Блюдо: ${item.title} ; Себестоимость: ${priceCooking}`);
});



  let foodVegan = Menu.some(function (item,index,arr) {
    return item.veganfood;
  
});
console.log(foodVegan);

let foodVegan1 = Menu.every(function (item,index,arr) {
    return item.veganfood;
  
});
console.log(foodVegan1);

let foodVegan2 = Menu.filter(function (item,index,arr) {
    return item.veganfood;
  
});
console.log(foodVegan2);

