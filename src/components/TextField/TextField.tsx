import React, { ChangeEvent } from 'react';

type TextFieldProps = {
    label: string;
    value: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isTextArea?: boolean;
    isRequired?: boolean;
};

const TextField: React.FC<TextFieldProps> = ({ label, value, name, onChange, isTextArea = false, isRequired = false }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">{ label }</label>
            { isTextArea ? (
                <textarea
                    className="shadow border appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    defaultValue={ value }
                    name={ name }
                    onChange={ onChange }
                    required={ isRequired }
                />
            ) : (
                <input
                    className="shadow border appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    defaultValue={ value }
                    name={ name }
                    onChange={ onChange }
                    required={ isRequired }
                />
            ) }
        </div>
    );
};

export default TextField;
