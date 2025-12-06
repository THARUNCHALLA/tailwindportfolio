"use client";

import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const SuccessPopup = ({ show, message }) => (
    <AnimatePresence>
        {show && (
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.05, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            >
                <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gray-900 dark:bg-gray-50 p-8 rounded-xl shadow-xl border border-green-500 text-center"
                >
                    <motion.div
                        animate={{ scale: [1, 1.4, 1], rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.6 }}
                        className="text-green-400 text-5xl mb-3"
                    >
                        ✅
                    </motion.div>

                    <h3 className="text-xl text-white dark:text-gray-900 font-semibold">Success!</h3>
                    <p className="text-gray-300 dark:text-gray-700 mt-2">{message}</p>

                    <motion.div
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 2.5 }}
                        className="h-1 mt-6 bg-green-500 rounded-full"
                    />
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

const ContactPage = () => {
    const [data, setData] = useState({ name: "", email: "", message: "", subject: "" });
    const [popup, setPopup] = useState({ show: false, message: "", type: "" });
    const [isMobile, setIsMobile] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const sendEmail = () => window.location.href = "mailto:challatharun31@gmail.com";
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("https://email-aeus.onrender.com/submit-form", data);
            if (res.status === 200) {
                setPopup({ show: true, message: "Message sent successfully!", type: "success" });
                setData({ name: "", email: "", message: "", subject: "" });
            }
        } catch {
            setPopup({ show: true, message: "Failed to send message. Try again.", type: "error" });
        }
        setTimeout(() => setPopup({ show: false, message: "", type: "" }), 2500);
        setLoading(false);
    };

    return (
        <div id="contact" className="min-h-screen bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 dark:border-gray-300 pb-2">
                                Personal Information
                            </h2>
                            <div className="space-y-6">
                                <a
                                    href="https://maps.app.goo.gl/6voXrnRz7L7Kkwvn7"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-start hover:text-blue-400 transition-colors"
                                >
                                    <FaHome className="text-white dark:text-gray-900 mt-1 mr-4 flex-shrink-0" size={20} />
                                    <div>
                                        <p>p.v.palem(V), Nellore(D)</p>
                                        <p>Andhra Pradesh</p>
                                    </div>
                                </a>
                                <a
                                    href="https://wa.me/919100807049"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:text-blue-400 transition-colors"
                                >
                                    <FaPhone className="text-white dark:text-gray-900 mr-4 flex-shrink-0" size={20} />
                                    <span>+91 9100807049</span>
                                </a>
                                <button
                                    onClick={sendEmail}
                                    className="flex items-center hover:text-blue-400 transition-colors w-full text-left"
                                >
                                    <FaMailBulk className="text-white dark:text-gray-900 mr-4 flex-shrink-0" size={20} />
                                    <span>challatharun31@gmail.com</span>
                                </button>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    <FaFacebook size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/tharun-challa-a59739248/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href="https://www.instagram.com/?hl=en"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-pink-500 transition-colors"
                                >
                                    <FaInstagram size={24} />
                                </a>
                                <a
                                    href="https://github.com/THARUNCHALLA"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-gray-400 transition-colors"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div className="bg-gray-800 dark:bg-gray-100 p-8 rounded-lg shadow-lg relative">
                        {loading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 dark:bg-gray-200/80 z-10 rounded-lg">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"
                                />
                            </div>
                        )}

                        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 dark:border-gray-300 pb-2">
                            Send a Message
                        </h2>
                        <form className="max-w-md mx-auto relative z-0 space-y-4" onSubmit={handleSubmit}>
                            {[
                                { name: "name", type: "text", label: "Full Name" },
                                { name: "email", type: "email", label: "Email Address" },
                                { name: "subject", type: "text", label: "Subject" },
                            ].map(({ name, type, label }) => (
                                <div key={name} className="relative z-0 w-full mb-2 group">
                                    <input
                                        type={type}
                                        name={name}
                                        autoComplete="off"
                                        id={name}
                                        value={data[name]}
                                        onChange={handleChange}
                                        placeholder=""
                                        required
                                        className="peer block py-2.5 px-0 w-full text-sm md:text-lg text-white dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer-placeholder-shown:border-gray-300 peer-focus:border-blue-600"
                                    />
                                    <label
                                        htmlFor={name}
                                        className="absolute text-sm md:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-400"
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
                                    className="shadow-xs bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors w-full"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <SuccessPopup show={popup.show && popup.type === "success"} message={popup.message} />
        </div>
    );
};

export default ContactPage;
