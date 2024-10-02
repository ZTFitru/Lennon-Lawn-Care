import './Contact.css'
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const changeFunction = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitBtn = (e) => {
        e.preventDefault();
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <section className='contact-cont'>
            <form onSubmit={submitBtn} className='contact-form'>
                <h1>Contact Us</h1>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={formData.firstName}
                        onChange={changeFunction}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={changeFunction}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={changeFunction}
                        required
                    />
                </div>
                <div>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={changeFunction}
                    />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={changeFunction}
                        required
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
};

export default Contact;
