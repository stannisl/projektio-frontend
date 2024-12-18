import GlobalStyles from '../styles/GlobalStyles';

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;