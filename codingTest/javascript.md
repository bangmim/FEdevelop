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

## 배열 초기화 방법
```js
//  직접 값을 설정하여 초기화
let arr=[1,2,3,4,5]

// 길이가 5이고 모든 원소 값이 0인 배열 초기화
let arr= new Array(5).fill(0)
```

## 집합 자료형
- 특정한 원소의 등장 여부를 파악할 때 집합 자료형을 효과적으로 사용할 수 있다.
```js
let mySet = new Set();

mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소의 개수 :${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

mySet.delete(5);

// 원소를 하나씩 출력
for(let item of mySet)console.log(item);
```

## 소수점 아래 특정 자리에서 반올림 : toFixed()
```js
let x = 123.456;
console.log(x.toFixed(2));
```

## 이스케이프 시퀀스
- 예약 문자 혹은 특수 문자를 출력하기 위하여 이스케이프 시퀀스를 사용할 수 있다.
₩t : 탭
₩₩:역슬래시
₩":큰따옴표
₩':작은따옴표

```js
console.log("그는 \"비범함\"을 보였다.")
```