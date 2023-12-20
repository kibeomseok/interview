import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    padding-left: 48px;
    padding-top: 8px;
    width: 100%;
`

function LifeCycle() {
  return (
    <>
        <Content>
            <p>Q.React의 라이프사이클에 대해 설명해주세요</p>
            <p>A.리액트는 컴포넌트 기반의 View를 중심으로 한 라이브러리이다. 그러다보니 각각의 컴포넌트에는 라이프사이클 즉, 컴포넌트의 수명 주기가 존재한다. 컴포넌트의 수명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이난다. 라이프 사이클은 총 9개의 과정이 존재하는데 크게는 컴포넌트가 처음 실행될때인 Mount, 데이터에 변화가있을때인 Update, 컴포넌트가 제거 될때인 Unmount이렇게 세개로 나눌 수 있다.</p>
        </Content>
    </>
  )
}

export default LifeCycle