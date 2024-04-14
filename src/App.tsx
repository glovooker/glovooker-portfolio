import { useEffect } from 'react';
import faviconLight from './assets/favicon.ico';
import faviconDark from './assets/favicon_dark.ico';
import Routing from './Routing';

export default function App () {

    useEffect(() => {
        const faviconLink = document.getElementById('favicon') as HTMLLinkElement || document.createElement('link');
        faviconLink.rel = 'icon';
        faviconLink.id = 'favicon';
        document.head.appendChild(faviconLink);

        const setFavicon = () => {
            faviconLink.href = window.matchMedia('(prefers-color-scheme: dark)').matches ? faviconLight : faviconDark;
        };

        setFavicon();

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', setFavicon);

        return () => mediaQuery.removeEventListener('change', setFavicon);
    }, []);

    return <Routing />;
}
