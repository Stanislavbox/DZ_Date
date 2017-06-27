Задача №1
написать функцию, которая принимает
год, а возвращает день 1го
января этого года. День должен
быть в русском формате(например
)для 2016 это будет "пятница";

function dateYear(n){
    var options = {
        weekday: 'long'
    };
    
    return new Date(n, 0, 1).toLocaleString('ru', options);
}
console.log(dateYear(2016));
dateYear(2016);

Задача №2
Написать функцию, которая принимает дату в виде строки
"29.03.1985", а возвращает день в русском формате (например, для
 указанной даты это будет)

function dateWeekday(str) {
    var options = {
        weekday: 'long'
        },
        arrStr = str.split('.');
   
    return new Date(arrStr[2], arrStr[1]-1, arrStr[0]).toLocaleString('ru', options);
}
console.log(dateWeekday("29.03.1985"));
dateWeekday("29.03.1985");

Задача №3
Узнать сколько прошло полных недель с начала года(1го января
2017г.) до сегодняшней даты

(function () {
    return `Прошло ${((Date.now() - new Date(2017, 0, 1)) / 604800000).toFixed()} недель с 1 января 2017г.`;
 }());