import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const ContactPage = () => {
    const sendEmail = () => {
        window.location.href = 'mailto:challatharun31@gmail.com';
    }

    return (
        <div id="contact" className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Personal Information</h2>
                        
                        <div className="space-y-6">
                            <a href="https://maps.app.goo.gl/T733zpaP1p7cbaBt5" target="_blank" rel="noreferrer" className="flex items-start hover:text-blue-400 transition-colors">
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
                                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Send a Message</h2>
                        
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your email"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Subject"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="4"
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;