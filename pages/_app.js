import '../styles/globals.css'
import AppBar from "../common/app-bar/AppBar";

function MyApp({ Component, pageProps }) {
  return (
	<div>
	  <AppBar />
	  <Component {...pageProps} />
	</div>
  );
}

export default MyApp
