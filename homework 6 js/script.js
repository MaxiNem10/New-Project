let Menu =     [
    {
        MenuOnMonday: [{
        title1:'Суп Шулэн',
        sostav1: ['Лапша', 'мясо', 'картошка'],
        },
        {
       title2:'Буузы',
        sostav2: ['Тесто', 'фарш говяжий', 'фарш свиной', 'лук'],
        price2: ['40 руб за 1 шт.', '35 руб за 1 шт. замороженные'],    
        },
        {
        title3:'Цуйван',
        sostav3: ['Лапша', 'мясо', 'перец болгарский', 'лук'],
        price3: ['150 руб за 200 гр.', '250 руб за 400 гр.'],    
        },
        {
        title4:'Морс',
        sostav4: ['Вода', 'ягода',],
        price4: '50 руб за 200 гр.',    
        }],
    
        MenuOnTuesday:  [{
    
        title1:'Борщ',
        sostav1: ['Капуста', 'мясо курицы', 'картошка'],
        price1: ['120 руб за 200 гр.', '220 руб за 400 гр.'],    
        },
        {
       title2:'Пельмени',
        sostav2: ['Тесто', 'фарш говяжий', 'фарш свиной', 'лук'],
        price2: ['100 руб за 120 гр.', '200 руб за 240 гр.'],    
        },   
        {    
        title3:'Пюре с котлетой',
        sostav3: ['Картошка', 'фарш', 'подлив', 'лук'],
        price3: ['130 руб за 200 гр.', '260 руб за 400 гр.'],    
        },   
        {
        title4:'Чай',
        sostav4: ['Вода', 'пакетик чая',],
        price4: '50 руб за 200 гр.',    
        }],
   },                
   {
    MenuOnThirsday: [{
    title1:'Суп Шулэн',
    sostav1: ['Лапша', 'мясо', 'картошка'],
    price1: ['100 руб за 200 гр.', '200 руб за 400 гр.'],    
    },
    {
   title2:'Буузы',
    sostav2: ['Тесто', 'фарш говяжий', 'фарш свиной', 'лук'],
    price2: ['40 руб за 1 шт.', '35 руб за 1 шт. замороженные'],    
    },
    {
    title3:'Цуйван',
    sostav3: ['Лапша', 'мясо', 'перец болгарский', 'лук'],
    price3: ['150 руб за 200 гр.', '250 руб за 400 гр.'],    
    },
    {
    title4:'Морс',
    sostav4: ['Вода', 'ягода',],
    price4: '50 руб за 200 гр.',    
    }],
    
    },
    {
        MenuOnWendsday: [{
        title1:'Суп Шулэн',
        sostav1: ['Лапша', 'мясо', 'картошка'],
        price1: ['100 руб за 200 гр.', '200 руб за 400 гр.'],    
        },
        {
       title2:'Буузы',
        sostav2: ['Тесто', 'фарш говяжий', 'фарш свиной', 'лук'],
        price2: ['40 руб за 1 шт.', '35 руб за 1 шт. замороженные'],    
        },
        {
        title3:'Цуйван',
        sostav3: ['Лапша', 'мясо', 'перец болгарский', 'лук'],
        price3: ['150 руб за 200 гр.', '250 руб за 400 гр.'],    
        },
        {
        title4:'Морс',
        sostav4: ['Вода', 'ягода',],
        price4: '50 руб за 200 гр.',    
        }],

        
    },    

];    

 
//let Me = Menu[0];
//console.log(Me);

//let Me2 = Menu[1];
//console.log(Me2);

//let Me3 = Menu[2];
//console.log(Me3);


Menu.pop();
        
console.log(Menu);


//console.log(Menu);


Menu.unshift(`MenuOnTuesday`);
console.log(Menu);


const titel1 = 80 // себестоимость затрат на Шулэн 

let price1 = 100;
let price2 = [40, 35];
let price3 = [ 150, 250];
let vyruchka = `выручка ${price - price2[1]}`;
console.log(vyruchka);
let dohod = `чистая прибыль с блюда Шулэн ${price1 - titel1} рублей`;
console.log(dohod);


//let cars = ['BMW', "Jeep", "Mersedez"];

//cars.pop();

//console.log(cars);


//let monitor = Menu[0]. MenuOnMonday[3]. sostav4[1];  
//console.log(monitor); 
//let title2 = Menu[0]. MenuOnTuesday[2]. sostav3[2];
//console.log(title2);