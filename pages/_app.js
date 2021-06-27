// import App from 'next/app'
// this _app.js is top level js, style will across all component
import '../styles.css'
import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {
  return  (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp