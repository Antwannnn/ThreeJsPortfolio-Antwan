import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants/infos';
import { menu, close, logo } from '../assets/constants';

const Navbar = () => {

  function closeMenuOnActive(active) {
    setActive(active);
    setToggle(!toggle);
  }

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full dark-rose-red-simple flex items-center py-5 fixed top-0 z-20 blue-grey-simple `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
        to='/' 
        className='flex items-center'
        onClick={() => {setActive("");
        window.scrollTo(0, 0);}}>
        <img src={logo} alt="logo" className='w-5 h-9 object-contain' />
        <p className="text-white text-[18px] font-extrabold cursor-pointer">ntoine Leboucher</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-5'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-dark-pink-red"} 
            transition ease-in-out hover:text-white text-[14px] font-medium cursor-pointer duration-200`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' 
          onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 dark-rose-red-simple absolute top-[4.75em] left-0 z-10 w-full` }>
          <ul className='list-none flex justify-end items-start flex-col gap-8'>
            {navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-dark-pink-red"} 
              transition ease-in-out hover:text-white text-[14px] font-medium cursor-pointer duration-200`} onClick={() => closeMenuOnActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar