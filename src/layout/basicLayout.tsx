import Header from '../components/Header/Header';
import { HeaderLink } from '../components/Header/Header';
import { useTranslation } from 'react-i18next';

export const withBasicLayout = (Children: () => JSX.Element) => () => {
  const { t } = useTranslation('header');

  const headerLinks: HeaderLink[] = [
    {
      label: `${t('home')}`,
      link: '/',
    },
  ];
  return (
    <div className='flex min-w-screen min-h-screen'>
      <Header
        links={headerLinks}
        hideGitHubLink={true}
        alignRight={true}
        isFat={true}
      />
      <main className='w-screen'>
        <Children />
      </main>
    </div>
  );
};

export default withBasicLayout;
