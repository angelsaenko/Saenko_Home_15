// Повернути на 90 градусів проти часової стрілки відносно заданого напрямку
var nextDirection = function (n) {
    if (n=='north'){
        return 'east';
    }
    if (n=='east'){
        return 'south';
    }
    if (n=='south'){
        return 'west';
    }
    return 'north';
};

// Напрямок з якого ми прийшли
var directionFrom = function (n) {
    if (n=='north'){
        return 'south';
    }
    if (n=='east'){
        return 'west';
    }
    if (n=='south'){
        return 'north';
    }
    if (n=='west'){
        return 'east';
    }
}

// Крок у вільному напрямку (перевірено, що вільно)
var doMove = function (dir) {
    var result = false;
    if (dir=='north'){
        result = north();
    }
    else if (dir=='east'){
        result = east();
    }
    else if (dir=='south'){
        result = south();
    }
    else{
        result = west();
    }
    return result===true ? directionFrom(dir) : result;
}

// Зробити наступний хід і повернути результат
var move = function (prev = '') {
    var direction=nextDirection(prev);
    if (isFree(direction)){
        return doMove(direction);
    }
    direction = nextDirection(direction);
    if (isFree(direction)) {
        return doMove(direction);
    }
    direction = nextDirection(direction);
    if (isFree(direction)){
        return doMove(direction);
    }
    direction = nextDirection(direction);
    if (isFree(direction)){
        return doMove(direction);
    }
}

// Пройти весь поточний рівень
var level = function () {
    map()
    var prev = '',
        step = 0;
    while (step<100 && prev!='next' && prev!='end' && prev!==false){
        prev=move(prev);
        step+=1;
    }
    return step;
}