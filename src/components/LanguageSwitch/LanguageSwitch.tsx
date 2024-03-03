import i18next from 'i18next';
import { useEffect, useRef, useState, useCallback } from 'react';
import { DDMItem } from '../Header/Header';
import { useTranslation } from 'react-i18next';

interface Props {
    forceOpen?: boolean;
    items: DDMItem[];
}

const LanguageSwitch = (props: Props) => {
    const { t } = useTranslation('header');

    const [showList, setShowList] = useState(false);
    const [selectedItem, setSelectedItem] = useState<DDMItem>(props.items[0]);
    const panelResultElement = useRef<HTMLDivElement>(null);
    const selectButton = useRef<HTMLButtonElement>(null);
    const handleClickOutside = useCallback((event: any) => {
        const myHTMLWrapper = panelResultElement.current;
        const searchElement = selectButton.current;
        if (
            myHTMLWrapper &&
            searchElement &&
            !myHTMLWrapper.contains(event.target) &&
            !searchElement.contains(event.target)
        ) {
            setShowList(false);
        }
    }, []);

    const handleLanguageChange = (lng: string) => {
        i18next.changeLanguage(lng);
    };

    const handleLanguageSwitch = (item: DDMItem) => {
        setSelectedItem(item);
        handleLanguageChange(item.label);
        setShowList(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className='w-44'>
            <div className='mt-1 ml-10 relative'>
                <button
                    type='button'
                    ref={ selectButton }
                    onClick={ () => setShowList(!showList) }
                    className='relative w-full bg-transparent rounded-md pl-3 pr-10 py-3 text-right border-2 border-white text-white focus:border-gray-300 focus:text-gray-300 cursor-pointer sm:text-md'
                >
                    <span className='flex items-center justify-center'>
                        <span className='ml-3 block truncate'>
                            { t(selectedItem?.label) }
                        </span>
                    </span>
                    <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                        <svg
                            className='h-5 w-5 text-white focus:text-gray-300'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </span>
                </button>

                { (showList || props.forceOpen) && (
                    <div
                        ref={ panelResultElement }
                        className='absolute mt-1 w-full z-10 rounded-md bg-white shadow-lg'
                    >
                        <ul
                            tabIndex={ -1 }
                            role='listbox'
                            aria-labelledby='listbox-label'
                            aria-activedescendant='listbox-item-3'
                            className='max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
                        >
                            { props.items.map((item) => {
                                return (
                                    <li
                                        key={ item.label }
                                        onClick={ () => handleLanguageSwitch(item) }
                                        id='listbox-item-1'
                                        role='option'
                                        className='text-glovooker-chamoisee-100 cursor-pointer select-none hover:bg-glovooker-chamoisee-100 hover:text-white relative py-2 pl-3 pr-9'
                                    >
                                        <div className='flex items-center'>
                                            <span className='ml-3 block font-normal truncate'>
                                                { t(item.label) }
                                            </span>
                                        </div>
                                    </li>
                                );
                            }) }
                        </ul>
                    </div>
                ) }
            </div>
        </div>
    );
};
export default LanguageSwitch;
