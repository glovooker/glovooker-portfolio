type IconButtonProps = {
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  icon?: JSX.Element;
  className?: string;
};

export const IconButton = ({
  onClick,
  bgColor = 'bg-glovooker-green-100',
  textColor = 'text-white',
  icon,
  className,
}: IconButtonProps) => {
  return (
    <button
      className={ `flex items-center py-2 px-4 rounded-lg ${ bgColor } border-2 border-transparent text-3xl font-circularmedium mr-4 ${ textColor } ${ className }` }
      onClick={ onClick }
    >
      { icon }
    </button>
  );
};
