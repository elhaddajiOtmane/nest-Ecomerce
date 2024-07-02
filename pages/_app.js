import { useEffect, useState } from "react";
import { useRouter } from 'next/router'; // Import useRouter
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-modal/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import "../public/assets/css/main.css";
import store from "../redux/store";
import Preloader from "./../components/elements/Preloader";
import Hotjar from '@hotjar/browser'; // Import Hotjar

const siteId = 5044480; // Replace with your actual Hotjar site ID
const hotjarVersion = 6;

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter(); // Initialize useRouter

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        if (typeof window !== 'undefined') {
            Hotjar.init(siteId, hotjarVersion); // Initialize Hotjar
        }

        // If you need to track route changes
        const handleRouteChange = (url) => {
            Hotjar.stateChange(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            {!loading ? (
                <Provider store={store}>
                    <StorageWrapper>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </StorageWrapper>
                </Provider>
            ) : (
                <Preloader />
            )}
        </>
    );
}

export default MyApp;
