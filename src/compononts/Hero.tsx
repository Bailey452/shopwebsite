import React from 'react'

const Hero = () => {
    return (
        <div className='hero bg-gradient-to-r from-purple-600 to-blue-600 text-white'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                Discover Amazing <br />
                Products at Unbeatable<br />
                Prices
            </h1>
            <p className='text-xl mb-8 text-purple-100'>
                Shop from thousands of real products across all categories. Fast shipping and great <br />
                prices guaranteed.
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
                <button className="btn1 inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium 
                transition-colors h-11 rounded-md bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                    Shop Now
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-5 h-5" >
                        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                    </svg>
                </button>
                <button className="btn1 inline-flex items-center justify-center gap-2 font-medium transition-colors bg-white 
                h-11 rounded-md border-white text-white hover:text-purple-600 text-lg px-8" >
                    View Categories
                </button>
            </div>
        </div>
    )
}

export default Hero
