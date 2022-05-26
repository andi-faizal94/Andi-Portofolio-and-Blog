import { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
import { withRouter } from 'next/router';

const navs = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Portofolio', href: 'https://github.com/andi-faizal94' },
  { text: 'Blog', href: '/https://medium.com/@andifz9475' },
  { text: 'Contact', href: '/contact' },
];
const Navbar = ({ router }) => {
  const [nav, setNav] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-30">
      <div>
        <Link href="/" duration={500}>
          <a>
            <h1 className="hover:text-gray-100 font-[700] hover:scale-x-110">
              Andi
              <span className="ml-1 text-green-400 font-bold font-serif ">
                Faizal
              </span>
            </h1>
          </a>
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {navs.map((nav) => (
          <li key={nav.text}>
            <Link href={nav.href}>
              <a
                className={`nav-item ${
                  router.pathname == nav.href
                    ? 'active scroll-smooth font-[700] cursor-pointer hover:text-gray-100 hover:scale-x-110 z-30'
                    : 'font-[700] hover:text-gray-100 hover:scale-x-110 z-30'
                }`}
                duration={500}
              >
                {nav.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-30">
        {!nav ? (
          <FaBars className="transition duration-500 ease-out" />
        ) : (
          <FaTimes className="transition duration-500 ease-out" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10'
        }
      >
        {navs.map((nav) => (
          <li key={nav.text}>
            <Link href={nav.href}>
              <a
                className={`nav-item ${
                  router.pathname == nav.href
                    ? 'active py-6 text-4xl scroll-smooth hover:text-gray-100 duration-75'
                    : 'py-6 text-4xl scroll-smooth hover:text-gray-100 duration-75'
                }`}
              >
                {nav.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/andifaizal94/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/andi-faizal94"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e4409d]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/ical_andifaizal/"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://andifz9475@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
