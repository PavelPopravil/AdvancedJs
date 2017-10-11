document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var app = {

        timerCount: function () {
            app.count ++;
            app.display.innerText = app.count;
        },

        startTimer: function () {
           this.timer = setInterval(this.timerCount, 1000)
        },

        stopTimer: function () {
          clearInterval(this.timer);
        },

        initHandlers: function () {
            this.startBtn.addEventListener('click', function (e) {
                e.preventDefault();
                app.startTimer();
            });
            this.stopBtn.addEventListener('click', function (e) {
                e.preventDefault();
                app.stopTimer();
            })
        },

        init: function () {
            this.block = document.querySelector('.app');
            if (!this.block) {
                return false;
            }
            this.display = document.querySelector('.timer-display');
            this.startBtn = document.querySelector('#startBtn');
            this.stopBtn = document.querySelector('#stopBtn');
            this.count = 0;
            this.timer = null;
            this.initHandlers();
        }
    };

    app.init();

    //    18 min

    // Парсер строки запроса в URL
    var app2 = {

        getQuerySting: function () {
            var args = {};
            this.searchGet = document.location.search.substring(1);
            if (!this.searchGet.length) {
                return false;
            }
            this.searchItems = this.searchGet.split('&');

            this.searchItems.forEach(function (item, i) {
                var pos = item.indexOf('=');
                if (pos === -1) {
                    // continue;
                }
                var argument = item.substring(0, pos);
                var value = item.substring(pos + 1);
                args[argument] = value;
            });

            return args;
        },

        printParsedQuries: function () {
            var args = this.getQuerySting();
            this.textBlock.innerHTML = "";
            for (var item in args) {
                this.textBlock.innerHTML +=
                '<div>' + item + ': ' + args[item] + '</div>';
            }
        },

        init: function () {
            this.block = document.querySelector('.app-2');
            if (!this.block) {
                return false;
            }
            this.textBlock = document.querySelector('#output');
            this.btn = document.querySelector('#showParseBtn');
            this.btn.addEventListener('click', function () {
                app2.printParsedQuries();
            });
        }
    };

    app2.init();

    // 51 min
    // Строковые методы:
    var strWrp = document.createElement('div');
    var str = 'Объект массив функция';

    // 1) split() - делит строку на подстроки по какому-либо разделителю, возвращает массив.
    var splited = str.split(' ');
    strWrp.innerHTML = splited + '</br>';
    
    // 2) join - склеивает массив по какому-либо соеденителю (создаёт новыую строку).
    var joined = splited.join('</br>');
    strWrp.innerHTML += joined + '</br>';

    // 3) charAt() -  возвращает символ по указанной позиции
    var chr = str.charAt(str.length - 1);
    strWrp.innerHTML += chr + '</br>';

    // 4) indexOf() || lastindexOf() - возвращает позицию искомого элемента в строке.
    var iof = str.indexOf('ъ');
    strWrp.innerHTML += iof + '</br>';

    // 5) subsctring() - возвращает строку между двумя указанными индексами
    var substring = str.substring(0, 6);
    strWrp.innerHTML += substring + '</br>';

    // 6) substr() - возвращает строку указанной длинный, начиная с указанного индекса
    var substr = str.substr(7, str.length - 1);
    strWrp.innerHTML += substr + '</br>';

    // 7) toLowerCase() & toUpperCase();

    document.body.appendChild(strWrp);
});