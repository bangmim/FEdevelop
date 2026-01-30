## HTML

- 글자와 상자
  요소가 화면에 출력되는 특성, 크게 2가지로 구분
- 인라인 요소 : 글자를 만들기 위한 요소들
- 블록 요소 : 상자(레이아웃)를 만들기 위한 요소들

### 인라인 요소 (글자 요소)

- 가로, 세로 사이즈를 지정할 수 없음.
- margin, padding : 위/아래는 여백을 정상적으로 추가할 수 없다. 좌/우는 사용할 수 있다.
- 글자 안에 상자를 넣을 수 없다. 인라인 요소 안에 블록요소를 넣을 수 없다.
    - 예시 : <span><div></div></span> // 안된다
- 요소가 수평으로 쌓임. 포함한 콘텐츠 크기만큼 자동으로 줄어듦.
- 예 : span, img, a(다른/같은 페이지로 이동하는 하이퍼링크를 지정하는 요소 Anchor, href: 링크 URL, target: 링크 URL의 표시(브라우저 탭)의 위치), br(줄바꿈 요소. Break), label(라벨 가능 요소(input)의 제목, 레이블/라벨)

### 블록 요소 (상자 요소)

- 콘텐츠 영역을 설정하는 용도
- 부모 요소의 크기만큼 자동으로 늘어남!
- 가로 길이는 계속 늘어나려고함
- 가로/세로 사이즈 지정 가능
- padding, margin : 내부/외부 여백 지정 가능하다
- 블록 안에 블록, 블록 안에 인라인 요소 넣을 수 있다.
- 예 : div, p(글자이지만), h(숫자가 작을수록 더 중요한 제목을 정의), ul(순서가 필요없는 목록의 집합을 의미. Unordered List), li(목록 내 각 항목 List Item),

### 인라인블록 요소

- input: 요소가 수평으로 쌓임. 가로세로 지정할 수 있음
    - type:
        - radio :사용자에게 체크 여부를 그룹에서 1개만 입력 받음. name 속성이 같으면 같은 그룹

```html
<label> <input type="checkbox" /> Apple </label> <label> <input type="checkbox" /> Banana </label>
```

```html
<label> <input type="radio" name="fruits" /> Apple </label> <label> <input type="radio" name="fruits" /> Banana </label>
```

### 테이블 요소

표 요소, 행(Row)과 열(Column)의 집합

```html
<table>
    <tr>
        <td>A</td>
        <td>B</td>
    </tr>
    <tr>
        <td>C</td>
        <td>D</td>
    </tr>
</table>
```

### 전역 속성

<태그 data-이름="데이터"></태그>
요소에 데이터를 지정

```html
<div data-fruit-name="apple">사과</div>
<div data-fruit-name="banana">바나나</div>

<script>
    const els = document.querySelectorAll('div');
    els.forEach((el) => {
        console.log(el.dataset.fruitName); // 자바스크립트에서는 - (하이픈) 작성이 안되기때문에 대문자로 수정
    });
</script>
```
