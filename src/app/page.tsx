'use client'
import React from 'react'
import Navabar from '@/compononts/Navbar'
import Hero from '@/compononts/Hero'
import About from '@/compononts/About'
import Update from '@/compononts/Update'
import Footer from '@/compononts/Footer'
import Categories from '@/compononts/Categories'
import Featured from '@/compononts/Featured'

const page = () => {
    return (
        <div>
            <Navabar />
            <Hero />
            <About />
            <Categories />
            <Featured />
            <Update />
            <Footer />
        </div>
    )
}

export default page