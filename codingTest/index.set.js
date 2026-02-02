let mySet = new Set();

mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

// 중복X
console.log(`원소의 개수 :${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

mySet.delete(5);

// 원소를 하나씩 출력
for (let item of mySet) console.log(item);