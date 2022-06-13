import '../styles/global.css'; // can only be imported in this file 
import Layout from '../components/layout';
export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}