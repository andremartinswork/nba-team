import styled, { css } from 'styled-components';

const Block = styled.div`
  -webkit-box-shadow: 0px 0px 12px -1px rgba(41,39,95,0.06);
  -moz-box-shadow: 0px 0px 12px -1px rgba(41,39,95,0.06);
  box-shadow: 0px 0px 12px -1px rgba(41,39,95,0.06);
  border-radius: 24px;
  background-color: white;

  ${({ withMargin, bottom }) => withMargin && bottom && css`
    margin-bottom: 120px;
  `}
`;

export default Block;