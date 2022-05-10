import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <div className="w-full min-h-screen bg-[rgb(10,25,47)] pt-24 px-24 space-y-10 lg:space-y-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="w-[160px] h-[60px] p-4 flex justify-between duration-300 bg-blue-600 rounded-xl">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/andifaizal94/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </div>
        <div className="w-[160px] h-[60px] p-4 flex justify-between duration-300 bg-[#333333] rounded-xl">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/andi-faizal94"
          >
            Github <FaGithub size={30} />
          </a>
        </div>
        <div className="w-[160px] h-[60px] p-4 flex justify-between duration-300 bg-[#e4409d] rounded-xl">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.instagram.com/ical_andifaizal/"
          >
            Instagram <FaInstagram size={30} />
          </a>
        </div>
        <div className="w-[160px] h-[60px] p-4 flex  justify-between duration-300 bg-[#6fc2b0] rounded-xl">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://andifz9475@gmail.com"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </div>
      </div>
    </>
  );
}
