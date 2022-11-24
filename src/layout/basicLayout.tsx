// import Header from 'components/Header/Header';

export const withBasicLayout = (Children: () => JSX.Element) => () => {
  return (
    <div className='flex min-w-screen min-h-screen bg-mawi-gray-100'>
      <main className='pl-20 lg:pl-72 w-full'>
        <Children />
      </main>
    </div>
  );
};

export default withBasicLayout;
