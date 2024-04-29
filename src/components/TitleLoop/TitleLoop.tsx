import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

export const TitleLoop = () => {
    const { t } = useTranslation('home');

    const titles: string[] = [
        `${ t('title_1') }`,
        `${ t('title_2') }`,
        `${ t('title_3') }`,
        `${ t('title_4') }`,
        `${ t('title_5') }`,
        `${ t('title_6') }`,
    ];

    return (
        <div className='font-circularbold mt-2 text-xl md:text-lg lg:text-3xl bg-gradient-to-t from-glovooker-blue-100 to-glovooker-green-100 text-transparent bg-clip-text'>
            <Typewriter
                options={ {
                    strings: titles,
                    autoStart: true,
                    loop: true,
                } }
            />
        </div>
    );
};
