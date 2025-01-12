declare module 'react-slick' {
    import * as React from 'react';

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        swipeToSlide?: boolean;
        touchThreshold?: number;
        responsive?: Array<{
            breakpoint: number;
            settings: Partial<Settings>;
        }>;
    }

    export default class Slider extends React.Component<Settings> {}
}
