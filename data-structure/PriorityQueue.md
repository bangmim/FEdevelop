## 우선순위 큐

- 일반적으로 힙을 이용해 구현한다.
- 데이터 개수가 N개 일 때, 구현 방식에 따른 시간 복잡도는 다음과 같다.
    - 리스트 자료형 : 삽입시간 O(1) | 삭제시간 O(N)
    - 힙(Heap)형 : 삽입시간 O(logN)| 삭제시간 O(logN)

- 일반적인 형태의 큐는 선형적인 구조를 가진다.
- 반면에 우선순위 큐는 이진트리 구조를 사용하는 것이 일반적이다.

- 완전 이진 트리 : 모든 노드가 왼쪽 자식부터 차근차근 채워진 트리이다.

- 자바스크립트에서 사용하려면 힙 라이브러리를 사용하도록 한다.

```js
let pq = new PriorityQueue(function a,b){
    return a.cash-b.cash;
}

pq.enq({cash:250, name:'Doohyun Kim'});
pq.enq({cash:300, name:'Gildong Hong'});
pq.enq({cash:150, name:'Minchul Han'});

console.log(pq.size()); // 3
console.log(pq.deq()); // {cash:300,name:'Gildong Hong'};
console.log(pq.peek()); //{cash:250, name:'Doohyun kim'};
console.log(pq.size()); //2
```
