import { Header } from '../components/Header/Header';

export const withBasicLayout = (Children: () => JSX.Element) => () => {
  return (
    <div className='flex min-w-screen min-h-screen'>
      <Header />
      <main className='w-screen'>
        <Children />
      </main>
    </div>
  );
};

export default withBasicLayout;
