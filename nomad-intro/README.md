# NextJS Introduction

## framework

nextjs는 프레임워크로써 개발자는 구축되어있는 곳에 코드를 작성 해야 한다.

React.js는 우리가 원할 때 부르고 사용하는 library이다.

## pages

pages폴더안에 각 페이지에 해당되는 컴포넌트를 입력하면 파일이 페이지 역할을 한다.  
export default를 반드시 입력해야하고,component이름은 중요하지 않습니다. 파일명이 url pathname이 됩니다.  
next.js의 좋은 점이 404page를 알아서 생성해준다는 점이다.  
유의할 점은 index.js는 url이 자동적으로 "/"가 됩니다.

## static Pre Rendering

앱에있는 페이지들이 미리 렌더링되는 특징이 있는데 static(정적)으로 이루어집니다.
react.js에서 사용되는 CSR방식은 빈 html파일을 가져고 브라우저에서 html을 요청 -> 자바스크립트 요청 -> react 요청 과 같은 방식으로 처리되는데
next.js의 경우 서버에서 html을 이미 렌더링해서 가져오고, 그 html을 페이지의 소스코드에 넣어줍니다.
그럼 유저는 자바스크립트와 react.js가 로딩되지 않았더라도 콘텐츠를 볼 수 있게 됩니다.

## Routing

routing을 할때 a태그를 사용하면 전체페이지를 새로고침하기 때문에 Link를 사용해준다.(from "next/link")

```
			<Link href="/">
				<a>Home</a>
			</Link>
```

Link는 href만 넣어주고 a태그에 classname과 style등을 설정해준다.
