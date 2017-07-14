!function () {
    'use strict';

    // BASIC CONSTRUCTORS
    var newObject = new Object(); // создаём пустой объект
    newObject.string = 'hello, I\'m new string in your new object';
    newObject.value = 123;
    document.write(newObject.string + '<br>');

    var date = new Date();
    document.write(date + '<br>');

    var array = new Array(1, 2, 3, 4 ,5, 6);
    document.write(array + '<br>');

    var array2 = new Array(10); // количество пустых элементов массива
    console.log(array2);

    var string = new String('string created width object');
    string.newString = 'second string in object';
    document.write(string + '<br>' + string.newString);

    var func = new Function('x', 'y', 'return x  - y');
    document.write(func(100, 70));
}();