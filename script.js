let Menu =     [
    {
        MenuOnMonday: [{
        title1:'Суп Шулэн',
        sostav1: ['Лапша', 'мясо', 'картошка'],
        price1soup: 'стоимость Шулэна 100 рублей' ,
        },
        {
       title2:'Буузы',
        sostav2: ['Тесто', 'фарш говяжий', 'фарш свиной', 'лук'],
        price2boozy: 'стоимость бууз: 40 руб за 1 шт., 35 руб за 1 шт. замороженные',      
        },
        {
        title3:'Цуйван',
        sostav3: ['Лапша', 'мясо', 'перец болгарский', 'лук'],
        price3cuyvan: 'стоимость Цуйвана 150 руб за 200 гр., стоимость Цуйвана 250 руб за 400 гр.',    
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


//Menu.pop();       
//console.log(Menu);


//Menu.unshift(`MenuOnTuesday`);
//console.log(Menu);


const titel1 = 80 // себестоимость затрат на Шулэн 
const title2 = 20 // себестоитмоть затрат на буузы 1 шт.
const title3 = 75 // себестоимьсть затрат на Цуйван

let price1 = 100; // цена за Шулэн
let price2 = [40, 35]; // цена за Буузы готовые и замороженные
let price3 = [ 150, 250]; // цена за Цуйван 150 гр и 250 гр.

let price1soup = Menu[0].MenuOnMonday[0].price1soup; // изменеие проверка
let price1boozy = Menu[0].MenuOnMonday[1].price2boozy;
let price1cuyvan = Menu[0].MenuOnMonday[2].price3cuyvan;
console.log(price1soup);
console.log(price1boozy);
console.log(price1cuyvan);

let dohod = `чистая прибыль с блюда Шулэн ${price1 - titel1} рублей
чистая прибыль с бууз ${price2[0]- title2} рублей
чистая прибыль с замороженных бууз ${price2[1]-title2} рублей
чистая прибыль с блюда Цуйван со 150 грамм ${price3[0]-title3} рублей;
чистая прибыль с блюда Цуйван с 250 грамм ${price3[1]-title3} рублей`
console.log(dohod);


//let cars = ['BMW', "Jeep", "Mersedez"];

//cars.pop();

//console.log(cars);


//let monitor = Menu[0]. MenuOnMonday[3]. sostav4[1];  
//console.log(monitor); 
//let title2 = Menu[0]. MenuOnTuesday[2]. sostav3[2];
//console.log(title2);
