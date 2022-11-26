export type Avatar = {
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
  let sizeClasses = 'h-16 w-16';
  if (size && size !== 'normal') {
    sizeClasses = size === 'small' ? 'h-10 w-10' : 'h-20 w-20';
  }

  const effectClasses = withHoverEffect
    ? 'hover:scale-150 hover:z-10 transform ease-in-out transition duration-500'
    : '';

  return (
    <div className='flex -space-x-2'>
      {avatars.map((avatar, index) => {
        return (
          <a
            key={avatar.name + index}
            href={avatar.link || undefined}
            target='_blank'
            className={`${effectClasses}`}
          >
            <img
              className={`inline-block ${sizeClasses} rounded-full object-cover ring-2 ring-white`}
              src={avatar.image}
              alt={avatar.name}
            />
          </a>
        );
      })}
    </div>
  );
};
export default Avatars;
