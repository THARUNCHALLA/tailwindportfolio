import { useState } from "react"
import Navbar from "./Navbar"

const Header = () => {
    const [Open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }
    return (
        <header className="fixed top-0 left-0 w-full h-20 z-40 text-white flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="w-full px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr]">
                <h4 className="ballet-Name text-xs font-bold md:text-xl tracking-tight leading-none drop-shadow-md">
                    Tharun Challa
                </h4>
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