import hero from '../assets/img/about-me.gif';
import { Button } from '../components/Button/Button';
import { ChevronDown } from 'react-feather';
import { TitleLoop } from '../components/TitleLoop/TitleLoop';
import { useTranslation } from 'react-i18next';
import { RefObject } from 'react';
import { SectionsReferences } from '../pages/Home';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface Props {
  reference: RefObject<HTMLElement>;
  sectionsRef: SectionsReferences;
}

export const Hero = (props: Props) => {
  const { t } = useTranslation('home');

  return (
    <section
      id='hero'
      ref={props.reference}
      className='bg-gradient-to-tr from-glovooker-blue-100 via-glovooker-green-100 to-glovooker-chamoisee-100 flex relative z-20 items-center overflow-hidden h-screen'
    >
      <div className='container mx-auto px-8 flex flex-col sm:flex-row relative py-16'>
        <div className='block w-7/12 mt-20 mx-auto sm:hidden relative'>
          <img
            src={hero}
            className='m-auto rounded-lg'
          />
        </div>
        <div className='sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 mt-12'>
          <span className='w-20 h-2 bg-white mb-12'></span>
          <h1 className='font-circularblack text-5xl sm:text-8xl font-black flex flex-col leading-none text-white'>
            Gabriel Lobo
          </h1>
          <TitleLoop />
          <div className='flex mt-10 sm:mt-20'>
            <Button
              label={`${t('about_me')}`}
              bgColor={'bg-glovooker-chamoisee-100'}
              onClick={props.sectionsRef.aboutMeRef.scrollTo}
            />
            <Button
              label={`${t('my_projects')}`}
              bgColor={'bg-glovooker-green-100'}
              onClick={props.sectionsRef.portfolioRef.scrollTo}
            />
            <div className='hidden md:flex'>
              <Button
                onClick={() => window.open('https://github.com/glovooker')}
                bgColor={'bg-[#171515]'}
                icon={<FaGithub className='h-8 w-8' />}
              />
              <Button
                onClick={() =>
                  window.open('https://www.linkedin.com/in/glovooker/')
                }
                bgColor={'bg-[#0077B5]'}
                icon={<FaLinkedin className='h-8 w-8' />}
              />
            </div>
          </div>
        </div>
        <div className='hidden sm:block sm:w-1/3 lg:w-3/5 relative'>
          <img
            src={hero}
            className='max-w-xs md:max-w-sm m-auto rounded-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
