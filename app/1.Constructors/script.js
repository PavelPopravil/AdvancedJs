!function () {
    'use strict';

    function print(text) {
        console.clear();
        var html = '<div class="output">' + text + '</div>';
        $('body').append(html);
    }

    // 1.BASIC CONSTRUCTORS
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

    // 2,3.CUSTOM CONSTRUCTORS + PROTOTYPE
    function Car(manufacturer, model, releaseYear, color, engineCapacity, engineType) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.releaseYear = releaseYear;
        this.color = color;
        this.engineCapacity = engineCapacity + 'L';
        this.enginType = engineType;
    }

    /* Любой объект созданный с помощью, какого-либо конструктора, может обратиться к прототипу объекта, за какими либо свойствами
    или методами, присущими всем экзэмплярам объекта */
    Car.prototype.currentYear = new Date().getFullYear();
    Car.prototype.age = function() {
        return 'Your ' + this.manufacturer + ' ' + this.model + ' has ' + this.enginType + ' type of enginge, has ' + this.engineCapacity + ' capacity, ' + this.color + ' color. This car is ' + (this.currentYear - this.releaseYear) + ' yeards old';
    };

    var vw = new Car('VW', 'Polo', 2016, 'red', 1.6, 'gas');
    var volvo = new Car('Volvo', 'S60', 2009, 'blue', 2.4, 'gas');

    print(vw.age());
    print(volvo.age());

    /* Свойство obg.constructor, показывает каким конструктором был создан объект*/
    print(vw.constructor);

    // 4.OBJECT

    function Reactangle(width, height) {
        this.width = width;
        this.height = height;
    }

    Reactangle.prototype.getArea = function() {
        return this.width * this.height;
    };
    /* С помощью метода toSting(), мы можем представить объект в виде строки.*/
    // переопределение метода toString
    Reactangle.prototype.toString = function() {
        return 'Reactangle W: ' + this.width + ', reactanle H: ' + this.height;
    };

    /* Метод ValueOf(), позволяет вернуть значение, представляющее сложный объект*/
    // переопределение метода valueOf
    Reactangle.prototype.valueOf = function() {
        return this.getArea();
    };

    Reactangle.prototype.name = 'Reactanle';

    /* Метод hasOwnProperty(), позволяет выяснить, существует ли определённое свойство или метод у конкретного объекта*/
    var rect1 = new Reactangle(100, 50);
    var rect2 = new Reactangle(20, 100);
    var rect3 = new Reactangle(50, 50);
    var rect4 = new Reactangle(50, 50);

    print(rect1); // по умолчание вызывается метод valueOf
    print(rect2.toString());
    print(rect1 + rect2);

    print('hasOwnPropery("width") ' + rect1.hasOwnProperty('width'));
    print('hasOwnProepry("name") ' + rect1.hasOwnProperty('name')); // false, т.к это свойство прототипа

    /* С помощью ключевого слова in, можно проверить содержит ди то или иное сво-во не только объект, но и его прототип и так далее по цепочке*/
    print('"width" in rect2 ' + ('width' in rect2));
    print('"name" in rect2 ' + ('name' in rect2));

    /* В javascript, переменные, которым мы присваиваем объекты, содержат лишь сслыки на эти объекты.
    Поэтому для сравнения объектов необходимо написать кастомный метод equals() */
    Reactangle.prototype.equals = function(otherObject) {
        return this.width === otherObject.width && this.height === otherObject.height;
    };

    print(rect1.equals(rect2));
    print(rect3.equals(rect4));

    /* Кастомный метод для сравнения объектов compareTO() */
    Reactangle.prototype.compareTo = function(otherObj) {
        return this.getArea() - otherObj.getArea();
    };

    if (rect1 > rect2) {
        print('rect1 > rect2');
    } else if (rect1 < rect2) {
        print ('rect1 < rect2')
    } else if (rect1 === rect2) {
        print ('rect1 === rect2')
    }

    // 5.OOP
    /* Инкапсуляция - сокрытие реализации и данных обхекта. В данном случае, с помощью локальной перменной внутри констуртора,
       мы создаём нужную нам область видимости.  */
    function MyMethods() {

        var closeMethod = function() {
            print('закрытый метод');
        };

        this.openMethod = function() {
            print('открытый метод');
            closeMethod();
        }
    }

    var newMethod = new MyMethods();
    newMethod.openMethod();
    // newMethod.closeMethod Выдаст ошибку.

    /* Наследование */
    function Human(name) { // создаём главный конструктор
        this.name = name;
    }

    Human.prototype.talk = function() {
        return 'Hi my name is ' + this.name;
    };

    function Student(name, school) {
        this.name = name;
        this.school = school;
    }

    function Worker(name, profession ) {
        this.name = name;
        this.profession = profession ;
    }

    // создаём оьбъект с помощью главного конструктора Human
    var human = new Human('name');

    // Экзэмпляр главного объекта - прототип вторичных конструкторов
    Student.prototype = human;
    Worker.prototype = human;

    var pavel = new Student('Pavel', 'gymnasy');
    var sveta = new Worker('Sveta', 'engineer');

    print(pavel.talk());
    print(pavel.school);

    print(sveta.talk());
    print(sveta.profession);

    /* Ключевое слово instanceof проверяет тому ли конструктору принадлежит объект*/
    if (sveta instanceof Worker) {
        print('object sveta is instanceof Worker constructor');
    }

    /* Ключевое слово typeOf, указывает на тип данных обхекта*/
    var test = 'hello';
    print(typeof test); // выведет string
    
    
    // Practice
    function Box(height, width, depth, material) {
        this.height = height;
        this.width = width;
        this.depth = depth;
        this.material = material;
    }

    Box.prototype.getV = function() {
        return this.height * this.width * this.depth;
    };

    Box.prototype.equals = function (otherObj) {
        if (this.width === otherObj.width && this.height === otherObj.height && this.depth === otherObj.depth && this.material === otherObj.material) {
            return 'they are similar';
        } else {
            return 'they are different';
        }
    };

    var box1 = new Box(100, 50, 20, 'wood');
    var box2 = new Box(70, 150, 40, 'steel');
    var box3 = new Box(100, 100, 35, 'paper');
    var box4 = new Box(100, 100, 35, 'paper');

    print(box1.getV());
    print(box1.equals(box2));
    print(box3.equals(box4));

    // array sort
    var humans = [];

    var person1 = new Person(20, 'Oleg');
    var person2 = new Person(22, 'Nadezda');
    var person3 = new Person(54, 'Vasiliy');
    var person4 = new Person(35, 'Sahsa');

    function Person(age, name) {
        this.age = age;
        this.name = name;
        humans.push(this);
    }

    humans.sort(function(a, b) {
        return b.age - a.age;
    });

    console.log(humans);
}();