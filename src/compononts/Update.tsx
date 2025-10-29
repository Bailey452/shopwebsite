import React from 'react'

const Update = () => {
    return (
        <div className='py-16  bg-gradient-to-r from-purple-600 to-blue-600 text-white'>
            <div className='container mx-auto px-4 text-center'>
                <h2 className='text-3xl font-bold mb-4'>
                    Stay Updated
                </h2>

                <p className='text-purple-100 mb-8 max-w-2xl mx-auto'>
                    Subscribe to our newsletter and be the first to know about new products, sales, and exclusive offers
                </p>

                <div className='max-w-md mx-auto flex gap-4'>
                    <input
                        type="text"
                        placeholder='Enter your email'
                        className='flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2
                    bg-white focus:ring-white'
                    />
                    <button className="items-center justify-center gap-2 rounded-md 
            text-sm font-medium transition-colors
              h-10 py-2 bg-white text-purple-600 hover:bg-gray-100 px-8">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Update
