import { useState } from 'react';
import { FaPlay } from "react-icons/fa6";

const InterviewPreview = ({ preview }: { preview: string; }) => {
    const [isHovered, setIsHovered] = useState(false);
    const interviewUrl = "https://www.youtube.com/watch?v=er7WuC09n78&ab_channel=UniversidadCENFOTEC";

    const openInterview = () => {
        window.open(interviewUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className="relative flex justify-center items-center overflow-hidden rounded-lg w-fit m-auto"
            onMouseEnter={ () => setIsHovered(true) }
            onMouseLeave={ () => setIsHovered(false) }
            onClick={ openInterview }
            style={ { cursor: 'pointer' } }
        >
            <img src={ preview } alt="Interview Preview" className="w-auto m-auto rounded-lg" />
            { isHovered && (
                <div className="absolute inset-0 flex justify-center items-center w-auto m-auto bg-glovooker-blue-100 bg-opacity-25 transition-all duration-3000 ease-in-out">
                    <FaPlay className="w-12 h-12 fill-white" />
                </div>
            ) }
        </div>
    );
};

export default InterviewPreview;
