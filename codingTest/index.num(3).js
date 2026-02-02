let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
let num = Number(input[0]);
let sum = 0;
for (i = 0; i <= num; i++) {
    sum += i;
}
console.log(sum);
//  시간 복잡도 O(N)

/**
 등차수열의 합 공식 이용
 Sn=N(a+l)/2
let n = Number(input[0]);
 console.log(n*(n+1)/2)
 */
