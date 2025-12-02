import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
const ContactPage = () => {
    const [data, setData] = useState({ name: '', email: '', message: '', subject: '' });
    const [popup, setPopup] = useState({ show: false, message: '', type: '' });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const sendEmail = () => {
        window.location.href = 'mailto:challatharun31@gmail.com';
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://email-api-1-twnq.onrender.com/submit-form', data);
            if (res.status === 200) {
                setPopup({ show: true, message: 'Message sent successfully!', type: 'success' });
                { !isMobile && toast.success('Message sent successfully!') }
                setData({ name: '', email: '', message: '', subject: '' });
            }
        } catch (err) {
            { !isMobile && toast.error('Failed to send message. Try again.') }
            setPopup({ show: true, message: 'Failed to send message. Try again.', type: 'error' });
        }
        setTimeout(() => {
            setPopup({ show: false, message: '', type: '' });
        }, 1000);
    };


    return (
        <div id="contact" className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Personal Information</h2>

                        <div className="space-y-6">
                            <a href="https://maps.app.goo.gl/6voXrnRz7L7Kkwvn7" target="_blank" rel="noreferrer" className="flex items-start hover:text-blue-400 transition-colors">
                                <FaHome className="text-white mt-1 mr-4 flex-shrink-0" size={20} />
                                <div>
                                    <p>2-181 palukurivaripalem</p>
                                    <p>Andhra Pradesh</p>
                                </div>
                            </a>

                            <a href="https://wa.me/919100807049" target="_blank" rel="noreferrer" className="flex items-center hover:text-blue-400 transition-colors">
                                <FaPhone className="text-white mr-4 flex-shrink-0" size={20} />
                                <span>+91 9100807049</span>
                            </a>

                            <button onClick={sendEmail} className="flex items-center hover:text-blue-400 transition-colors w-full text-left">
                                <FaMailBulk className="text-white mr-4 flex-shrink-0" size={20} />
                                <span>challatharun31@gmail.com</span>
                            </button>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/tharun-challa-a59739248/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="https://github.com/THARUNCHALLA" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {popup.show ? (
                        <div
                            className={`fixed bottom-5 inset-x-0 mx-auto w-full max-w-xs px-6 py-3 rounded-md text-white shadow-lg block md:hidden
    ${popup.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
                        >
                            {popup.message}
                        </div>

                    ) : <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Send a Message</h2>
                        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                            {[
                                { name: 'name', type: 'text', label: 'Full Name' },
                                { name: 'email', type: 'email', label: 'Email address' },
                                { name: 'subject', type: 'text', label: 'Subject' },
                                ,
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
              peer block py-2.5 px-0 w-full text-sm md:text-lg text-white font-italic bg-transparent
              border-0 border-b-2 border-gray-300 appearance-none focus:outline-none
              focus:ring-0 focus:border-blue-600 peer-placeholder-shown:border-gray-300 peer-focus:border-blue-600"
                                    />
                                    <label
                                        htmlFor={name}
                                        className="
              absolute text-sm md:text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3
              -z-10 origin-[0]
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
              peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
                                    >
                                        {label}
                                    </label>
                                </div>
                            ))}
                            <div className="mb-5">
                                <textarea id="messageData" name="message" rows="4" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Leave your message here..." required></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ContactPage;