type ButtonProps = {
    label?: string;
    onClick?: () => void;
    bgColor?: string;
    icon?: JSX.Element;
    type?: 'button' | 'submit' | 'reset';
    isIconOnly?: boolean;
    isFloating?: boolean;
};

export const Button = ({
    label,
    onClick,
    bgColor = 'bg-glovooker-green-100',
    icon,
    type = 'button',
    isIconOnly = false,
    isFloating = false,
}: ButtonProps) => {
    return (
        <button
            className={ `${ isFloating ? 'fixed z-20 bottom-5 right-4 py-2 px-2' : 'flex items-center py-2 px-4 mr-4' } rounded-lg ${ bgColor } border-2 border-transparent text-white text-lg font-circularmedium` }
            onClick={ onClick }
            type={ type }
        >
            { !isIconOnly && label }
            { icon && <span className={ `${ isIconOnly && 'ml-2' }` }>{ icon }</span> }
        </button>
    );
};
