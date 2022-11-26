import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useRef } from 'react';
import { PROJECTS } from '../../constants/projects';
import { useTranslation } from 'react-i18next';
import { useScrollLock } from '../../hooks/useScrollLock';
import Avatars from '../Avatars/Avatars';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { Button } from '../Button/Button';
import { FiExternalLink } from 'react-icons/fi';

type ModalProps = {
  projectIndex: number;
  open: boolean;
  onClose: () => any;
};
const Modal = ({ projectIndex, open, onClose }: ModalProps) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const { t } = useTranslation('projects');
  const currentProject = PROJECTS[projectIndex];

  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, onClose);

  open ? lockScroll() : unlockScroll();

  return open ? (
    <div className='flex fixed inset-0 justify-center  z-50'>
      <div className='opacity-30 h-screen w-screen fixed left-0 top-0 bg-[rgba(0,0,0,1)]'></div>
      <div
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto z-50 outline-none focus:outline-none md:pt-5 cursor-auto`}
      >
        <div
          ref={modalRef}
          className='relative w-10/12 md:w-[70vw] bg-white rounded-2xl shadow-lg p-6 max-h-[80vh] lg:px-[4vw] lg:py-[4vh] overflow-y-scroll scrollbar-tag'
        >
          <div className='relative'>
            <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center'>
              <div className='block md:hidden my-5 lg:-mx-4 relative relative-20 lg:-my-4 lg:col-start-1'>
                <div className='relative space-y-4'>
                  <div className='flex items-end justify-center lg:justify-center'>
                    <img
                      className='rounded-lg shadow-lg w-64 md:w-96 max-h-40 md:max-h-64 object-cover'
                      width='200'
                      src={currentProject.coverImg}
                      alt={currentProject.title + 'Cover'}
                    />
                  </div>
                </div>
              </div>

              <div className='lg:col-start-2 lg:max-w-2xl ml-auto pl-10'>
                <p
                  className={`text-base leading-6 ${
                    currentProject.textColor != ''
                      ? currentProject.textColor
                      : 'text-glovooker-chamoisee-100'
                  } font-semibold uppercase`}
                >
                  {currentProject.categ}
                </p>
                <div className='flex w-full items-center justify-between'>
                  <h4 className='my-4 text-3xl leading-9 font-circularblack text-gray-900 md:text-4xl md:leading-12'>
                    {t(currentProject.title)}
                  </h4>

                  {currentProject.githubLink && (
                    <div>
                      <a
                        href={currentProject.githubLink}
                        target='_blank'
                      >
                        <span
                          className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full text-white bg-[#1a1d22]`}
                        >
                          {<FaGithub className='h-6 w-6' />}
                        </span>
                      </a>
                    </div>
                  )}

                  {currentProject.figmaLink && (
                    <div>
                      <a
                        href={currentProject.figmaLink}
                        target='_blank'
                      >
                        <span
                          className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full text-white bg-[#e4041d]`}
                        >
                          {<FaFigma className='h-5 w-5' />}
                        </span>
                      </a>
                    </div>
                  )}
                </div>
                <Avatars
                  avatars={currentProject.contributors}
                  withHoverEffect={true}
                />
                <p className=' mt-4 text-sm leading-6 text-gray-500 max-h-32 md:max-h-[15vh] overflow-y-auto scrollbar-tag'>
                  {t(currentProject.longDesc)}
                </p>
                <ul className='mt-2 md:mt-8 grid grid-cols-7 md:grid lg:grid-cols-3 gap-6'>
                  {currentProject.tags.map((tag, index) => {
                    return (
                      <li
                        key={index}
                        className='mt-4 lg:mt-0'
                      >
                        <div className='flex items-center'>
                          <span
                            className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full text-white ${tag.tagBgColor}`}
                          >
                            {<tag.tagIcon className='h-6 w-6' />}
                          </span>
                          <span className='ml-2 hidden md:block text-sm leading-6 font-medium text-gray-500'>
                            {tag?.tagName}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {currentProject.previewLink && (
                  <div className='mt-8'>
                    <Button
                      label={`${t('check_it_out')}`}
                      bgColor={currentProject.tagsBgColor}
                      onClick={() =>
                        window.open(currentProject.previewLink, '_blank')
                      }
                      icon={<FiExternalLink className='ml-2 h-5 w-5' />}
                    />
                  </div>
                )}
              </div>

              <div className='hidden md:block mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1'>
                <div className='relative space-y-4'>
                  <div className='flex items-end justify-center lg:justify-center'>
                    <img
                      className='rounded-lg shadow-lg w-56 md:w-96 md:max-h-64 object-cover'
                      width='200'
                      src={currentProject.coverImg}
                      alt={currentProject.title + 'Cover'}
                    />
                  </div>
                  <div className='hidden md:flex items-start justify-center lg:justify-start space-x-4 ml-12 overflow-auto scrollbar-tag px-2'>
                    {currentProject?.projectImg?.map((img, index) => {
                      return (
                        <img
                          key={currentProject.title + index}
                          className='rounded-lg shadow-md max-w-40 h-28 object-cover my-4'
                          width='260'
                          src={img}
                          alt={currentProject.title + index}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Modal;
