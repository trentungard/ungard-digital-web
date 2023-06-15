import Head from 'next/head'
import { ComingSoon } from '../components/ComingSoon';
import '../styles/index.css'
import Script from 'next/script';

const UniversalHead = () => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Script 
      type='text/javascript' 
      dangerouslySetInnerHTML={{ __html: `window.smartlook||(function(d) {
        var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
        var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
        c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
        })(document);
        smartlook('init', '1bcffab52314e37eee0758bae3c347b052721f4a', { region: 'eu' });` }} 
    />
  </>
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
