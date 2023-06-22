import Alert from '../alert'
import { Footer } from '../Footers';
import Meta from '../meta';

export const Layout = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-off-white">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
