import { useEffect, useRef } from 'react'

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef()
    const activeBox = useRef()
    const inactiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + "px"
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px"
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px"
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px"
    }

    useEffect(() => {
        inactiveBox()
    }, [])

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Project',
            link: '#project',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link'
        }
    ];

    const HandleClick = (e) => {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        e.target.classList.add('active');
        lastActiveLink.current = e.target; 
        inactiveBox();
    };

    return (
        <nav className={`navbar ${navOpen ? "active" : ""}`}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a href={link} key={key} ref={ref} className={className} onClick={HandleClick}>{label}</a>
            )
            )}
            <div className='active-box' ref={activeBox}></div>
        </nav>

    )
}

export default Navbar
