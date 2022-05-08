import Navbar from '../components/Navbar';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import logo from '../assets/profil.png';
import Image from 'next/image';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <div className="w-full h-screen bg-[rgb(10,25,47)]">
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row lg:flex-row justify-around  items-center h-full pt-24">
          <div className="w-6/2">
            <p className="text-green-500 py-2 text-2xl font-semibold">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-4xl font-bold text-[#ccd6f6]">
              Andi Faizal
            </h1>
            <h2 className="text-5xl md:text-4xl font-bold text-[#8892b0]">
              I am a Full Stack Developer.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I am a full-stack developer specializing in building and UI/UX
              designer exceptional digital experiences. Currently, I am focused
              on building responsive full-stack web applications.
            </p>
            <div className="flex">
              <Link href="/portofolio">
                <a className="text-white group border-2 px-6 py-3 mx-2 my-2 flex items-center hover:bg-emerald-400 rounded-md">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </a>
              </Link>
              <Link href="/contact">
                <a className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-black hover:bg-cyan-200 rounded-md">
                  Contact
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden sm:block w-6/2 md:m-8 bg-emerald-400 hover:bg-transparent rounded-full">
            {/* <img src={logo} alt="andi profil" size={30} /> */}
            <Image
              className="object-cover"
              src={logo}
              alt="Picture of the author"
              width={208}
              height={208}
            />
          </div>
        </div>
      </div>
    </>
  );
}
