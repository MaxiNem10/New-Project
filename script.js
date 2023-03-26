let helloMessage

function setSayHello(name) {
  helloMessage = 'Привет, ' + name + '!'; // запишет в переменную helloMessage Привет + имя
}

setSayHello('Иван'); // запишет в helloMessage 'Привет, Иван!'

alert(helloMessage); // выведет 'Привет, Иван!'

setSayHello('Олег'); // запишет в helloMessage 'Привет, Олег!'

alert(helloMessage); // выведет 'Привет, Олег!'