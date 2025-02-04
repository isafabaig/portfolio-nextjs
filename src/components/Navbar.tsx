import React from "react"
import { MdMenu } from "react-icons/md";

export default function Navbar(){
    return(
        <div className=" flex justify-between p-5 bg-black text-white">
            <div className="flex justify-start font-bold text-3xl p-2">
                <h1 className=" text-blue-800">PORT<span className="text-purple-500">FOLIO</span></h1>
            </div>
                <ul className=" gap-10 lg:gap-20 hidden md:flex justify-end text-2xl">
                    <li className="border-b"><a href="#hero">Home</a></li>
                    <li className="menuLink"><a href="#about">About</a></li>
                    <li className="menuLink"><a href="#projects">Project</a></li>
                    <li className="menuLink"><a href="#skills">Skills</a></li>
                    <li className="menuLink"><a href="#contact">Contact</a></li>
                </ul>
                <MdMenu className="md:hidden" size={30} />
            </div>
    )
}