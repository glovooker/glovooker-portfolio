import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import DropDown from '../DropDown/DropDown';
import logo from '../../assets/img/logo.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import i18next from 'i18next';

interface Props {
  forceMenuOpenInMobile?: boolean;
  forceDDMOpenInMobile?: boolean;
  links?: HeaderLink[];
  ddmItems?: DDMItem[];
  withShadow?: boolean;
  hideGitHubLink?: boolean;
  alignRight?: boolean;
  hideHelp?: boolean;
  withSearchBar?: boolean;
  isFat?: boolean;
  withRequestLink?: boolean;
}
export interface HeaderLink {
  label: string;
  link?: string;
  isSelected?: boolean;
  desc?: string;
  icon?: JSX.Element;
}
export interface DDMItem {
  icon?: JSX.Element;
  label: string;
  desc?: string;
  link?: string;
}

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation('header');

  const [navBackground, setNavBackground] = useState('bg-transparent');
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 170;
      if (show) {
        setNavBackground('bg-glovooker-blue-100');
      } else {
        setNavBackground('bg-transparent');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const languages: DDMItem[] = [
    {
      label: 'en',
    },
    {
      label: 'es',
    },
  ];

  return (
    <div className='fixed z-50 w-full'>
      <nav
        className={`${navBackground} ${props.withShadow ? ' shadow' : ''}${
          props.isFat ? ' py-4' : ''
        } `}
      >
        <div className='max-w-7xl mx-auto px-8'>
          <div className='flex items-center justify-between h-16'>
            <div
              className={`${
                props.alignRight ? 'w-full justify-between' : ''
              } flex items-center`}
            >
              <Link
                className='flex-shrink-0'
                to={'.'}
              >
                <img
                  className='h-12 w-12'
                  src={logo}
                  alt={`${t('logo_alt')}`}
                />
              </Link>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  {props.links?.map((link) => {
                    return (
                      <Link
                        key={link.label}
                        to={link.link || '/'}
                        className={`${
                          link.isSelected ? 'text-white' : 'text-gray-300'
                        }  hover:text-white px-3 py-2 rounded-md ${
                          props.isFat ? 'text-lg' : 'text-md'
                        } font-medium`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='ml-4 flex items-center md:ml-6'>
                {!props.hideGitHubLink && (
                  <a
                    href='https://github.com/Charlie85270/tail-kit'
                    className='p-1 rounded-full text-gray-400 focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                  >
                    <span className='sr-only'>View github</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='30'
                      height='30'
                      fill='currentColor'
                      className='text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200'
                      viewBox='0 0 1792 1792'
                    >
                      <path d='M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z' />
                    </svg>
                  </a>
                )}
                {props.ddmItems && (
                  <div className='ml-3 relative'>
                    <DropDown
                      icon={
                        <svg
                          width='20'
                          fill='currentColor'
                          height='20'
                          className='text-gray-800'
                          viewBox='0 0 1792 1792'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z' />
                        </svg>
                      }
                      withBackground={false}
                      forceOpen={props.forceDDMOpenInMobile}
                      items={props.ddmItems.map((item) => {
                        return { label: item.label };
                      })}
                    />
                  </div>
                )}
              </div>
            </div>

            <LanguageSwitch items={languages} />

            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
              >
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  className='h-8 w-8'
                  viewBox='0 0 1792 1792'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {(isMenuOpen || props.forceMenuOpenInMobile) && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              {props.links?.map((link) => {
                return (
                  <Link
                    key={link.label}
                    to={link.link || '#'}
                    className={`${
                      link.isSelected
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    } block px-3 py-2 rounded-md text-base font-medium`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Header;
