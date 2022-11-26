import { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionsReferences } from '../pages/Home';
import aboutMe1 from '../assets/img/about_me_1.jpg';
import aboutMe2 from '../assets/img/about-me-2.gif';
import aboutMe3 from '../assets/img/about-me-3.gif';
import { Button } from '../components/Button/Button';
import { FiDownload } from 'react-icons/fi';
import resume from '../assets/Resume.pdf';

interface Props {
  title: string;
  description?: string[];
  isLeft?: boolean;
  reference: RefObject<HTMLElement>;
  sectionsRef: SectionsReferences;
}

const AboutMe = (props: Props) => {
  const { t } = useTranslation('about_me');

  return (
    <section
      id='about'
      ref={props.reference}
      className={`bg-glovooker-green-100 overflow-hidden relative lg:flex lg:items-center`}
    >
      <div className={`py-12 px-16 md:px-8 lg:py-20 lg:px-20 z-20 max-w-4xl`}>
        <h2 className={`text-4xl font-circularblack text-white mb-10`}>
          <span className='block'>{t(props.title)}</span>
        </h2>
        {props.description &&
          props.description.map((description, index) => {
            return (
              <p
                key={'description_' + (index + 1)}
                className={`text-base md:text-lg mt-4 text-white`}
              >
                {t(description)}
              </p>
            );
          })}
        <div className='flex mt-5 sm:mt-10'>
          <a
            href={resume}
            download={'Just My Resume.pdf'}
          >
            <Button
              label={`${t('download_cv')}`}
              bgColor={'bg-glovooker-chamoisee-100'}
              icon={<FiDownload className='ml-2 h-5 w-5' />}
            />
          </a>
        </div>
      </div>

      <div className='flex items-center gap-8 p-8 lg:p-24'>
        <img
          src={aboutMe1}
          className='rounded-lg w-1/2'
          alt='Tree'
        />

        <div>
          <img
            src={aboutMe3}
            className='rounded-lg mb-8'
            alt='Tree'
          />
          <img
            src={aboutMe2}
            className='rounded-lg'
            alt='Tree'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
