import { useState } from "react";
import Navbar from "./Navbar";

const Header = ({ toggleTheme, darkMode }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(prev => !prev);

    return (
        <header className="fixed top-0 left-0 w-full h-20 z-40 flex items-center transition-colors duration-500 bg-gradient-to-b from-zinc-900 to-zinc-900/0 dark:from-gray-50 dark:to-gray-50/0 text-white dark:text-gray-900">
            <div className="w-full px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr]">
                <img
                    src={darkMode ? "/Assets/Logo.png" : "/Assets/monogram.svg"}
                    alt="Tharun Challa logo"
                    width="48"
                    height="48"
                    className="rounded bg-transparent"
                />

                <div className="relative md:justify-self-end text-sm md:text-xl flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-900 transition-colors"
                    >
                        {darkMode ? "🌙" : "☀️"}
                    </button>
                    <button className="menu-btn md:hidden" onClick={handleClick}>
                        <span className="material-symbols-rounded">
                            {open ? "close" : "menu"}
                        </span>
                    </button>

                    <Navbar navOpen={open} darkMode={darkMode} />
                </div>
            </div>
        </header>
    );
};

export default Header;
