'use client'
import React, { useState } from 'react'
import { useCart } from '@/context/CartContext'
import CartComponent from './Cart'

const Navbar = () => {
  const { cartNumber, cart, setCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar1'>
        <div className='text-2xl font-bold bg-gradient-to-r 
        from-purple-600 to-blue-600 bg-clip-text text-transparent'>
          ShopHub
        </div>

        <div className='input'>
          <input
            type="text"
            placeholder="Search for products..."
            className='inp h-[100%] w-[93%]'
          />
        </div>

        <div className='flex items-center space-x-4'>
          <button className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background 
        transition-colors hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 hidden md:flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-4 h-4">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 
              5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>

          <button className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background 
          transition-colors hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 hidden md:flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-4 h-4">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          {/* Shopping Cart */}
          <button
            onClick={() => setShowCart(true)}
            className='relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium hover:bg-accent 
            hover:text-accent-foreground h-9 rounded-md px-3'
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="lucide lucide-shopping-cart w-4 h-4">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>

            {/* Cart count badge */}
            {cartNumber > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {cartNumber}
              </span>
            )}
          </button>
        </div>
      </div>

      <hr className='w-[98%] text-gray-300' />

      <div className='navbar2'>
        <h1 className='btn1 text-gray-700 hover:text-purple-600 transition-colors font-medium'>Home</h1>
        <h1 className='btn1 text-gray-700 hover:text-purple-600 transition-colors font-medium'>Electronics</h1>
        <h1 className='btn1 text-gray-700 hover:text-purple-600 transition-colors font-medium'>Fashion</h1>
        <h1 className='btn1 text-gray-700 hover:text-purple-600 transition-colors font-medium'>Jewelery</h1>
        <h1 className='btn1 text-gray-700 hover:text-purple-600 transition-colors font-medium'>Men's Clothing</h1>
        <h1 className='btn1 text-gray-700 hover:text-purple-600 transition-colors font-medium'>Wemen's Clothing</h1>
      </div>

      {/* Cart Sidebar */}
      {showCart && <CartComponent cart={cart} setCart={setCart} setShowCart={setShowCart} />}
    </div>
  )
}

export default Navbar
