import React from "react";
import styled from "styled-components";

const Content = styled.div`
    padding-left: 48px;
    padding-top: 8px;
    width: 100%;
    text-align: center;
    font-size: 40px;
`;

function Main() {
  return (
    <>
      <Content>
        <h1>기술 면접 뿌셔보자!</h1>
      </Content>
    </>
  );
}

export default Main;
