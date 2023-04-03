// Напишите функцию принимающую два числа и возвращающую меньшее из них.
let a = prompt ('Введите число а');
let b = prompt ('Введите число b');
function naimenshee(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
//console.log(a)
//console.log(b)
let vivod = naimenshee(a,b);
console.log(vivod)


