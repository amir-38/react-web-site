import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledMenu = styled.nav`
  .mobile-list {
    text-decoration: none;
    list-style-type: none;
    padding: 20px;
  }

  display: none;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  // z-index: 5;
  @media (max-width: 576px) {
    display: flex;
    width: 360px;
  }

  .link {
    font-size: 4rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #ff6b09;
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <StyledMenu open={open}>
      <ul>
        <li className="mobile-list">
          <Link className="link" to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="mobile-list">
          <Link className="link" to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="mobile-list">
          <Link className="link" to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
        </li>
        <li className="mobile-list">
          <Link className="link" to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li className="mobile-list">
          <Link className="link" to="/blog" onClick={closeMenu}>
            Blog
          </Link>
        </li>
        <li className="mobile-list">
          <Link className="link" to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
};

export default Menu;
