import { useState } from 'react';
import { Link } from "react-router-dom";

import { ContextDataCart } from '../../config'

export default function Index() {
    const data = ContextDataCart();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative '>

            <div className='py-2 drop-shadow-md bg-white z-10 fixed top-0 left-0 right-0 font-mono lg:flex lg:items-center'>

                <div className='w-full flex justify-between px-4 md:px-20 items-center text-black font-bold text-xl '>
                    <div><Link to="/">Tumbas</Link></div>
                    <input className='border-2 border-primary w-48 md:w-96 rounded-full py-1 px-2' type="text" />
                    <div className='flex items-center'>
                        <div>
                            <Link to="/cart">
                                <div className='flex gap-0'>
                                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className='bg-red-600 rounded-full w-5 h-5 text-sm flex justify-center items-center text-white -ml-2'>{data.data.totalCart}</span>
                                </div>
                            </Link>
                        </div>
                        <div className='bg-secondary'>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <svg className="w-8 h-8 block lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                                    <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} border-t lg:border-t-0 lg:block lg:py-3 lg:mr-20 mt-3`}>
                    <nav className='flex md:pb-3 lg:flex-row ml-5 mt-2 lg:mt-0 w-52 gap-2'>
                        <Link >
                            <button className='hover:bg-primary hover:text-white border-2 border-primary px-5 py-1.5 rounded-full'>Login</button>
                        </Link>
                        <Link >
                            <button className='hover:bg-white hover:text-black hover:py-1.5 hover:border-2 hover:border-primary bg-primary text-white px-5 py-2 rounded-full'>sign up</button>
                        </Link>
                    </nav>
                </div>

            </div>
        </div>
    )
}
