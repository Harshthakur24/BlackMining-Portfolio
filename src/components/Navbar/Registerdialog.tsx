"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'


const Register = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div className='hidden lg:block'>
                    <a
                        href="#contact2"
                        className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-lightblue hover:text-white hover:bg-blue"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector('#contact2');
                            if (element) {
                                const navHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
                                const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
                                const totalOffset = navHeight + topBarHeight;

                                window.scrollTo({
                                    top: element.getBoundingClientRect().top + window.pageYOffset - totalOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div>
                                                <Image
                                                    className="mx-auto h-12 w-auto"
                                                    src="/logo.png"
                                                    alt="Your Company"
                                                    height={100}
                                                    width={100}
                                                />
                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                                    Contact Us
                                                </h2>
                                            </div>
                                            <form className="mt-8 space-y-6" action="" method="">
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className="-space-y-px rounded-md shadow-sm">
                                                    <div>
                                                        <label htmlFor="name" className="sr-only">
                                                            Name
                                                        </label>
                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            autoComplete="name"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Your Name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="message" className="sr-only">
                                                            Message
                                                        </label>
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            required
                                                            rows={4}
                                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Your Message"
                                                        />
                                                    </div>
                                                </div>



                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Register;
