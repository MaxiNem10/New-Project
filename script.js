let Menu =     [
    {
        MenuOnMonday: [{
        title1:'Суп Шулэн',
        sostav: ['Лапша', 'мясо', 'картошка'],
        price1soup: 200, // 'стоимость Шулэна 200 рублей' ,
        },
        {
       title2:'Буузы',
        sostav: ['Тесто', 'фарш говяжий', 'фарш свиной', 'лук'],
        price2boozy: 250, //'стоимость бууз: 40 руб за 1 шт., 35 руб за 1 шт. замороженные',      
        },
        {
        title3:'Цуйван',
        sostav: ['Лапша', 'мясо', 'перец болгарский', 'лук'],
        price3cuyvan: 150, //'стоимость Цуйвана 150 руб за 200 гр., стоимость Цуйвана 250 руб за 400 гр.',    
        },
        {
        title4:'Морс',
        sostav: ['Вода', 'ягода',],
        price4: 50, //'50 руб за 200 гр.',    
        }],
    
        MenuOnTuesday:  [{
    
        title1:'Борщ',
        sostav: ['Капуста', 'мясо курицы', 'картошка'],
        price1: ['120 руб за 200 гр.', '220 руб за 400 гр.'],    
        },
        {
       title2:'Пельмени',
        sostav: ['Тесто', 'фарш говяжий', 'фарш свиной', 'лук'],
        price2: ['100 руб за 120 гр.', '200 руб за 240 гр.'],    
        },   
        {    
        title3:'Пюре с котлетой',
        sostav: ['Картошка', 'фарш', 'подлив', 'лук'],
        price3: ['130 руб за 200 гр.', '260 руб за 400 гр.'],    
        },   
        {
        title4:'Чай',
        sostav: ['Вода', 'пакетик чая',],
        price4: '50 руб за 200 гр.',    
        }],
   },                
   {
    MenuOnThirsday: [{
    title1:'Суп Шулэн',
    sostav: ['Лапша', 'мясо', 'картошка'],
    price1: ['100 руб за 200 гр.', '200 руб за 400 гр.'],    
    },
    {
   title2:'Буузы',
    sostav: ['Тесто', 'фарш говяжий', 'фарш свиной', 'лук'],
    price2: ['40 руб за 1 шт.', '35 руб за 1 шт. замороженные'],    
    },
    {
    title3:'Цуйван',
    sostav: ['Лапша', 'мясо', 'перец болгарский', 'лук'],
    price3: ['150 руб за 200 гр.', '250 руб за 400 гр.'],    
    },
    {
    title4:'Морс',
    sostav: ['Вода', 'ягода',],
    price4: '50 руб за 200 гр.',    
    }],
    
    },
    {
        MenuOnWendsday: [{
        title1:'Суп Шулэн',
        sostav: ['Лапша', 'мясо', 'картошка'],
        price1: ['100 руб за 200 гр.', '200 руб за 400 гр.'],    
        },
        {
       title2:'Буузы',
        sostav: ['Тесто', 'фарш говяжий', 'фарш свиной', 'лук'],
        price2: ['40 руб за 1 шт.', '35 руб за 1 шт. замороженные'],    
        },
        {
        title3:'Цуйван',
        sostav: ['Лапша', 'мясо', 'перец болгарский', 'лук'],
        price3: ['150 руб за 200 гр.', '250 руб за 400 гр.'],    
        },
        {
        title4:'Морс',
        sostav: ['Вода', 'ягода',],
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

const sostav = {
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

sostavsoup = sostav['Лапша'] + sostav['мясо'] + sostav['картошка'];

console.log(sostavsoup)
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



let price1soup = Menu[0].MenuOnMonday[0].price1soup; // изменеие проверка
let price1boozy = Menu[0].MenuOnMonday[1].price2boozy;
let price1cuyvan = Menu[0].MenuOnMonday[2].price3cuyvan;
console.log(price1soup);
console.log(price1boozy);
//console.log(price1cuyvan);

let dohod = `чистая прибыль с блюда Шулэн ${price1soup - sostavsoup} рублей`
//чистая прибыль с бууз ${price2[0]- title2} рублей
//чистая прибыль с замороженных бууз ${price2[1]-title2} рублей
//чистая прибыль с блюда Цуйван со 150 грамм ${price3[0]-title3} рублей;
//чистая прибыль с блюда Цуйван с 250 грамм ${price3[1]-title3} рублей
console.log(dohod);


//for (let i = 0;
//        i < Menu. length;
//        i ++
//){
//    Menu += Menu[i] + '';
//}
//alert (`мое меню ${Menu}`)



//let monitor = Menu[0]. MenuOnMonday[3]. sostav4[1];  
//console.log(monitor); 
//let title2 = Menu[0]. MenuOnTuesday[2]. sostav3[2];
//console.log(title2);


