import '../styles/global.css'; // can only be imported in this file 

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}