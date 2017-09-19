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
});