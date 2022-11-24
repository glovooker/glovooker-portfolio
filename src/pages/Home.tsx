import withBasicLayout from '../layout/basicLayout';
import hero from '../assets/img/about-me.gif';
import { Button } from '../components/Button/Button';
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import { ChevronDown } from 'react-feather';
import { TitleLoop } from '../components/TitleLoop/TitleLoop';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation('home');

  return (
    <div className='bg-gradient-to-tr from-glovooker-blue-100 via-glovooker-green-100 to-glovooker-chamoisee-100 flex relative z-20 items-center overflow-hidden h-screen'>
      <div className='container mx-auto px-8 flex relative py-16'>
        <div className='sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 mt-12'>
          <span className='w-20 h-2 bg-white mb-12'></span>
          <h1 className='font-circularblack text-6xl sm:text-8xl font-black flex flex-col leading-none text-white'>
            Gabriel Lobo
          </h1>
          <TitleLoop />
          <div className='flex mt-20'>
            <Button
              label={`${t('about_me')}`}
              bgColor={'bg-glovooker-chamoisee-100'}
              icon={<ChevronDown className='ml-2' />}
            />
            <Button
              onClick={() => window.open('https://github.com/glovooker')}
              bgColor={'bg-[#171515]'}
              icon={<GitHub />}
            />
            <Button
              onClick={() =>
                window.open('https://www.linkedin.com/in/glovooker/')
              }
              bgColor={'bg-[#0077B5]'}
              icon={<Linkedin />}
            />
          </div>
        </div>
        <div className='hidden sm:block sm:w-1/3 lg:w-3/5 relative'>
          <img
            src={hero}
            className='max-w-xs md:max-w-sm m-auto rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default withBasicLayout(Home);
