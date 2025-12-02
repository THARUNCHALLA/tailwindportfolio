"use client";

import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  { icon: FaFacebook, url: "https://facebook.com/tharun" },
  { icon: FaLinkedin, url: "https://linkedin.com/in/tharun" },
  { icon: FaInstagram, url: "https://instagram.com/tharun" },
  { icon: FaGithub, url: "https://github.com/tharun" },
];

const ContactPage = () => {
  const [data, setData] = useState({ name: "", email: "", message: "", subject: "" });
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = () => {
    window.location.href = "mailto:challatharun31@gmail.com";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://email-api-1-twnq.onrender.com/submit-form", data);
      if (res.status === 200) {
        setPopup({ show: true, message: "Message sent successfully!", type: "success" });
        setData({ name: "", email: "", message: "", subject: "" });
      }
    } catch (err) {
      setPopup({ show: true, message: "Failed to send message. Try again.", type: "error" });
    }
    setTimeout(() => setPopup({ show: false, message: "", type: "" }), 2000);
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
              Personal Information
            </h2>

            <div className="space-y-6">
              <a
                href="https://maps.app.goo.gl/T733zpaP1p7cbaBt5"
                target="_blank"
                rel="noreferrer"
                className="flex items-start hover:text-blue-400 transition-transform transform hover:scale-105"
              >
                <FaHome className="text-white mt-1 mr-4 flex-shrink-0" size={20} />
                <div>
                  <p>2-181 Palukurivaripalem</p>
                  <p>Andhra Pradesh</p>
                </div>
              </a>

              <a
                href="https://wa.me/919100807049"
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-blue-400 transition-transform transform hover:scale-105"
              >
                <FaPhone className="text-white mr-4 flex-shrink-0" size={20} />
                <span>+91 9100807049</span>
              </a>

              <button
                onClick={sendEmail}
                className="flex items-center hover:text-blue-400 transition-transform transform hover:scale-105 w-full text-left"
              >
                <FaMailBulk className="text-white mr-4 flex-shrink-0" size={20} />
                <span>challatharun31@gmail.com</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, url }, idx) => (
                  <motion.a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, color: "#0ea5e9" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <AnimatePresence>
            {popup.show ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className={`fixed bottom-5 inset-x-0 mx-auto w-full max-w-xs px-6 py-3 rounded-md text-white shadow-lg
                  ${popup.type === "success" ? "bg-green-600" : "bg-red-600"} block md:hidden`}
              >
                {popup.message}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Send a Message</h2>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                  {[
                    { name: "name", type: "text", label: "Full Name" },
                    { name: "email", type: "email", label: "Email address" },
                    { name: "subject", type: "text", label: "Subject" },
                  ].map(({ name, type, label }) => (
                    <div key={name} className="relative z-0 w-full mb-5 group">
                      <input
                        type={type}
                        name={name}
                        id={name}
                        value={data[name]}
                        onChange={handleChange}
                        placeholder=" "
                        required
                        className="
                          peer block py-2.5 px-0 w-full text-sm md:text-lg text-white bg-transparent
                          border-0 border-b-2 border-gray-300 appearance-none focus:outline-none
                          focus:ring-0 focus:border-blue-600 peer-placeholder-shown:border-gray-300
                          peer-focus:border-blue-500 peer-focus:text-blue-400 transition-all duration-300
                        "
                      />
                      <label
                        htmlFor={name}
                        className="
                          absolute text-sm md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3
                          -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                          peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-400 transition-all duration-300
                        "
                      >
                        {label}
                      </label>
                    </div>
                  ))}

                  <div className="mb-5">
                    <textarea
                      id="messageData"
                      name="message"
                      rows="4"
                      value={data.message}
                      onChange={handleChange}
                      placeholder="Leave your message here..."
                      required
                      className="bg-gray-700 border border-gray-600 text-white text-sm md:text-lg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 hover:border-blue-500"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(14,165,233,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 w-full"
                  >
                    Submit
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
