import App from 'next/app'
import React from 'react';
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

import {
  Layout,
} from '../src/components/organisms';

import {
  Global,
  ResetCss
} from '../src/styles';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ResetCss />
        <Global />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}