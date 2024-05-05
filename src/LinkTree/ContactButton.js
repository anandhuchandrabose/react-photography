import React from 'react';

const ContactButton = () => {
    const handleDial = () => {
        window.location.href = '+918075255527';
    };

    return (
        <button onClick={handleDial}>Call Us</button>
    );
};

export default ContactButton;
