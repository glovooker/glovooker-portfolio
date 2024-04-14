import { useEffect } from 'react';
import Routing from './Routing';

export default function App () {

    useEffect(() => {
        const favicon: HTMLLinkElement | null = document.getElementById('favicon') as HTMLLinkElement;

        if (favicon) {
            const mediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

            const handleChange: () => void = () => {
                favicon.href = mediaQuery.matches ? '../favicon.ico' : '../favicon_dark.ico';
            };

            handleChange();

            mediaQuery.addListener(handleChange);

            return () => mediaQuery.removeListener(handleChange);
        }
    }, []);

    return <Routing />;
}
