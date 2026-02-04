let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let data = input[1].split(' ').map(Number);
// 최고점 찾기
let maxNum = data.reduce((a, b) => Math.max(a, b));

// 새로 평균 구하기
let newData = data.map((i) => {
    return (i / maxNum) * 100;
});
let avg = newData.reduce((a, b) => a + b) / num;

console.log(avg);
