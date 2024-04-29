import { Button } from '../components/Button/Button';
import { TitleLoop } from '../components/TitleLoop/TitleLoop';
import { useTranslation } from 'react-i18next';
import { RefObject } from 'react';
import { SectionsReferences } from '../pages/Home';
import { InteractiveBadge } from '../components/InteractiveBadge/InteractiveBadge';

interface Props {
    reference: RefObject<HTMLElement>;
    sectionsRef: SectionsReferences;
}

const Hero: React.FC<Props> = (props) => {
    const { t } = useTranslation('home');

    return (
        <section
            id="hero"
            ref={ props.reference }
            className="bg-white flex relative z-20 items-center justify-center overflow-hidden h-screen"
        >
            <div className="hidden lg:flex container flex-col lg:flex-row justify-center relative py-16">
                {/* <div className="block w-7/12 mt-20 mx-auto lg:hidden relative">
                    <InteractiveBadge />
                </div> */}
                <div className="w-1/2 flex flex-col relative z-20 mt-12">
                    <span className="w-20 h-2 bg-gradient-to-r from-glovooker-blue-100 to-glovooker-green-100 mb-12"></span>
                    <h1 className="font-circularblack md:text-3xl lg:text-7xl 2xl:text-8xl font-black flex flex-col leading-none bg-gradient-to-t from-glovooker-blue-100 to-glovooker-green-100 text-transparent bg-clip-text">
                        Gabriel Lobo
                    </h1>
                    <TitleLoop />
                    <div className="flex mt-10 sm:mt-20 relative z-20">
                        <div className="hidden md:flex">
                            <Button
                                label={ t('about_me').toString() }
                                onClick={ props.sectionsRef.aboutMeRef.scrollTo }
                            />
                            <Button
                                label={ t('my_projects').toString() }
                                onClick={ props.sectionsRef.portfolioRef.scrollTo }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="block w-1/2 xl:w-full h-full relative z-20">
                <InteractiveBadge />
            </div>
        </section>
    );
};

export default Hero;
