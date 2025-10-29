import React from 'react'
import Image from 'next/image'

const Categories = () => {
    return (
        <div className='py-16'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4'>Shop by Category</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>Explore our categories and find exactly what you&apos;re looking for</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='group cursor-pointer'>
                        <div className='relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 p-6
                        hover:from-purple-200 hover:to-blue-200 transition-all duration-300'>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-1 capitalize'>electromics</h3>
                                <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300'>
                                    <Image
                                        src="/images/electonics.jpg"
                                        width={100}
                                        height={100}
                                        alt="Electronics"
                                        className='w-10 h-10 object-cover rounded-full'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='group cursor-pointer'>
                        <div className='relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 p-6
                        hover:from-purple-200 hover:to-blue-200 transition-all duration-300'>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-1 capitalize'>jewelery</h3>
                                <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300'>
                                    <Image
                                        src="/images/jewelry.jpg"
                                        width={100}
                                        height={100}
                                        alt="Jewelery"
                                        className='w-10 h-10 object-cover rounded-full'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='group cursor-pointer'>
                        <div className='relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 p-6
                        hover:from-purple-200 hover:to-blue-200 transition-all duration-300'>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-1 capitalize'>Men&apos;s Clothing</h3>
                                <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300'>
                                    <Image
                                        src="/images/mens.jpg"
                                        width={100}
                                        height={100}
                                        alt="Mens clothing"
                                        className='w-10 h-10 object-cover rounded-full'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='group cursor-pointer'>
                        <div className='relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 p-6
                        hover:from-purple-200 hover:to-blue-200 transition-all duration-300'>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-lg font-semibold text-gray-900 mb-1 capitalize'>Women&apos;s Clothing</h3>
                                <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center 
                                group-hover:scale-110 transition-transform duration-300'>
                                    <Image
                                        src="/images/women.jpg"
                                        width={100}
                                        height={100}
                                        alt="Electronics"
                                        className='w-10 h-10 object-cover rounded-full'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories