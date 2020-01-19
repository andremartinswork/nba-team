import App from 'next/app'
import React from 'react';
import NProgress from 'nprogress'
import Router from 'next/router'

import {
  Layout,
} from '../src/components/organisms';

import {
  Global,
  ResetCss
} from '../src/styles';

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <ResetCss />
        <Global />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default MyApp;