// import React from 'react'
import { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";

import SuccessToast from "./SuccessToast";

const Contact = () => {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // TODO: Func to handle focus event on name input
  const handleNameInputFocus = () => {
    setNameFocus(!nameFocus);
  };
  // TODO: Func to handle focus event on email input
  const handleEmailInputFocus = () => {
    setEmailFocus(!emailFocus);
  };
  // TODO: Func to handle focus event on message input
  const handleMessageInputFocus = () => {
    setMessageFocus(!messageFocus);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    emailjs
      .sendForm("service_dmr6gkc", "template_stga1fg", "#contactForm", {
        publicKey: "yfm_5e1XddkHTh98_"
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          if(response.status === 200) {
            setShowSuccessToast(true);
          }
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  // console.log(focus)
  return (
    <Element name="target-contact-section">
      <div className="bg-darkGrey ">
        <div>
        {showSuccessToast && (
        <SuccessToast 
          message="Collins will get back to you as soon as possible. 🎊"
          duration={5000}
          onClose={() => setShowSuccessToast(false)}
        />
      )}
        </div>
        <div className="lg:flex lg:w-[85%] mx-auto md:w-[70%] lg:pt-[3rem] lg:justify-between">
          <div className="lg:w-[30%]">
            <h1 className="pt-[3rem] pb-[2rem] text-center lg:text-left text-4xl lg:text-8xl md:text-6xl font-bold">
              Contact
            </h1>
            <p className="mx-[2rem] lg:mx-auto  text-center lg:text-left pb-[3rem] text-sm text-lightGrey">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
            <p className="mx-[2rem] lg:mx-auto font-bold text-center lg:text-left pb-[3rem] text-2xl text-lightGrey">
              +254796307877
            </p>
            <p className="mx-[2rem] lg:mx-auto font-bold text-center lg:text-left pb-[3rem] text-xl text-lightGrey">
              collinsomondi778@gmail.com
            </p>
          </div>
          {/* Form Section */}
          <div>
            <form onSubmit={handleSubmit} id="contactForm">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="from_name"
                  onChange={handleFormChange}
                  placeholder="NAME"
                  className="w-[90%] pl-[2rem] bg-darkGrey focus:outline-none"
                  onFocus={handleNameInputFocus}
                />
                <div
                  className={`${
                    nameFocus ? "bg-lightGreen" : "bg-lightGrey"
                  } h-[1px] w-[90%] mt-[1rem] mx-auto`}
                ></div>
              </div>
              {/* EMAIL */}
              <div className="mt-[2rem]">
                <input
                  type="text"
                  name="from_email"
                  onChange={handleFormChange}
                  placeholder="EMAIL"
                  className="w-[90%] pl-[2rem] bg-darkGrey focus:outline-none"
                  onFocus={handleEmailInputFocus}
                />
                <div
                  className={`${
                    emailFocus ? "bg-lightGreen" : "bg-lightGrey"
                  } h-[1px] w-[90%] mt-[1rem] mx-auto`}
                ></div>
              </div>
              {/* MESSAGE */}
              <div className="mt-[2rem]">
                <textarea
                  cols={50}
                  rows={4}
                  type="text"
                  name="message"
                  onChange={handleFormChange}
                  placeholder="MESSAGE"
                  className="w-[90%] pl-[2rem] bg-darkGrey focus:outline-none"
                  onFocus={handleMessageInputFocus}
                />
                <div
                  className={`${
                    messageFocus ? "bg-lightGreen" : "bg-lightGrey"
                  } h-[1px] w-[90%] mt-[1rem] mx-auto`}
                ></div>
              </div>
              {/* SEND MESSAGE BTN */}
              <div className="flex justify-between items-center w-[90%] mx-auto pb-[5rem]">
                <div></div>
                <div className="mt-[2rem]">
                  <button
                    type="submit"
                    className="text-center  tracking-wide hover:text-lightGreen hover:cursor-pointer"
                  >
                    SEND MESSAGE
                  </button>
                  <div className="h-[2px] w-[7.5rem] mt-[0.5rem] bg-lightGreen mx-auto"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-[1px] w-[90%] lg:w-[85%] mt-[1rem] bg-lightGrey mx-auto"></div>
      </div>
    </Element>
  );
};

export default Contact;
