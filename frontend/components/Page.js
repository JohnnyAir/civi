import Head from 'next/head';
function Page({children}) {
    return (
        <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        { children }
      </>
    )
}

export default Page;



