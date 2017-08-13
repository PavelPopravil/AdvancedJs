var list = $('.list');
var child = list.find('li');

function getFirstItem() {
    resetColor();
    if (child) {
        child.first().css('color', 'red');
    }
}

function getLastItem() {
    resetColor();
    if (child) {
        child.last().css('color', 'red');
    }
}

var currentItem = '';

function getNextItem() {
    resetColor();
    if (!currentItem.length) {
        currentItem = child.first();
        currentItem.css('color', 'red');
        return;
    }
    currentItem = currentItem.next();
    if (currentItem !== null) {
        currentItem.css('color', 'red');
    }
}

function getPrevItem() {
    resetColor();
    if (!currentItem.length) {
        currentItem = child.last();
        currentItem.css('color', 'red');
        return;
    }
    currentItem = currentItem.prev();
    if (currentItem !== null) {
        currentItem.css('color', 'red');
    }
}

function resetColor() {
    child.css('color', '')
}
