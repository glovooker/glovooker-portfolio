type Avatar = {
  name: string;
  image: string;
  link?: string;
};

type AvatarsProps = {
  size?: 'small' | 'normal' | 'big';
  withHoverEffect?: boolean;
  avatars: Avatar[];
};

const Avatars = ({
  size = 'small',
  withHoverEffect,
  avatars,
}: AvatarsProps) => {
  const sizeClasses = size === 'small' ? 'h-10 w-10' : size === 'big' ? 'h-20 w-20' : 'h-16 w-16';

  const effectClasses = withHoverEffect
    ? 'hover:scale-150 hover:z-10 transform ease-in-out transition duration-500'
    : '';

  return (
    <div className='flex -space-x-2'>
      { avatars.map((avatar, index) => (
        <a
          key={ avatar.name + index }
          href={ avatar.link || undefined }
          target='_blank'
          className={ `${ effectClasses }` }
        >
          <img
            className={ `inline-block ${ sizeClasses } rounded-full object-cover ring-2 ring-white` }
            src={ avatar.image }
            alt={ avatar.name }
          />
        </a>
      )) }
    </div>
  );
};

export { Avatars };
export type { Avatar };
