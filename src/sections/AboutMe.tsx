import { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionsReferences } from '../pages/Home';
import { Button } from '../components/Button/Button';
import { FiExternalLink } from 'react-icons/fi';
import InterviewPreview from '../components/InterviewPreview/InterviewPreview';

interface AboutMeProps {
    title: string;
    description?: string[];
    isLeft?: boolean;
    reference: RefObject<HTMLElement>;
    sectionsRef: SectionsReferences;
}

const aboutMe1 = 'https://res.cloudinary.com/glovooker/image/upload/v1702802155/portfolio/about_me_1.jpg';
const hero = 'https://res.cloudinary.com/glovooker/image/upload/v1702805583/portfolio/about-me.gif';

const AboutMe: React.FC<AboutMeProps> = (props) => {
    const { t } = useTranslation('about_me');

    const renderDescription = () => {
        return props.description?.map((description, index) => (
            <p
                key={ `description_${ index + 1 }` }
                className={ `text-base md:text-lg mt-4 text-glovooker-green-100 ${ index === 2 ? 'font-bold' : '' }` }
            >
                { t(description) }
            </p>
        ));
    };

    return (
        <section
            id="about"
            ref={ props.reference }
            className="bg-white overflow-hidden relative flex flex-col lg:flex-row lg:items-center"
        >
            <div className="py-12 px-16 md:px-8 lg:py-20 lg:px-20 z-20 justify-center lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-circularblack text-glovooker-green-100 mb-10 max-w-3xl">
                    <span className="block">{ t(props.title) }</span>
                </h2>
                { renderDescription() }
                <div className="flex mt-5 sm:mt-10">
                    <Button
                        label={ t('view_resume').toString() }
                        icon={ <FiExternalLink className="ml-2 h-5 w-5" /> }
                        onClick={ () => window.open('https://drive.google.com/file/d/1RCFSEzpYfF0TRMQGtc1n6efWuFbFoNdw/view?usp=sharing') }
                    />
                </div>
            </div>

            <div className="flex items-center p-8 lg:p-24 justify-center lg:w-1/2">
                <InterviewPreview preview={ hero } />
            </div>
        </section>
    );
};

export default AboutMe;
