let fs = require('fs');
let path = require('path');
let input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().split('\n');
/**
 * __dirname이란?
__dirname은 Node.js의 전역 변수로, 현재 실행 중인 스크립트 파일이 있는 디렉토리의 절대 경로를 담고 있습니다.
예를 들어:
index.js가 /Users/mihyunpark/FEdevelop-1/codingTest/index.js에 있다면
__dirname은 /Users/mihyunpark/FEdevelop-1/codingTest입니다

path.join()은 Node.js의 path 모듈 함수로, 여러 경로 조각을 올바르게 합쳐줍니다.
 * 
 */
console.log(input);
