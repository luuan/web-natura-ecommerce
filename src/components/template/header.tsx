'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import Cart from "../cart";
import SearchBar from "../searchbar";
import { SelectCategory } from "../select";
import Logo from "./logo";


import { Bars3Icon, BellIcon, MagnifyingGlassIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface Props {
    showCart?: boolean
}

export default function Header({showCart = true}: Props) {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
          {/* Mobile menu */}
          <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 z-40 flex">
              <DialogPanel
                transition
                className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
              >
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <SelectCategory />
                  </div>
                  <div className="flow-root">
                    <SearchBar />
                  </div>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
          <header className="relative bg-white">
            <p className="flex h-10 items-center justify-center bg-neutral-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
              Aproveite as nossas oportunidades!!!
            </p>
    
            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden md:hidden"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                  </button>    
                  {/* Logo */}
                  <div className="ml-4 flex lg:ml-0">
                    <a href="/" className="-m-1.5 p-1.5">
                      <span className="sr-only">Natura</span>
                      <Logo />
                    </a>
                  </div>

                  <div className="ml-auto justify-center items-center hidden 2xl:flex xl:flex lg:flex">
                    <div className="ml-4 flow-root lg:ml-6">
                      <SelectCategory />
                    </div>
                    <div className="ml-4 flow-root lg:ml-6">
                      <SearchBar />
                    </div>
                  </div>
    
                  <div className="ml-auto flex items-center">
                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-6">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
    )
}