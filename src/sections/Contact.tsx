import { RefObject, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionsReferences } from '../pages/Home';
import { Button } from '../components/Button/Button';
import { FiSend } from 'react-icons/fi';
import { send } from 'emailjs-com';
import TextField from '../components/TextField/TextField';
import { getEnvVariables } from '../helper/getEnvVariables';

interface ContactProps {
    reference: RefObject<HTMLElement>;
    sectionsRef: SectionsReferences;
}

const Contact: React.FC<ContactProps> = (props) => {
    const { t } = useTranslation('contact');

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
        reply_to: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setToSend({
            ...toSend,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(toSend);

        send(
            getEnvVariables().VITE_EMAILJS_SERVICE_ID as string,
            getEnvVariables().VITE_EMAILJS_TEMPLATE_ID as string,
            toSend,
            getEnvVariables().VITE_EMAILJS_USER_ID as string
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setToSend({
                name: '',
                email: '',
                message: '',
                reply_to: '',
            });
        }
        ).catch((err) => {
            console.log('FAILED...', err);
        });
    };

    return (
        <section
            id="contact"
            ref={ props.reference }
            className="bg-white overflow-hidden relative flex flex-col lg:flex-row lg:items-center"
        >

            <div className="py-12 px-16 w-full md:px-8 lg:py-20 lg:px-20 z-20 justify-center 3xl:w-1/2">
                <h2 className="text-3xl md:text-4xl font-circularblack text-glovooker-chamoisee-100 mb-4 max-w-3xl">
                    <span className="block">{ t('title') }</span>
                </h2>
                <p className="text-glovooker-chamoisee-100 mt-2 mb-8">
                    { t('description') }
                </p>
                <form onSubmit={ handleSubmit }>
                    <TextField label={ t('name').toString() } name={ 'name' } value={ toSend.name } onChange={ handleChange } isRequired />
                    <TextField label={ t('email').toString() } name={ 'email' } value={ toSend.email } onChange={ handleChange } isRequired />
                    <TextField label={ t('message').toString() } name={ 'message' } value={ toSend.message } isTextArea={ true } onChange={ handleChange } isRequired />
                    <Button
                        label={ t('contact_me').toString() }
                        bgColor="bg-glovooker-chamoisee-100"
                        icon={ <FiSend className="ml-2 h-5 w-5" /> }
                        type={ 'submit' }
                    />
                </form>
            </div>
        </section>
    );
};

export default Contact;
