var list = $('.list');
var child = list.find('li');
var currentItem = '';

function getFirstItem() {
    resetColor();
    if (child) {
        child.first().css('color', 'red');
    }
    currentItem = child.first();
}

function getLastItem() {
    resetColor();
    if (child) {
        child.last().css('color', 'red');
    }
    currentItem = child.last()
}



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
    console.log(currentItem);
    currentItem = currentItem.prev();
    if (currentItem !== null) {
        currentItem.css('color', 'red');
    }
}

function addItem() {
    var newChild = $("<li></li>");
    newChild.text('new item after');
    console.log(newChild);
    list.append(newChild);
}

function deleteItem() {
    if (child.length) {
        list.children().last().remove();
    }
}

function addBeginningItem() {
    if (child.length) {
        var newChild = $('<li></li>', $(document));
        newChild.text('new item before');
        list.prepend(newChild);
    }
}

function resetColor() {
    child.css('color', '')
}
