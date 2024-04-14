import { useEffect } from 'react';
import Routing from './Routing';

export default function App () {

    useEffect(() => {
        const faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        faviconLink.id = 'favicon';

        faviconLink.href = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? '/favicon.ico'
            : '/favicon_dark.ico';

        document.head.appendChild(faviconLink);

        const changeFavicon = (e: MediaQueryListEvent) => {
            faviconLink.href = e.matches ? '/favicon.ico' : '/favicon_dark.ico';
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeFavicon);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', changeFavicon);
        };
    }, []);

    return <Routing />;
}
