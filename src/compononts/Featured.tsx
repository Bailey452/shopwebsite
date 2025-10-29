"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "@/services/ProductServices";
import { PRODUCT } from "@/types/productType";
import Image from "next/image";
import Cart from "./Cart";
import { useCart } from "@/context/CartContext";

const Featured = () => {
    const [products, setProducts] = useState<PRODUCT[]>([]);
    const [showCart, setShowCart] = useState(false);
    const { cart, addToCart, setCart } = useCart();

    const handleAddToCart = (product: PRODUCT) => {
        addToCart(product);
        setShowCart(true);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto py-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our handpicked selection of premium products at amazing prices
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((item) => {
                        const imageUrl = item.imageUrl.startsWith("http") ? item.imageUrl : `https://${item.imageUrl}`;

                        return (
                            <div key={item.id} className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <div className="relative overflow-hidden">
                                    {item.imageUrl ? (
                                        <Image
                                            src={imageUrl}
                                            alt={item.name}
                                            width={200}
                                            height={200}
                                            className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                                        />
                                    ) : (
                                        <div className="w-[200px] h-[200px] bg-gray-200 flex items-center justify-center">
                                            <span>No image</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{item.name}</h3>
                                    <div className='flex items-center mb-2'>
                                        <div className='flex items-center'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-star w-3 h-3 text-yellow-400 fill-current" >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 
                                            1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 
                                            5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 
                                            0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 
                                            0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-star w-3 h-3 text-yellow-400 fill-current" >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 
                                            1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 
                                            5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 
                                            0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 
                                            0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-star w-3 h-3 text-yellow-400 fill-current" >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 
                                            1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 
                                            5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 
                                            0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 
                                            0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-star w-3 h-3 text-gray-300 fill-current" >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 
                                            1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 
                                            5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 
                                            0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 
                                            0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide lucide-star w-3 h-3 text-gray-300 fill-current" >
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 
                                            1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 
                                            5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 
                                            0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 
                                            0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                        </div>
                                        <span className='text-sm text-gray-500 ml-1'>(120)</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-lg font-bold text-gray-900">{item.price}</span>
                                        <span className="text-xs text-gray-500">{item.brandName}</span>
                                    </div>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {showCart && <Cart cart={cart} setShowCart={setShowCart} setCart={setCart} />}
            </div>
        </div>
    );
};

export default Featured;
