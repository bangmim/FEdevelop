const els = document.querySelectorAll('div');
els.forEach((el) => {
    console.log(el.dataset.fruitName); // 자바스크립트에서는 - (하이픈) 작성이 안되기때문에 대문자로 수정
});
