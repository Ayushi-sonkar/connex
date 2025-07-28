import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      {/* Backdrop overlay */}
      {toggle && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[45] sm:hidden"
          onClick={() => setToggle(false)}
        />
      )}
      
      <nav className='w-full flex py-6 justify-between items-center navbar relative z-50'>
        <img src={logo} alt='hoobank' className='w-[124px] h-[32px]'/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary transition-colors duration-300`}
            >
              <Link to={nav.id === 'home' ? '/' : `/${nav.id}`}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center relative'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer z-[60] relative'
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar z-[55] border border-gray-600 shadow-2xl`}>
            <ul className='list-none flex flex-col justify-start items-start flex-1 w-full'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-6'} text-white hover:text-secondary transition-colors duration-300 w-full`}
                  onClick={() => setToggle(false)}
                >
                  <Link 
                    to={nav.id === 'home' ? '/' : `/${nav.id}`}
                    className='block w-full py-2 px-2 rounded hover:bg-gray-800 transition-colors duration-300'
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
