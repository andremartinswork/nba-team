import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
const Main = styled.main`
  width: calc(100% - 300px);
  min-height: 100vh;
  margin-left: 300px;
  background-color: #F7F4FC;
  padding-top: 60px;
  padding-left: 112px;
  padding-right: 112px;
  padding-bottom: 140px;
  box-sizing: border-box;

  @media screen and (max-width:1440px) {
    width: calc(100% - 120px);
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export {
  Wrapper,
  Main,
}