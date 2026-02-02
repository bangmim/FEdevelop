let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ');
let hour = Number(data[0]);
let minute = Number(data[1]);

if (minute - 45 < 0) {
    minute = minute + 60 - 45;
    hour = hour - 1;
    if (hour < 0) {
        hour = 23;
    }
} else {
    minute = minute - 45;
}
console.log(hour + ' ' + mm);
