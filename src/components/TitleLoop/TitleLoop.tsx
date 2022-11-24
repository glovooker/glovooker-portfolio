import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

export const TitleLoop = () => {
  const { t } = useTranslation('home');

  const titles: string[] = [
    `${t('title_1')}`,
    `${t('title_2')}`,
    `${t('title_3')}`,
    `${t('title_4')}`,
    `${t('title_5')}`,
    `${t('title_6')}`,
  ];

  return (
    <div className='font-circular mt-2 text-xl sm:text-3xl text-white'>
      <Typewriter
        options={{
          strings: titles,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};
