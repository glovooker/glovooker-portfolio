import withBasicLayout from '../layout/basicLayout';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
    </div>
  );
};

export default withBasicLayout(Home);
