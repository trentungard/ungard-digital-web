import Head from 'next/head'
import { useState } from 'react'
import { ComingSoon } from '../components/ComingSoon';
import { MaintenanceMode } from '../components/MaintenanceMode';
import '../styles/index.css'

function MyApp({ Component, pageProps }) {

  const isMaintenanceMode = parseInt(process.env.NEXT_PUBLIC_IS_MAINTENANCE_MODE) === 1;

  return isMaintenanceMode ? (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ComingSoon />
    </>
  ) : (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
