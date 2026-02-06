## 스택

- 먼저 들어온 데이터가 나중에 나가는 자료구조
- JavaScript에서 스택을 구현하는 방법 - 배열(array) 자료형
    - push()메서드 : 시간 복잡도는 O(1)
    - pop()메서드 : 삭제, 시간 복잡도는 O(1)

```js
let stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();

let reversed = stack.slice().reverse();
console.log(reversed); //최상단 원소부터 출력
console.log(stack);

/**
 실행 결과
 [1,3,2,5]
 [5,2,3,1]
*/
```

## 연결 리스트로 스택 구현

- 삽입할 때는 머리위치에 데이터를 넣는다.
- 삭제할 때는 머리 위치에서 데이터를 꺼낸다.
