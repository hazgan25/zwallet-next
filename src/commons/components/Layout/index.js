import Head from 'next/head'

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {children}
        </>
    )
}

export default Layout