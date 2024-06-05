"use client";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    const handleLinkClickSection = (e: any, sectionId: any) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-10 ${scrollPosition >= 56 || isOpen ? 'bg-white shadow-md' : 'bg-transparent'} transition-colors duration-300`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">Company</div>
                <div className="hidden md:flex space-x-6">
                    <Link href="#about" onClick={(e)=> handleLinkClickSection(e, 'about')}>
                        <div className="text-gray-700 font-bold hover:text-blue-500">About</div>
                    </Link>
                    <Link href="#products" onClick={(e)=> handleLinkClickSection(e, 'products')}>
                        <div className="text-gray-700 font-bold hover:text-blue-500">Products</div>
                    </Link>
                    <Link href="#contact" onClick={(e)=> handleLinkClickSection(e, 'contact')}>
                        <div className="text-gray-700 font-bold hover:text-blue-500">Contact</div>
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <XIcon className="w-6 h-6 text-gray-800" />
                        ) : (
                            <MenuIcon className="w-6 h-6 text-gray-800" />
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <Link href="#about" onClick={(e)=> handleLinkClickSection(e, 'about')}>
                    <div className="block px-4 py-2 text-gray-700 hover:text-blue-500">About</div>
                </Link>
                <Link href="#products" onClick={(e)=> handleLinkClickSection(e, 'products')}>
                    <div className="block px-4 py-2 text-gray-700 hover:text-blue-500">Products</div>
                </Link>
                <Link href="#contact" onClick={(e)=> handleLinkClickSection(e, 'contact')}>
                    <div className="block px-4 py-2 text-gray-700 hover:text-blue-500">Contact</div>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
