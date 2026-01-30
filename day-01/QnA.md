## 질문

Git Flow 전략을 사용하는 이유와 주요 브랜치에 대해 설명

## 답변

깃 플로우는 복잡한 프로젝트 개발에서 안정성과 효율성을 향상시키며 버전 관리를 하기 위한 브랜치 관리 전략을 말합니다.
담당자에 따라 이름은 조금씩 다를 수 있지만, 주로 'main', 'dev','feature','release','hotfix'로 역할에 맞게 브랜치를 구분합니다.
그래서 main은 실제 출시 제품의 브랜치이고, 'dev'는 여러 기능을 병합하는 등의 용도로 안전한 개발을 위해 사용하는 브랜치입니다.
그리고 'feature'는 'feature/login', 'feature/dashboard'같이 기능별 이름을 추가해 개발을 진행하는 브랜치이고, 'release'는 출시 버전을 준비해 버저닝하는 브랜치이며, 'hotfix'는 긴급 버그 수정을 위해 사용하는 브랜치입니다.
이렇게 각 브랜치를 역할에 맞게 엄격하게 사용해야, 브랜치 간의 병합과 충돌을 최소화해서 프로젝트의 안정성과 효율정을 높일 수 있습니다.

## 질문 2

Git merge 와 Git pull requests의 차이점을 설명해주세요

## 답변

깃 머지는 단순히 로컬 개발 환경에서 각 브랜치를 병합할 때 사용하는 명령으로, 발생하는 충돌을 직접 해결하기 쉽고 별도의 검토나 승인 없이 빠르게 병합할 수 있습니다.
반면 깃허브 풀 리퀘스트는 원격 저장소에서 다른 개발자와의 협업을 위해 사용하는 기능으로, 병합 전에 코드 리뷰 등의 피드백을 받을 수 있어서 여러 개발자가 변경 사항을 검토하고 토론할 수 있으며, 프로젝트에 따라 관리자 승인이 필요할 수 있기 때문에 더 안전하게 코드를 병합하는 좀 더 구조화된 과정입니다. 그래서 간단한 변경 사항이나 협업을 위한 코드는 되도록 깃허브 풀 리퀘스트 기능을 사용해서 병합하는 것이 좋습니다.

## 질문 3

마크다운 문법 중 코드블록과 인라인 코드의 차이점에 대해 설명해주세요.

## 답변

마크다운 문법에서 코드 블록은 주로 여러 줄의 코드 영역을 표시할 때 사용하는 기능으로, 백틱 기호(<code>\`</code>)를 연속으로 3개씩 사용해 코드의 시작과 끝을 표시합니다.
코드블록은 <code>\`\`\`html</code>과 같이 작성 코드의 언어를 명시할 수 있어서 코드의 가독성을 높이고 코드 하이라이팅을 적용할수도 있습니다.
반면, 인라인 코드는 한 줄의 코드 영역을 표시할 때 사용하는 기능으로,<code>\`background-color\`</code> 백틱 기호 한개씩 코드의 시작과 끝에 사용합니다.
그래서 문장 안에서 코드 부분을 강조하는 용도로 사용합니다.

```css
div {
    color: red;
}
```

CSS 배경 색상은 `background-color`속성을 사용합니다.

## 질문4

타입스크립트 타입 가드에 대해 설명해주세요

## 답변

타입가드는 런타임에서 변수의 타입을 검사하고, 해당 타입에 따라 다른 동작을 수행하도록 처리하는것 을 말합니다.
주로 `typeof`, `instanceof` `in` 연산자로 직접 데이터의 타입을 검사하거나, `is` 키워드를 사용하는 별도의 타입 가드 함수를 제공할 수도 있습니다.
이를 통해 런타임 에러를 방지하고 타입 안정성을 확보할 수 있습니다.

```ts
function isHTMLElement(el: Element | null): el is HTMLElement {
    return el instanceof HTMLElement;
}

const el = document.querySelector('button'); // null
if (isHTMLElement(el)) {
    el.addEvenetListener();
    el.classList.add('btn');
}

if (el instanceof HTMLButtonElement) {
    el.addEventListener();
    el.classList.add('btn');
}
if (typeof el === 'object') {
    el.addEventListener();
    el.classList.add('btn');
}
if (el && 'classList' in el) {
    el.addEventListener();
    el.classList.add('btn');
}
```
