// 배열의 원소를 하나씩 확인하여 최댓값과 최솟값을 찾는 문제
// 최댓값과 최솟값 정보를 업데이트한다.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 초기화
let minNum = 1000001;
let maxNum = -1000001;

let cycle = Number(input[0]);
let data = input[1].split(' ').map(Number);

for (i = 0; i < cycle; i++) {
    if (data[i] < minNum) {
        minNum = data[i];
    }
    if (data[i] > maxNum) {
        maxNum = data[i];
    }
}
console.log(minNum, maxNum);
// 원소를 차례대로 하나씩 확인한다는 점에서 시간 복잡도 O(N)로 해결할 수 있다

/**
 reduce()로 가능
 let minValue = data.reduce((a,b)=>Math.min(a,b));
 let maxValue = data.reduce((a,b)=>Math.max(a,b));
 * 
 */
