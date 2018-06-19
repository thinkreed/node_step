var dayjs = require('dayjs')
var time = dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A')
console.log(time);
console.log(dayjs().add(1, 'year'));
console.log(dayjs('2018-09-09'));