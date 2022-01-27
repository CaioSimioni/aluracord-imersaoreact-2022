import Head from "next/head";
import appConfig from '../config.json';

export default () => {
    return (
        <>
            <Head>
                <title>{appConfig.name}</title>
            </Head>
            <div>Página do chat</div>
        </>

    )
}