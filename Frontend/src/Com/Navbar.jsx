import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const navStyles = {
    zIndex: 100,
    position: "fixed",
    top: "1%",
    right: ".5%",
  };

  return (
    <div className="nav" style={navStyles}>
      <label htmlFor="active" className="menu-btn" onClick={toggleMenu}>
        &#10761;
      </label>
      <input type="checkbox" id="active" checked={isActive} />
      <div className="wrapperArm">
        <ul>
          <li className="navLinkArm">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="navLinkArm">
            <Link to="/123" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;