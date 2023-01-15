import '../styles/globals.css'
import '../src/Layout/Layout.css'
import Layout from '../src/Layout/Layout'

export default function App({ Component, pageProps }) {
  return (
  <>
      {/* <!----===== Boxicons CSS ===== --> */}
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
