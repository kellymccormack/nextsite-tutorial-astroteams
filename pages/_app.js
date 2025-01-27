// Components
import { Layout } from "../components/Layout/Layout.js";

// Global CSS
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>;
}

export default MyApp;
