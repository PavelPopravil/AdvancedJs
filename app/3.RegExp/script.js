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
            var text = document.createElement('p');

            for (var item in args) {
                text.innerHTML +=
                '<div>' + item + ': ' + args[item] + '</div>';
            }
            document.body.appendChild(text);
        },

        init: function () {
            this.btn = document.querySelector('#showParseBtn');
            this.btn.addEventListener('click', function () {
                app2.printParsedQuries();
            });
        }
    };

    app2.init();
});