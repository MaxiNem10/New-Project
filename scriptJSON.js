let menu;

fetch("/menu.json")
  .then((response) => response.json())
  //.then((response) => console.log(response))
  .then((response) => {
    menu = response;
    return fetch("/ingridients.json");
  })
  .then ((response) => response.json())
  //.then((response) => console.log(response))
  .then ((ingridientsPrice => {
    menu.forEach(function (item, index, arr) {
    item.priceCooking = item.sostav.reduce(function (sum, item, index, arr) {
        return sum += ingridientsPrice[item.ingridient].price;
    }, 0);
    
    let Sebestoimost = item.priceM - item.priceCooking;
    console.log(`- Блюдо: ${item.name} ; Себестоимость: ${Sebestoimost} руб.`);
    console.log(`цена ингридиентов блюда: ${item.priceCooking} руб.`);
    console.log(`стоимость по меню ${item.priceM} руб.`);
  })
  // Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`.
    let foodVegan = menu.some(function (item,index,arr) {
            return item.sostav.every(function (item, index, arr) {
             return ingridientsPrice[item.ingridient].Vegans;
      
      });
    });
    console.log(foodVegan);

     //Определите, полностью ли у вас вегетарианское меню с помощью `every`.
    let foodVegan1 = menu.every(function (item,index,arr) {
        return item.sostav.every(function (item, index, arr) {
            return ingridientsPrice[item.ingridient].Vegans;
      
       });
    });   
    console.log(foodVegan1);

    let onlyFoodVegan = menu.filter(function (item,index,arr) {
      return item.sostav.every(function (item, index, arr) {
          return ingridientsPrice[item.ingridient].Vegans;
    
     });
  });
  console.log(onlyFoodVegan);

  //   onlyFoodVegan.forEach(function (item, index, arr) {
  //   console.log(item);
  //  });

    let changeMenu = menu.map(function (item, index,arr) {
      return item.name;
    });
    console.log(changeMenu);
}))

.catch(error => console.error(error));
