let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let num = Number(input[0]);
let result = '';
// 층 마다 반복
for (i = 0; i < num; i++) {
    // 현재 행만큼 별을 출력
    for (j = 0; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);
