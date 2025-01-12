import { RefObject, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionsReferences } from '../pages/Home';
import { Button } from '../components/Button/Button';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser'; // Updated package import
import TextField from '../components/TextField/TextField';
import { getEnvVariables } from '../helper/getEnvVariables';

interface ContactProps {
    reference: RefObject<HTMLElement>;
    sectionsRef: SectionsReferences;
}

const Contact: React.FC<ContactProps> = ({ reference }) => {
    const { t } = useTranslation('contact');

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false); // Loading state for the button
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setToSend((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setSuccessMessage(null);

        const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_USER_ID } = getEnvVariables();

        try {
            await emailjs.send(
                VITE_EMAILJS_SERVICE_ID as string,
                VITE_EMAILJS_TEMPLATE_ID as string,
                {
                    ...toSend,
                    reply_to: toSend.email, // Explicit reply_to mapping
                },
                VITE_EMAILJS_USER_ID as string
            );

            setSuccessMessage(t('success_message')); // Use a translation key for success message
            setToSend({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error('Failed to send email:', error);
            setSuccessMessage(t('error_message')); // Use a translation key for error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            ref={ reference }
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
                    <TextField
                        label={ t('name') }
                        name="name"
                        value={ toSend.name }
                        onChange={ handleChange }
                        isRequired
                    />
                    <TextField
                        label={ t('email') }
                        name="email"
                        value={ toSend.email }
                        onChange={ handleChange }
                        isRequired
                    />
                    <TextField
                        label={ t('message') }
                        name="message"
                        value={ toSend.message }
                        isTextArea
                        onChange={ handleChange }
                        isRequired
                    />
                    <div className="mt-4">
                        <Button
                            label={ loading ? t('sending') : t('contact_me') }
                            icon={ !loading && <FiSend className="ml-2 h-5 w-5" /> }
                            type="submit"
                        />
                    </div>
                    { successMessage && (
                        <p className="mt-4 text-center text-sm text-green-600">{ successMessage }</p>
                    ) }
                </form>
            </div>
        </section>
    );
};

export default Contact;
