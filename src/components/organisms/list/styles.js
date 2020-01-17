import styled from 'styled-components';

const Block = styled.div`
  -webkit-box-shadow: 0px 0px 12px -1px rgba(41,39,95,0.06);
  -moz-box-shadow: 0px 0px 12px -1px rgba(41,39,95,0.06);
  box-shadow: 0px 0px 12px -1px rgba(41,39,95,0.06);
  border-radius: 24px;
  background-color: white;
`;
const Header = styled.div`
  padding: 32px;
  display: flex;
`;
const Rows = styled.div``;


const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #F7F4FC;
  height: 80px;

  ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }
  li {
    display: inline-block;
    width: 50px;
    text-align: center;
    font-size: 12px;
    outline: none;
    :focus {
      outline: none;
    }
  }

  .previous {
    width: auto;
    margin-right: 24px;
  }
  .next {
    width: auto;
    margin-left: 24px;
  }
  .selected {
    color: #FD838F;
  }
`;

export {
  Block,
  Header,
  Rows,
  Pagination,
}
