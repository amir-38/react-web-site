import React from "react";

import { Outlet, Link, useLocation } from "react-router-dom";
import "./layout.css";
import { useState, useEffect } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Navbar from "../Navbar/Navbar";
import Menu from "../Navbar/Navbar";
import Burger from "../Sidebar/Sidebar";
const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(node, () => setOpen(false));

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();
  return (
    <>
      <nav style={{ height: scrollPos < 0 ? "80px" : "160px" }}>
        <p>
          Ran<span>GO</span>
        </p>
        <ul className="main-nav">
          <li className="desctop-list ">
            <Link
              to="/"
              className={location.pathname === "/" ? "after" : "before"}
            >
              Home
            </Link>
          </li>
          <li className="desctop-list">
            <Link
              className={location.pathname === "/about" ? "after" : "before"}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="desctop-list">
            <Link
              className={
                location.pathname === "/portfolio" ? "after" : "before"
              }
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="desctop-list">
            <Link
              className={location.pathname === "/services" ? "after" : "before"}
              to="/services"
            >
              Services
            </Link>
          </li>
          <li className="desctop-list">
            <Link
              className={location.pathname === "/blog" ? "after" : "before"}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="desctop-list">
            <Link
              className={location.pathname === "/contact" ? "after" : "before"}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
