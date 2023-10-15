type ButtonProps = {
  label?: string;
  onClick?: () => void;
  bgColor?: string;
  icon?: JSX.Element;
};

export const Button = ({
  label,
  onClick,
  bgColor = 'bg-glovooker-green-100',
  icon,
}: ButtonProps) => {
  return (
    <button
      className={ `flex items-center py-2 px-4 rounded-lg ${ bgColor } border-2 border-transparent text-white text-lg font-circularmedium mr-4` }
      onClick={ onClick }
    >
      { label }
      { icon && <span className="ml-2">{ icon }</span> }
    </button>
  );
};
