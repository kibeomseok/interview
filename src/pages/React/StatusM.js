import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    padding-left: 48px;
    padding-top: 8px;
    width: 100%;
`

function StatusM() {
  return (
    <>
        <Content>           
            <p>Q.React의 상태관리 방법에 대해서 설명하시오</p>
            <p>A.리액트의 상태관리에는 context API를 통한 방법 및 MobX, Redux 등의 라이브러리를 사용한 방법이 있다. 그 중 가장 많이 사용하는 Redux는 전역 상태를 생성하고 관리하며, 상태관리 라이브러리 중 가장 압도적으로 많이 사용된다. 리덕스는 컴포넌트에서 액션 크리에이터를 통해 액션을 만들고, 그 액션을 디스패치 함수로 실행시킨다. 그러면 store에서 해당 리듀서로 매칭되는 액션이 있는지 확인하고 스토어에 저장된 상태를 변경해주는 원리로 작동한다. 리덕스는 context api와 다르게 전역 상태 관리 외에도 redux-saga, reduc-thunk 등 추가 라이브러리를 통해 비동기 작업을 쉽게 해줄 수 있는 장점이 있지만, 코드가 많고 복잡하기 때문에 이런 부가기능이 필요하지 않은 소규모 프로젝트에는 context api를 쓰는 것이 나을 수도 있다.</p>
        </Content>
    </>
  )
}

export default StatusM