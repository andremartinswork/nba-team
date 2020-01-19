import React from 'react';
import Head from 'next/head'

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

  const locale = 'en'

  return (
    <Wrapper>
      <Head>
        <title>Nba Team</title>
      </Head>
      <Sidebar locale={locale}/>
      <Main>
        {children}
      </Main>
    </Wrapper>
  )
}

export default Layout;