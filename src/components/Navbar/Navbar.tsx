"use client"
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';
import Registerdialog from "./Registerdialog";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'FAQs', href: '/faqs', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [visible, setVisible] = React.useState(true);

    // Handle smooth scroll for anchor links
    React.useEffect(() => {
        const handleAnchorClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.hash) {
                e.preventDefault();
                const element = document.querySelector(target.hash);
                if (element) {
                    const navHeight = visible ? document.querySelector('nav')?.getBoundingClientRect().height || 0 : 0;
                    const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
                    const totalOffset = navHeight + topBarHeight;

                    window.scrollTo({
                        top: element.getBoundingClientRect().top + window.pageYOffset - totalOffset,
                        behavior: 'smooth'
                    });
                }
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, [visible]);

    // Scroll visibility handler remains the same
    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingUp = prevScrollPos > currentScrollPos;

            if (currentScrollPos > 100) {
                setVisible(isScrollingUp);
            } else {
                setVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <>
            {/* Top Bar - Add className for reference */}
            <div className="top-bar items-center bg-black text-white py-1.5 sm:py-2">
                <div className="max-w-6xl mx-auto px-4 lg:px-8">
                    <div className="flex justify-center items-center space-x-4 md:space-x-36">
                        <span className="text-xs sm:text-sm whitespace-nowrap">
                            <i className="fas fa-mining mr-2"></i>Black Mining
                        </span>
                        <span className="text-xs sm:text-sm whitespace-nowrap">
                            <i className="fas fa-phone mr-2"></i>+1 (234) 567-8900
                        </span>
                        <span className="text-xs sm:text-sm whitespace-nowrap">
                            <i className="fas fa-envelope mr-2"></i>info@example.com
                        </span>

                    </div>
                </div>
            </div>

            {/* Main Navbar - Add nav tag for reference */}
            <div className={`w-full bg-white shadow-sm transition-transform duration-300 sticky top-0 z-50
                ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <Disclosure as="nav">
                    <div className="mx-auto max-w-7xl px-6 lg:py-3 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                                {/* LOGO */}

                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        className="block h-12 w-40 lg:hidden"
                                        src={''}
                                        alt="logo"
                                        width={40}
                                        height={20}
                                    />
                                    <Image
                                        className="hidden h-full w-full lg:block"
                                        src={''}
                                        alt="logo"
                                        width={40}
                                        height={20}
                                    />
                                </div>

                                {/* LINKS */}

                                <div className="hidden lg:block m-auto">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? ' text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                                                    'px-3 py-4 text-lg font-normal opacity-75 space-links'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>



                            {/* REGISTER DIALOG */}

                            <Registerdialog />


                            {/* DRAWER FOR MOBILE VIEW */}

                            {/* DRAWER ICON */}

                            <div className='block lg:hidden'>
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </div>

                            {/* DRAWER LINKS DATA */}


                        </div>
                    </div>
                </Disclosure>
            </div>

            {/* Drawer remains the same */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between px-3 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg group transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            <span>{item.name}</span>
                            <svg
                                className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    ))}
                </div>
            </Drawer>
        </>
    )
}

export default Navbar;
