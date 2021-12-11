import { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from 'src/layout';

import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>

        <Head>
             <title>sIMPLE APP  TEST</title>
             <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout main={<Component {...pageProps} />}>
         </Layout>
        </>
    );
}
