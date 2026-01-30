## CSS

### 링크방식 (직렬방식)

```html
<link rel="stylesheet" href="./css/main.css" />
```

### import 방식 (병렬방식)

CSS 문서 안에서 또 다른 CSS 문서를 가져와 연결하는 방식

```css
/* main.css */
@import url('./box.css');

// 직렬 연결

div {
    color: red;
    margin: 20px;
}
```

```css
/* box.css */
.box {
    background-color: red;
    padding: 20px;
}
```

### ABC:first-child, ABC:last-child, ABC:nth-child(n)

선택자 ABC 형제요소중 첫번째, 마지막, n번째 요소 선택

### ABC:not(XYZ)

부정 선택자. 선택자 XYZ가 아닌 ABC요소 선택

```css
.fruit *:not(span){     // span태그 제외한 모든 컬러 레드로 변경
    color:red;
}
```

```html
<div class="fruits">
    <span>딸기</span>
    <span>수박</span>
    <div>오렌지</div>
    <p>망고</p>
    <h3>사과</h3>
</div>
```

### ABC::before

가상 요소 선택자. 선택자 ABC 요소의 내부 앞에 내용을 삽입

### ABC::after

가상 요소 선택자. 선택자 ABC 요소의 내부 뒤에 내용을 삽입

```css
.box::before{       // 인라인 요소 추가
    content:"앞!";
}
.box::after{       // 인라인 요소 추가
    content:"뒤!";
}
```

```html
<div class="box">
    <!-- ::before -->
    Content!
    <!-- ::after -->
</div>
```

### [ABC]

속성 선택자. 속성 ABC를 포함한 요소 선택

```css
[disabled] {
    color: red;
}
```

### [ABC="XYZ"]

속성 선택자. 속성 ABC를 포함하고 값이 XYZ인 요소 선택

```css
[type='password'] {
    color: red;
}
```
