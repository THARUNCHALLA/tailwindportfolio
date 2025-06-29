import Work from "./work";

const projectData = [
    {
        image1:"/Assets/Screenshot 2023-12-24 184315.png",
        title: "Ecommerce Website",
        information: "Essentially, eCommerce websites are designed to connect the right customers with products and services that can be traded over the internet. From tiny businesses to huge markets, everyone is prospering from eCommerce. username: rahul and password: rahul@2021",
        view: "https://next45.ccbp.tech/",
        source: "https://github.com/THARUNCHALLA/Tharun",
        id: 1
    },
    {
        image1: "/Assets/Screenshot 2023-12-24 194639.png",
        title: "IPL Dashboard",
        information: "The Indian Premier League, or IPL, is a T20 cricket league, which was founded in 2008 and is held every year. It sees participation from both national and international players, and eight teams representing eight Indian cities compete .", 
        view: "https://ipl45.ccbp.tech/",
        source: "https://github.com/THARUNCHALLA/IPL",
        id: 12
    },
    {
        image1: "/Assets/Screenshot 2023-12-24 195158.png",
        title: "Emoji Game",
        information: "In Emoji Game, you can test your knowledge of emojis as you try to match them together! Everyone uses emojis when texting, and it's important to know which one to use for the best communication.",
        view: "https://emoji45.ccbp.tech/",
        source: "https://github.com/THARUNCHALLA/Emoji-Game",
        id: 13
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