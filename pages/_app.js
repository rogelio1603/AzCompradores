// * CONTEXT
import { GlobalProvider } from "../store/GlobalStore";
import { GlobalStyles } from "../shared/global";
// * Component
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}

export default MyApp;
