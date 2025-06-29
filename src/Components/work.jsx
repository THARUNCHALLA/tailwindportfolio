
const Work = ({ user }) => {
    return (
        <section id="project">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                    <img
                        src={user.image1}
                        alt={user.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{user.title}</h3>
                    <p className="text-gray-300 mb-4">{user.information}</p>

                    <div className="flex space-x-4">
                        <a
                            href={user.view}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                        >
                            View Project
                        </a>
                        <a
                            href={user.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Work;