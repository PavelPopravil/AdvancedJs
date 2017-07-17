!function () {
    'use strict';

    function print(text) {
        console.clear();
        var html = '<div class="output">' + text + '</div>';
        $('body').append(html);
    }

    // BASIC CONSTRUCTORS
    var newObject = new Object(); // создаём пустой объект
    newObject.string = 'hello, I\'m new string in your new object';
    newObject.value = 123;
    print(newObject.string);

    var date = new Date();
    print(date);

    var array = new Array(1, 2, 3, 4 ,5, 6);
    print(array);

    var array2 = new Array(10); // количество пустых элементов массива

    var string = new String('string created width object');
    string.newString = 'second string in object';
    print(string + '<br>' + string.newString);

    var func = new Function('x', 'y', 'return x  - y');
    print(func(100, 70));

    // CUSTOM CONSTRUCTORS
    function Car(manufacturer, model, releaseYear, color, engineCapacity, engineType) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.releaseYear = releaseYear;
        this.color = color;
        this.engineCapacity = engineCapacity + 'L';
        this.enginType = engineType;
    }

    Car.prototype.currentYear = new Date().getFullYear();
    Car.prototype.age = function() {
        return 'Your ' + this.manufacturer + ' ' + this.model + ' has ' + this.enginType + ' type of enginge, has ' + this.engineCapacity + ' capacity, ' + this.color + ' color. This car is ' + (this.currentYear - this.releaseYear) + ' yeards old';
    };

    var vw = new Car('VW', 'Polo', 2016, 'red', 1.6, 'gas');
    var volvo = new Car('Volvo', 'S60', 2009, 'blue', 2.4, 'gas');

    print(vw.age());
    print(volvo.age());

}();