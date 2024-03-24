import { useRef } from 'react';

import { Animated } from "react-animated-css";
import { FiX, FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaFigma } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { useOutsideClick, useScrollLock } from '../../hooks';
import { Avatars, Button, IconButton } from '../';
import { PROJECTS } from '../../constants/projects';

type ModalProps = {
    projectIndex: number;
    open: boolean;
    onClose: () => any;
};

interface AnimatedProps {
    animationIn: string;
    animationOut: string;
    isVisible: boolean;
    children?: React.ReactNode; // This line allows the component to accept children
}

export const Modal = ({ projectIndex, open, onClose }: ModalProps) => {
    const { lockScroll, unlockScroll } = useScrollLock();
    const { t } = useTranslation('projects');
    const currentProject = PROJECTS[projectIndex];
    const modalRef = useRef<HTMLDivElement>(null);

    useOutsideClick(modalRef, onClose);

    if (open) {
        lockScroll();
    } else {
        unlockScroll();
    }

    return open ? (
        // <Animated animationIn='slideInUp' animationOut='fadeOut' isVisible={ true }>
        <div className='fixed inset-0 flex justify-center z-50'>
            <div className='fixed inset-0 opacity-30 bg-black w-screen h-screen left-0 top-0'></div>
            <div className={ `fixed inset-0 flex justify-center items-center z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none cursor-default md:pt-5` }>
                <div ref={ modalRef } className='relative flex w-10/12 md:w-[70vw] bg-white rounded-2xl shadow-lg py-8 px-2 h-[80vh] lg:p-8 overflow-y-scroll scrollbar-tag'>
                    <IconButton
                        bgColor="white"
                        textColor={ currentProject.textColor }
                        icon={ <FiX /> }
                        onClick={ onClose }
                        className={ `absolute top-0 right-0 mr-0 md:top-4 md:right-1` }
                    />
                    <div className='flex'>
                        <div className='lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center'>
                            <div className='block md:hidden my-5 relative lg:-mx-4 relative-20 lg:-my-4 lg:col-start-1'>
                                <div className='relative space-y-4'>
                                    <div className='flex lg:justify-center items-end justify-center'>
                                        <img
                                            className='w-64 md:w-96 max-h-40 md:max-h-64 rounded-lg shadow-lg object-cover'
                                            width='200'
                                            src={ currentProject.coverImg }
                                            alt={ currentProject.title + 'Cover' }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='ml-auto lg:max-w-2xl pl-10 lg:col-start-2'>
                                <p className={ `text-base leading-6 font-semibold uppercase ${ currentProject.textColor || 'text-glovooker-chamoisee-100' }` }>
                                    { currentProject.categ }
                                </p>
                                <div className='flex w-full items-center justify-between'>
                                    <h4 className='my-4 text-3xl leading-9 font-circularblack text-gray-900 md:text-4xl md:leading-12'>
                                        { t(currentProject.title) }
                                    </h4>
                                    { currentProject.githubLink && (
                                        <div>
                                            <a
                                                href={ currentProject.githubLink }
                                                target='_blank'
                                            >
                                                <span className='flex items-center justify-center flex-shrink-0 h-8 w-8 rounded-full text-white bg-[#1a1d22]'>
                                                    { <FaGithub className='h-6 w-6' /> }
                                                </span>
                                            </a>
                                        </div>
                                    ) }

                                    { currentProject.figmaLink && (
                                        <div>
                                            <a
                                                href={ currentProject.figmaLink }
                                                target='_blank'
                                            >
                                                <span className='flex items-center justify-center flex-shrink-0 h-8 w-8 rounded-full text-white bg-[#e4041d]'>
                                                    { <FaFigma className='h-5 w-5' /> }
                                                </span>
                                            </a>
                                        </div>
                                    ) }
                                </div>
                                <Avatars
                                    avatars={ currentProject.contributors }
                                    withHoverEffect={ true }
                                />
                                <p className='mt-4 text-sm leading-6 text-gray-500 max-h-32 md:max-h-[15vh] overflow-y-auto scrollbar-tag'>
                                    { t(currentProject.longDesc) }
                                </p>
                                <ul className='mt-2 grid grid-cols-7 gap-6 md:mt-8 md:grid lg:grid-cols-3'>
                                    { currentProject.tags.map((tag, index) => {
                                        return (
                                            <li key={ index } className='mt-4 lg:mt-0'>
                                                <div className='flex items-center'>
                                                    <span className={ `flex items-center justify-center flex-shrink-0 h-9 w-9 rounded-full text-white ${ tag.tagBgColor }` }>
                                                        { <tag.tagIcon className='h-5 w-5' /> }
                                                    </span>
                                                    <span className='hidden md:block ml-2 text-xs leading-3 font-medium text-gray-500'>
                                                        { tag?.tagName }
                                                    </span>
                                                </div>
                                            </li>
                                        );
                                    }) }
                                </ul>
                                { currentProject.previewLink && (
                                    <div className='mt-8 mb-8'>
                                        <Button
                                            label={ `${ t('check_it_out') }` }
                                            bgColor={ currentProject.tagsBgColor }
                                            onClick={ () =>
                                                window.open(currentProject.previewLink, '_blank')
                                            }
                                            icon={ <FiExternalLink className='ml-2 h-5 w-5' /> }
                                        />
                                    </div>
                                ) }
                            </div>

                            <div className='hidden md:block mt-10 relative lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1'>
                                <div className='relative space-y-4'>
                                    <div className='flex items-end lg:justify-center justify-center'>
                                        <img
                                            className='w-56 md:w-96 md:max-h-64 rounded-lg shadow-lg object-cover'
                                            width='200'
                                            src={ currentProject.coverImg }
                                            alt={ currentProject.title + 'Cover' }
                                        />
                                    </div>
                                    <div className='hidden md:flex ml-12 justify-center lg:justify-start items-start space-x-4 overflow-auto scrollbar-tag px-2'>
                                        { currentProject?.projectImg?.map((img, index) => {
                                            return (
                                                <img
                                                    key={ currentProject.title + index }
                                                    className='rounded-lg shadow-md max-w-40 h-28 object-cover my-4'
                                                    width='260'
                                                    src={ img }
                                                    alt={ currentProject.title + index }
                                                />
                                            );
                                        }) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </Animated>
    ) : null;
};
