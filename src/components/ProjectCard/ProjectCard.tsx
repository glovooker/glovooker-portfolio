import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons/lib';

import { Modal } from '../';

export type TagProps = {
  tagName: string;
  tagColor: string;
  tagBgColor: string;
  tagIcon: IconType;
};

export type ProjectCardProps = {
  index: number;
  img?: string;
  title: string;
  desc: string;
  tags: TagProps[];
  categ?: string;
  icon?: string;
  textColor?: string;
  tagsBgColor?: string;
  showTags?: boolean;
  showAuthor?: boolean;
};

const ProjectCard = ({
  index,
  img,
  title,
  desc,
  tags,
  categ,
  icon,
  textColor,
  tagsBgColor,
  showTags = true,
  showAuthor = true,
}: ProjectCardProps) => {
  const { t } = useTranslation('projects');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='overflow-hidden shadow-lg rounded-lg w-80 md:w-80 cursor-pointer m-auto'>
      <button
        onClick={ () => setShowModal(true) }
        className='w-full block h-full text-left'
        aria-label={ t('open_project', { project: title }).toString() }
      >
        <img
          alt={ title + ' Cover' }
          src={ img }
          className='max-h-40 w-full object-cover'
        />
        <div className='bg-white w-full p-4'>
          <p className={ `${ textColor } text-md font-bold` }>{ categ }</p>
          <p className='text-gray-800 text-2xl font-circularblack mb-2'>
            { t(title) }
          </p>
          <p className='text-gray-400 font-light h-20 text-md'>{ t(desc) }</p>
          { showTags && (
            <div className='flex justify-starts items-center mt-4 overflow-x-auto scrollbar-tag pb-2'>
              { tags?.map((tag) => (
                <div
                  key={ tag.tagName }
                  className={ `text-xs min-w-fit mr-2 py-1.5 px-4 text-white font-medium rounded-2xl ${ tagsBgColor }` }
                >
                  { tag.tagName }
                </div>
              )) }
            </div>
          ) }
        </div>
      </button>
      <Modal
        open={ showModal }
        onClose={ () => setShowModal(false) }
        projectIndex={ index }
      />
    </div>
  );
};

export default ProjectCard;
