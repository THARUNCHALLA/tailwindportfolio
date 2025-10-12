import Work from "./work";

const projectData = [
    {
        image1:"/Assets/Ecommerce.png",
        title: "🛒 Ecommerce Website",
        information: "Essentially, eCommerce websites are designed to connect the right customers with products and services that can be traded over the internet. everyone is prospering from eCommerce. username: rahul and password: rahul@2021",
        view: "https://next45.ccbp.tech",
        id: 1
    },
    {
        image1: "/Assets/TharunEcho.png",
        title: "🎵 Tharun Echo – Music ",
        information: "Explore the musical journey of Tharun Echo, featuring original compositions, remixes, and curated playlists. Dive into a blend of genres and sonic landscapes that showcase a passion for music production and sound design", 
        view: "https://tharunecho.netlify.app",
        id: 2
    },
    {
        image1: "/Assets/Emoji.png",
        title: "🎮 Emoji Game",
        information: "In Emoji Game, you can test your knowledge of emojis as you try to match them together! Everyone uses emojis when texting, and it's important to know which one to use for the best communication.",
        view: "https://emoji45.ccbp.tech",
        id: 3
    },
];

const WorkCard = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
            My <span className="text-blue-400">Projects</span>
        </h1>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {projectData.map(each => <Work user={each} key={each.id} />)}
       </div>
    </div>
  );
};

export default WorkCard;