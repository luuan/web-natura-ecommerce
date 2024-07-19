"use client"

import CartTemplate from '@/components/template/cart-template'
import { IconArrowLeft, IconArrowRight, IconTag, IconTrash } from '@tabler/icons-react'
import { useState } from 'react';

export default function CartPage() {
    const [showMore, setShowMore] = useState(false)
    const [count, setCount] = useState(0);

    return (
        <CartTemplate>
            <div className="container mx-auto mt-10">
                <div className="sm:flex shadow-md my-10">
                    <div className="w-full sm:w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Seu Carrinho</h1>
                        </div>
                        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <img src="https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf1c6a395/NATBRA-148170_1.jpg&w=384&q=60" alt="Black Leather Purse"
                                    className="h-full object-center object-cover md:block hidden" />
                                <img src="https://tiinside.com.br/wp-content/uploads/2018/04/natura.jpg" alt="Black Leather Purse"
                                    className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base font-black leading-none text-gray-800">Luxe card holder</p>
                                    <a className="text-xs leading-3 text-red-500 pl-5 cursor-pointer">
                                        <IconTrash />
                                    </a>
                                </div>
                            
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base font-black leading-none text-gray-800">R$ 300,00</p>

                                    
                                </div>
                            
                            </div>
                        </div>

                        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <img src="https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf1c6a395/NATBRA-148170_1.jpg&w=384&q=60" alt="Black Leather Purse"
                                    className="h-full object-center object-cover md:block hidden" />
                                <img src="https://tiinside.com.br/wp-content/uploads/2018/04/natura.jpg" alt="Black Leather Purse"
                                    className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base font-black leading-none text-gray-800">Luxe card holder</p>
                                    <a className="text-xs leading-3 text-red-500 pl-5 cursor-pointer">
                                        <IconTrash />
                                    </a>
                                </div>
                            
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base font-black leading-none text-gray-800">R$ 300,00</p>

                                    <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            
                            </div>
                        </div>

                        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <img src="https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf1c6a395/NATBRA-148170_1.jpg&w=384&q=60" alt="Black Leather Purse"
                                    className="h-full object-center object-cover md:block hidden" />
                                <img src="https://tiinside.com.br/wp-content/uploads/2018/04/natura.jpg" alt="Black Leather Purse"
                                    className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base font-black leading-none text-gray-800">Luxe card holder</p>
                                    <a className="text-xs leading-3 text-red-500 pl-5 cursor-pointer">
                                        <IconTrash />
                                    </a>
                                </div>
                            
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base font-black leading-none text-gray-800">R$ 300,00</p>

                                    <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            
                            </div>
                        </div>

                        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <img src="https://ncf-ssr-akamai.prd.naturacloud.com/_next/image?url=https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwf1c6a395/NATBRA-148170_1.jpg&w=384&q=60" alt="Black Leather Purse"
                                    className="h-full object-center object-cover md:block hidden" />
                                <img src="https://tiinside.com.br/wp-content/uploads/2018/04/natura.jpg" alt="Black Leather Purse"
                                    className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base font-black leading-none text-gray-800">Luxe card holder</p>
                                    <a className="text-xs leading-3 text-red-500 pl-5 cursor-pointer">
                                        <IconTrash />
                                    </a>
                                </div>
                            
                                <div className="flex items-center justify-between pt-5">
                                    <p className="text-base font-black leading-none text-gray-800">R$ 300,00</p>

                                    <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            
                            </div>
                        </div>
                        
                        <div>
                            <a href="/" className="flex font-semibold text-indigo-600 text-sm">
                                <IconArrowLeft />
                                <p className='content-center'>Continuar comprando</p>
                            </a>
                        </div>
                    </div>
                    <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Sumário</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm text-gray-400">Subtotal</span>
                            <span className="font-extrabold text-sm">R$ 600,00</span>
                        </div>
                        <div className="flex justify-between mb-5">
                            <span className="font-semibold text-sm text-gray-400">Desconto (-20%)</span>
                            <span className="font-extrabold text-sm text-red-500">-R$ 161,00</span>
                        </div>

                        <div className="flex justify-between mb-5">
                            <span className="font-semibold text-sm text-gray-400">Frete</span>
                            <span className="font-extrabold text-sm">R$ 15,00</span>
                        </div>

                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm">
                                <span className='text-gray-600'>Total</span>
                                <span className="font-extrabold text-sm">R$ 644,00</span>
                            </div>
                            <div className="flex flex-row py-4  justify-between">
                                <div className="relative text-gray-400 focus-within:text-gray-600 block">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <IconTag />
                                    </span>

                                    <input id="cupom" placeholder="Cupom" className="form-input py-2 px-4 bg-gray-100 placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none rounded-3xl"/>
                                </div>
                                <button className="bg-black hover:bg-gray-600 px-5 py-2 text-xs text-white rounded-3xl">
                                    Aplicar
                                </button>
                            </div>
                            <div>
                                <button
                                    className="bg-orange-400 font-semibold hover:bg-green-600 py-2 text-xs text-white w-full rounded-3xl flex justify-center">
                                    <p className='my-auto mr-2'>Finalizar compra</p>
                                    <div>
                                        <IconArrowRight/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CartTemplate>
    )
}