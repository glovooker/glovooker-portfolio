import { useRef } from 'react';
import withBasicLayout from '../layout/basicLayout';
import AboutMe from '../sections/AboutMe';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';

export type SectionsReferences = {
  [key: string]: {
    ref: React.RefObject<HTMLElement>;
    scrollTo: () => void;
  };
};

export const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutMeRef = useRef<HTMLElement>(null);

  const sectionsRef: SectionsReferences = {
    heroRef: {
      ref: heroRef,
      scrollTo: () => {
        heroRef.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    aboutMeRef: {
      ref: aboutMeRef,
      scrollTo: () => {
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  };

  return (
    <div>
      <Hero
        reference={heroRef}
        sectionsRef={sectionsRef}
      />
      <Stats />
      <AboutMe
        title={'title'}
        description={['description_1', 'description_2', 'description_3']}
        reference={aboutMeRef}
        sectionsRef={sectionsRef}
        isLeft={true}
      />
    </div>
  );
};

export default withBasicLayout(Home);
