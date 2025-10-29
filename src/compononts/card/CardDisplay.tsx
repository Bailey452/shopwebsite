'use client'
import React, { useEffect, useState } from 'react'
import { getProducts } from '@/services/ProductServices'


const FlightForms = () => {
    const [products, setProducts] = useState<any>([])

    const handleSearchFlight = async () => {
        const data = await getProducts()
        setProducts(data)
        console.log(products)
    }




    return (
        <div>
            <form action="" className='for'>
                <div className='mt-5'>
                    <h1>From</h1>
                    <div className='forminput flex justify-between relative items-center overflow-hidden'>
                        <input
                            type="text"
                            className=''
                            placeholder='Depature city or airport'
                        />
                    </div>
                </div>


                <div className='mt-5'>
                    <h1>To</h1>
                    <div className='forminput flex justify-between relative items-center overflow-hidden'>
                        <input
                            type="text"
                            className=''
                            placeholder='Arrival city or airport'
                        />
                    </div>
                </div>


                <div className='mt-5'>
                    <h1>Depature Date</h1>
                    <div className='forminput flex justify-between relative items-center overflow-hidden'>
                        <input
                            type="text"
                            className=''
                            placeholder='📆  Pick a date'
                        />
                    </div>
                </div>


                <div className='mt-5'>
                    <h1>Passengers</h1>
                    <div className='forminput flex justify-between relative items-center overflow-hidden'>
                        <input
                            type="text"
                            className='text-black'
                            placeholder='Choose Passengers'
                        />
                    </div>
                </div>
            </form>

            <button
                className='bg-[#8b5cf6] btn2'
                onClick={handleSearchFlight}
            >
                Search Flight
            </button>

            <div>
                
            </div>
        </div>
    )
}

export default FlightForms