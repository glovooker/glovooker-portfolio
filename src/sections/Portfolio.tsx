// import FormSubscribe from '../../form/layout/FormSubscribe';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { PROJECTS } from '../constants/projects';
import { useTranslation } from 'react-i18next';

export type PortfolioProps = {
  withSearch?: boolean;
};

const Portfolio = ({ withSearch = false }: PortfolioProps) => {
  const { t } = useTranslation('portfolio');

  return (
    <div className='w-full bg-glovooker-blue-100 p-12'>
      <div className='header font-circularblack flex items-end justify-between mb-12'>
        <div className='title'>
          <p className='text-5xl font-bold text-white mb-4'>{t('title')}</p>
          <p className='text-lg font-circular text-white'>{t('description')}</p>
        </div>
        {/* {props.withSearch && (
          <div className='text-end'>
            <FormSubscribe
              label='Search'
              placeholder='Enter a title'
            />
          </div>
        )} */}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12'>
        {PROJECTS.map((PROJECT) => {
          return (
            <ProjectCard
              key={PROJECT.title}
              tags={PROJECT.tags}
              title={PROJECT.title}
              categ={PROJECT.categ}
              img={PROJECT.img}
              desc={PROJECT.desc}
              showAuthor={false}
              showTags={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
