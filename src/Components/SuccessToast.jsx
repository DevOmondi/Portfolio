import  { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import PropTypes from 'prop-types';

const SuccessToast = ({ message , duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
                  flex items-center space-x-2 bg-green-100 border border-lightGreen 
                  text-green-800 px-4 py-3 rounded-lg shadow-lg
                  transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      role="alert"
    >
      <CheckCircle className="w-5 h-5 text-green-500" />
      <p className="font-medium">{message}</p>
      <button 
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
        className="ml-4 text-green-600 hover:text-green-800 focus:outline-none"
        aria-label="Close"
      >
        <span className="text-xl">&times;</span>
      </button>
    </div>
  );
};

SuccessToast.propTypes = {
    message: PropTypes.string.isRequired,
    duration: PropTypes.number,
    onClose: PropTypes.func,
  };

export default SuccessToast;