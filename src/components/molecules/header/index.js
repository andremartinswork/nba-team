import React from 'react';
import styled from 'styled-components';

import {
  H2
} from '../../atoms';

import {
  Top
} from './styles';

function Header({
  title,
}) {
  return (
    <Top>
      <H2>{title}</H2>
    </Top>
  )
}

export default Header;