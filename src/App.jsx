import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 650,
        });
    }, []);
    return (
        <>
            <RouterProvider router={router} />
            <Analytics />
            <SpeedInsights />
        </>
    );
}
