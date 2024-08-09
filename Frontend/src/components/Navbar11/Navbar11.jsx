import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar11.scss';

const Navbar11 = () => {
  const [isActive, setIsActive] = useState(false);
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

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
            <Link to="/student" onClick={closeMenu}>
              Student
            </Link>
          </li>
          <li className="navLinkArm">
            <Link to="/team" onClick={closeMenu}>
              Team
            </Link>
          </li>
          <li className="navLinkArm">
            <Link to="/blogs" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className="navLinkArm">
            <Link to="/overflow" onClick={closeMenu}>
              Overflow
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li className="navLinkArm">
                <Link to="/profile" onClick={closeMenu}>
                  Profile
                </Link>
              </li>
              <li className="navLinkArm">
                <Link to="/" onClick={closeMenu && handleLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="navLinkArm">
                <Link to="/login" onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li className="navLinkArm">
                <Link to="/register" onClick={closeMenu}>
                  Register
                </Link>
              </li>
            </>
          )}

        </ul>
      </div>
    </div>
  );
};

export default Navbar11;

