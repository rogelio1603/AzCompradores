import { globalStyles } from "../shared/global";
// * Component
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {globalStyles}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
