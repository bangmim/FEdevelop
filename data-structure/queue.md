## Queue

- 먼저 삽입된 데이터가 먼저 추출되는 자료구조
    - 예) 게임 대기 큐는 먼저 대기한 사람이 먼저 게임에 매칭된다.
- 삽입, 삭제에 있어서 O(1)보장
- 머리와 꼬리 두 개의 포인터를 가진다.
- 머리 : 남아있는 원소 중 가장 먼저 들어 온 데이터를 가리키는 포인터
- 꼬리 : 남아있는 원소 중 가장 마지막에 들어 온 데이터를 가리키는 포인터
- 삽입할 때는 꼬리위치에 데이터를 넣는다.

## 큐 동작속도 : 배열 vs 연결 리스트

- 단순히 배열 자료형을 이용할 때보다 연결 리스트를 사용할 때 수행 시간 관점에서 효율적이다.
- Javascript에서는 Dictionary 자료형을 이용하여 큐(queue)를 구현하면 간단하다.

```js
class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    peek() {
        return this.items[this.headIndex];
    }
    getLength() {
        return this.tailIndex - this.headIndex;
    }
}
```

```js
queue = new Queue();
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();
while (queue.getLength() != 0) {
    console.log(queue.dequeue());
}

/**
 실행결과
 3
 7
 1
 4
*/
```
