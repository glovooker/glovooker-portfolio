export const getEnvVariables = () => {
    return {
        VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        VITE_EMAILJS_USER_ID: import.meta.env.VITE_EMAILJS_USER_ID,
    };

};
