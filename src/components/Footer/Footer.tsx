import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IconButton } from '..';

export const Footer = () => {
    const year = new Date().getFullYear(); // Dynamically get the current year

    return (
        <footer className="bg-glovooker-chamoisee-100 text-white text-center py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <span className='text-xs md:text-base'>© { year } Gabriel Lobo. All rights reserved.</span>
                <div className='flex'>
                    <IconButton
                        onClick={ () => window.open('https://wa.me/50683833903') }
                        bgColor="bg-[#25d366]"
                        icon={ <FaWhatsapp className="h-5 w-5 md:h-8 md:w-8" /> }
                    />
                    <IconButton
                        onClick={ () => window.open('https://github.com/glovooker') }
                        bgColor="bg-[#171515]"
                        icon={ <FaGithub className="h-5 w-5 md:h-8 md:w-8" /> }
                    />
                    <IconButton
                        onClick={ () => window.open('https://www.linkedin.com/in/glovooker/') }
                        bgColor="bg-[#0077B5]"
                        icon={ <FaLinkedin className="h-5 w-5 md:h-8 md:w-8" /> }
                    />
                </div>
            </div>
        </footer>
    );
};
