import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return( 
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
             <h1 className='w-full text-3xl font-bold text-[#00b2df]'>REACT.</h1>
             <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                aboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
                <FaDribbbleSquare size={30} />
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-10">
            <div>
                <h6 className="font-medium text-gray-300">
                    Solutions
                </h6>
                <ul>
                    <li className="py-2 text-sm">Analitics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insigns</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-300">
                    Supports
                </h6>
                <ul>
                    <li className="py-2 text-sm">Analitics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insigns</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-300">
                    Documentatioin
                </h6>
                <ul>
                    <li className="py-2 text-sm">Analitics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insigns</li>
                </ul>
            </div>
            <div>
                <h6 className="font-medium text-gray-300">
                    Company
                </h6>
                <ul>
                    <li className="py-2 text-sm">Analitics</li>
                    <li className="py-2 text-sm">Marketing</li>
                    <li className="py-2 text-sm">Commerce</li>
                    <li className="py-2 text-sm">Insigns</li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default Footer