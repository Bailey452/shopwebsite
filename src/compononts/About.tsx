import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <div className='AboutDiv text-center flex flex-col justify-center'>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center 
                justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-truck w-6 h-6 text-purple-600"
                        data-component-line="57">
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                        <path d="M15 18H9"></path>
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14">
                        </path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle>
                    </svg>
                </div>
                <h3 className='font-semibold mb-2'>
                    Free Shipping
                </h3>
                <p className='text-gray-600'>
                    On orders over $50
                </p>
            </div>
            <div className='AboutDiv text-center flex flex-col justify-center'>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center 
                justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-shield w-6 h-6 text-purple-600"
                        data-component-line="64">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 
                        1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 
                        1 0 0 1 1 1z"></path>
                    </svg>
                </div>
                <h3 className='font-semibold mb-2'>
                    Secure Payment
                </h3>
                <p className='text-gray-600'>
                    100% secure transactions
                </p>
            </div>
            <div className='AboutDiv text-center flex flex-col justify-center'>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center 
                justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-refresh-cw w-6 h-6 text-purple-600" data-component-line="71">
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                        <path d="M21 3v5h-5"></path>
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                        <path d="M8 16H3v5"></path>
                    </svg>
                </div>
                <h3 className='font-semibold mb-2'>
                    Easy Returns
                </h3>
                <p className='text-gray-600'>
                    30-day return policy
                </p>
            </div>
            <div className='AboutDiv text-center flex flex-col justify-center'>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center 
                justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-headphones w-6 h-6 text-purple-600" data-component-line="78">
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 
                        0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                    </svg>
                </div>
                <h3 className='font-semibold mb-2'>
                    24/7 Support
                </h3>
                <p className='text-gray-600'>
                    Always here to help
                </p>
            </div>
        </div>
    )
}

export default About
