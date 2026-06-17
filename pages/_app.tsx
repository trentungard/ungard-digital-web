import Head from 'next/head'
import { ComingSoon } from '../components/ComingSoon';
import '../styles/index.css'

const UniversalHead = () => (
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
)

function MyApp({ Component, pageProps }) {

  const isMaintenanceMode = parseInt(process.env.NEXT_PUBLIC_IS_MAINTENANCE_MODE) === 1;

  return isMaintenanceMode ? (
    <>
      <UniversalHead />
      <ComingSoon />
    </>
  ) : (
    <>
      <UniversalHead />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
