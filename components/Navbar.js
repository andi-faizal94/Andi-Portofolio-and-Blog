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

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="hover:text-gray-100 font-bold hover:scale-x-110">
          Andi
          <span className="ml-1 text-green-400 font-bold font-serif ">
            Faizal
          </span>
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="transition duration-500 ease-out" />
        ) : (
          <FaTimes className="transition duration-500 ease-out" />
        )}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <Link
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100 duration-75"
          onClick={handleClick}
          href="/"
          duration={100}
        >
          <a>Home</a>
        </Link>
        <Link
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100 duration-100"
          onClick={handleClick}
          href="/about"
          duration={100}
        >
          <a>About</a>
        </Link>
        <Link
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100 duration-200"
          onClick={handleClick}
          href="/portofolio"
          duration={100}
        >
          <a>Portofolio</a>
        </Link>
        <Link
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100 duration-300"
          onClick={handleClick}
          href="/blog"
          duration={100}
        >
          <a>Blog</a>
        </Link>
        <Link
          className="NavLink py-6 text-4xl scroll-smooth hover:text-gray-100 duration-500"
          onClick={handleClick}
          href="/contact"
          duration={100}
        >
          <a>Contact</a>
        </Link>
      </ul>

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

export default Navbar;
