import React, { useEffect } from 'react'
import Head from 'next/head'
// import { getInitialLocale } from '../src/translations/getInitialLocate'
import { useRouter } from 'next/router';

function Index() {
  const router = useRouter();

  // useEffect(() => {
  //   router.replace('/[lang]', `/${getInitialLocale()}`)
  // })

  return (
    <Head>
      <title>Nba Teams</title>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default Index;