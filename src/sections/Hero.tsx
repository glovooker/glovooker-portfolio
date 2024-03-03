import { Button } from '../components/Button/Button';
import { TitleLoop } from '../components/TitleLoop/TitleLoop';
import { useTranslation } from 'react-i18next';
import { RefObject } from 'react';
import { SectionsReferences } from '../pages/Home';
import InterviewPreview from '../components/InterviewPreview/InterviewPreview';

interface Props {
    reference: RefObject<HTMLElement>;
    sectionsRef: SectionsReferences;
}

const hero = 'https://res.cloudinary.com/glovooker/image/upload/v1702805583/portfolio/about-me.gif';

const Hero: React.FC<Props> = (props) => {
    const { t } = useTranslation('home');

    return (
        <section
            id="hero"
            ref={ props.reference }
            className="bg-gradient-to-tr from-glovooker-blue-100 to-glovooker-green-100 flex relative z-20 items-center justify-center overflow-hidden h-screen"
        >
            <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-center relative py-16">
                <div className="block w-7/12 mt-20 mx-auto lg:hidden relative">
                    <InterviewPreview preview={ hero } />
                </div>
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 mt-12">
                    <span className="w-20 h-2 bg-white mb-12"></span>
                    <h1 className="font-circularblack text-5xl lg:text-7xl 2xl:text-8xl font-black flex flex-col leading-none text-white">
                        Gabriel Lobo
                    </h1>
                    <TitleLoop />
                    <div className="flex mt-10 sm:mt-20">
                        <div className="hidden md:flex">
                            <Button
                                label={ t('about_me').toString() }
                                bgColor="bg-glovooker-chamoisee-100"
                                onClick={ props.sectionsRef.aboutMeRef.scrollTo }
                            />
                            <Button
                                label={ t('my_projects').toString() }
                                bgColor="bg-glovooker-green-100"
                                onClick={ props.sectionsRef.portfolioRef.scrollTo }
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 relative">
                    <InterviewPreview preview={ hero } />
                </div>
            </div>
        </section>
    );
};

export default Hero;
