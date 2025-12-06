const Navbar = ({ navOpen }) => {
  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      <ul className="flex flex-col md:flex-row gap-4">
        {["home","about","experience","project","contact"].map((section) => (
          <li key={section}>
            <a href={`#${section}`} className="nav-link capitalize">{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
