import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 24px;
`;
const Label = styled.div`
  font-size: 14px;
  color: #414456;
  transition: all 0.3s ease;
`;
const Icon = styled.div`
  color: #81818E;
  transition: all 0.3s ease;
`;
const Item = styled.div`
  border-bottom: 1px solid #F7F4FC;

  a {
    display: inline;
  }

  :nth-child(even) {
    background-color: #F9F9F9;
  }

  /* :last-child {
    :nth-child(even) {
      border-bottom-left-radius: 24px;
      border-bottom-right-radius: 24px;
    }
  } */

  @media (hover: hover) {
    :hover {
      cursor: pointer;

      ${Label} {
        color: #FF7F8B;
        transform: translateX(10px);
      }
      ${Icon} {
        color: #FF7F8B;
      }
    }
  }
`;

export {
  Content,
  Label,
  Icon,
  Item,
}