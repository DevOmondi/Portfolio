// import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import PropTypes from 'prop-types';

const WhatsAppButton = ({ 
  phoneNumber = "254796307877",
  message = "Hello! I have a question about your services.", 
  buttonText = "Holla at me :)",
  position = "right",
  customStyles = {},
}) => {
  // Format the phone number (remove any non-numeric characters)
  const formattedNumber = phoneNumber.replace(/[^\d]/g, '');
  
  // Create the WhatsApp URL with encoded message
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
  
  // Define position styles
  const positionStyles = {
    right: 'fixed bottom-6 right-6',
    left: 'fixed bottom-6 left-6',
  };
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${positionStyles[position]} flex items-center gap-2 bg-[#26d466ff] hover:bg-green-600 text-white font-medium py-3 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-50`}
      style={customStyles}
      aria-label="Contact us on WhatsApp"
    >
      <BsWhatsapp className="w-5 h-5" />
      <span>{buttonText}</span>
    </a>
  );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right']),
  customStyles: PropTypes.object,
};
export default WhatsAppButton;