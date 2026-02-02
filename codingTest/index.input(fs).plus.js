// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 지정하기
// 백준 1000번
// dev/stdin(디바이스/스탠다드인)
// .split('\n'); : 관례적으로 붙임

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');
let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a + b);
