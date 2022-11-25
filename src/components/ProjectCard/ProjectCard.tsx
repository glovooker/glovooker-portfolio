import { useTranslation } from 'react-i18next';

export type ProjectCardProps = {
  img?: string;
  title: string;
  desc: string;
  tags: string[];
  categ?: string;
  icon?: string;
  showTags?: boolean;
  showAuthor?: boolean;
};

const ProjectCard = ({
  img,
  title,
  desc,
  tags,
  categ,
  icon,
  showTags = true,
  showAuthor = true,
}: ProjectCardProps) => {
  const { t } = useTranslation('projects');

  return (
    <div className='overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto'>
      <a
        href='#'
        className='w-full block h-full'
      >
        <img
          alt={title + ' Cover'}
          src={img}
          className='max-h-40 w-full object-cover'
        />
        <div className='bg-white w-full p-4'>
          <p className='text-glovooker-green-100 text-md font-bold'>{categ}</p>
          <p className='text-gray-800 text-2xl font-circularblack mb-2'>
            {t(title)}
          </p>
          <p className='text-gray-400 font-light text-md'>{t(desc)}</p>
          {showTags && (
            <div className='flex justify-starts items-center mt-4 overflow-x-auto scrollbar-tag pb-2'>
              {tags.map((tag) => {
                return (
                  <div
                    key={tag}
                    className='text-xs min-w-fit mr-2 py-1.5 px-4 text-white font-medium bg-glovooker-green-100 rounded-2xl'
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
