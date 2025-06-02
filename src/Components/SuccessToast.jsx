import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import PropTypes from "prop-types";

const SuccessToast = ({ message, duration = 3000, onClose }) => {
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
              flex items-center space-x-2 bg-green-600 border-2 border-green-700 
              text-white px-4 py-3 rounded-lg shadow-2xl
              transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
      role="alert"
    >
      <CheckCircle className="w-6 h-6 text-green-200" />
      <p className="font-bold">{message}</p>
      <button
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
        className="ml-4 text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
        aria-label="Close"
      >
        <span className="text-xl font-bold">&times;</span>
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
