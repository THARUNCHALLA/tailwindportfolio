import { useState } from "react"
import Navbar from "./Navbar"

const Header = () => {
    const [Open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }

    const Header = () => {
        const el = document.getElementById('home');
        console.log(el)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <header className="fixed top-0 left-0 w-full h-20 z-40 text-white flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="w-full px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr]">
               <img src="/Assets/monogram.svg" alt="Tharun Challa logo" width="48" height="48" className="rounded"/>
                <div className="relative md:justify-self-end text-sm md:text-xl">
                    <button className="menu-btn md:hidden" onClick={handleClick}>
                        <span className="material-symbols-rounded">
                            {Open ? "close" : "menu"}
                        </span>
                    </button>
                    <Navbar navOpen={Open} />
                </div>


            </div>
        </header>

    )
}

export default Header