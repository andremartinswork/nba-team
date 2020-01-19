import styled from 'styled-components';

const WrapperPagination = styled.div`
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

    :hover {
      cursor: pointer;
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
  WrapperPagination
}