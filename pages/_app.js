import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../utils/redux/store/configStore";

import "../styles/_main.scss";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
