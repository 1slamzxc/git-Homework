import React from 'react';

const Contact = ({ contact }) => {
    return (
        <div>
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
        </div>
    );
};

export default Contact;