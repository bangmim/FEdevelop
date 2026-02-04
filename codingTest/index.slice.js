let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let C = Number(input[0]);
for (let i = 1; i <= C; i++) {
    let row = input[i].split(' ').map(Number);
    // 학생수
    let n = row[0];
    // 점수만 추출
    let score = row.slice(1);
    // 평균 구하기
    let sum = score.reduce((a, b) => a + b, 0);
    let avg = sum / n;

    // 평균이 넘는 학생 수
    let count = score.filter((i) => i > avg).length;

    // 비율
    let ratio = ((count / n) * 100).toFixed(3);
    console.log(`${ratio}%`);
}
