import React from 'react';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="container-custom min-h-screen flex flex-col justify-between lg:gap-[45px] lg:flex-row mt-[60px]">
      <div className="hidden lg:block">
        <ContactDetails />
      </div>
      <ContactForm />
      <div className="lg:hidden">
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;
