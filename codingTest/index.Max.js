let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let max = 0;
let maxIndex = 0;

for (i = 0; i < 9; i++) {
    let data = Number(input[i]);
    if (data > max) {
        max = data;
        maxIndex = i;
    }
}
console.log(max);
console.log(maxIndex + 1);

/**
 let data = input.max(x=>Number(x));
 let max=Math.max(...data);

 console.log(max);
 console.log(input.indexOf(max)+1);
 * 
 */

// 원소를 차례대로 하나씩 확인한다는 점에서 시간 복잡도 O(N)로 해결할 수 있다
