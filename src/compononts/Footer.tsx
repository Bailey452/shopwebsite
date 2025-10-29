import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4'>
              ShopHub
            </div>
            <p className='text-gray-400 mb-4'>
              Your one-stop destination for all your shopping needs. Quality products at unbeatable prices.
            </p>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href="#" className='hover:text-white transition-colors'> About Us </a> </li>
              <li><a href="#" className='hover:text-white transition-colors'> Contact </a> </li>
              <li><a href="#" className='hover:text-white transition-colors'> FAQ </a> </li>
              <li><a href="#" className='hover:text-white transition-colors'> Shipping Info </a> </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>
              Categories
            </h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href="#" className='hover:text-white transition-colors'> Electronics </a> </li>
              <li><a href="#" className='hover:text-white transition-colors'> Jewelery </a> </li>
              <li><a href="#" className='hover:text-white transition-colors'> Men&apos;s Clothing </a> </li>
              <li><a href="#" className='hover:text-white transition-colors'> Women&apos;s Clothing </a> </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>
              Customer Service
            </h3>
            <ul className='space-y-2 text-gray-400'>
              <li><a href="#" className='hover:text-white transition-colors'> My Account </a> </li>
              <li><a href="#" className='hover:text-white transition-colors'> Order Tracking </a> </li>
              <li><a href="#" className='hover:text-white transition-colors'> Returns </a> </li>
              <li><a href="#" className='hover:text-white transition-colors'> Support </a> </li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>© 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer