## 알고리즘 문제에서는 적절한 입출력 양식이 주어진다.

1. 첫 번째 단계는 데이터를 입력받거나 생성하는 것
2. 이후에 적절한 알고리즘을 사용하여 도출된 정답을 정확한 형식으로 출력

## 코딩 테스트용 자바스크립트 기본 입력 -fs모듈

- 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용한다.
- 예를 들어 /dev/stdin 파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
- 기능 : 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

```js
let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');
// let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input);
```
