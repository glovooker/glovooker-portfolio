import React, { RefObject, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionsReferences } from '../pages/Home';
import aboutMe1 from '../assets/img/about_me_1.jpg';
import aboutMe2 from '../assets/img/about-me-2.gif';
import aboutMe3 from '../assets/img/about-me-3.gif';

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
      <div className={`py-12 px-4 sm:px-8 lg:py-20 lg:px-20 z-20`}>
        <h2 className={`text-3xl font-circularblack text-white sm:text-4xl`}>
          <span className='block'>{t(props.title)}</span>
        </h2>
        {props.description &&
          props.description.map((description) => {
            return (
              <p className={`text-lg mt-4 text-white`}>{t(description)}</p>
            );
          })}
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
