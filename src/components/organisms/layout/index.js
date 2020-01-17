import React from 'react';

import {
  Wrapper,
  Main,
} from './styles';

import {
  Sidebar,
} from '../../molecules';

function Layout(props) {
  const {
    children
  } = props;

  return (
    <Wrapper>
      <Sidebar />
      <Main>
        {children}
      </Main>
    </Wrapper>
  )
}

export default Layout;