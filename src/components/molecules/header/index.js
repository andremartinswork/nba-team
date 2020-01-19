import React from 'react';

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