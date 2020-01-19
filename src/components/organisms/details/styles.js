import styled, { css } from 'styled-components';

const Row = styled.div`
  position: relative;
  overflow: hidden;
`;
const Title = styled.div`
  padding-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 18px;
  color: #414456;
  display: flex;
  align-items: center;

  ${({ orange }) => orange && css`
    color: #ff7f8b;
  `}
  ${({ blue }) => blue && css`
    color: #5F80F5;
  `}
`;
const Flex = styled.div`
  display: flex;
`;
const Column = styled.div`
  padding: 32px 24px;
`;
const Label = styled.div`
  color: #D7D6E7;
  font-size: 14px;
  margin-bottom: 16px;

  ${({ orange }) => orange && css`
    color: #ff7f8b;
  `}
  ${({ blue }) => blue && css`
    color: #5F80F5;
  `}
`;
const Text = styled.div`
  font-size: 14px;
  color: #414456;
`;
const Result = styled.div`
  border-top: 1px solid #F7F4FC;
  border-bottom: 1px solid #F7F4FC;
`;
const Icon = styled.div`
  position: absolute;
  color: #FC9B37;
  font-size: 150px;
  bottom: -65px;
  right: 30px;
  opacity: 0.1;
`;

export {
  Row,
  Title,
  Flex,
  Column,
  Label,
  Text,
  Result,
  Icon,
}