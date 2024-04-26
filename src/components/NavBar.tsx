import LogoHandL from '../assets/img/icon5.png';
import { BsList, BsXLg  } from "react-icons/bs";
import { useState } from 'react';
import Link from './Link';
function NavBar() {

  const [showNav, setShowNav] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  }
  const handleClose = () => {
    setShowNav(false);
    setShowOptions(false);
  }
  const handleOptions = () => {
    setShowOptions(!showOptions);
  }
  return (

    <header id="top_landingPage" className={`flex bg-responsive-secondary lg:bg-secondary justify-evenly border-y-4 border-blue-principal 
    lg:justify-between shadow-md shadow-sky-950 items-center text-xl font-extrabold text-white gap-2 p-2
      ${showNav && 'h-screen flex-col bg-fullScreen border-y-8 lg:h-auto'} sticky top-0 z-40`}>  
      <div className={`ml-0 lg:ml-14 bg-principal rounded-full border-2 border-black/90 ${!showNav ? 'flex' : 'hidden'}`}>
        <a href='/H-L_landingPage#first_section'><img className=' w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]' src={LogoHandL} alt='Company Logo'/></a>
      </div>
      <nav className={`flex w-fit h-auto ${showNav ? 'flex-col justify-center text-center absolute top-10 ' : ''}`}>
        <div className='block lg:hidden'>
          <button onClick={handleShowNav} className=' text-5xl'>{!showNav ? <BsList/> : <BsXLg/>}</button>
        </div>
        <ul className= {` gap-10 w-auto ${showNav ? 'flex flex-col mt-10 items-center' : 'hidden'} lg:flex`}>
          <li className='border-b border-white-500 hover:text-[#ff3654] ease-in-out duration-300 w-fit'><a onClick={handleClose} href='/H-L_landingPage#first_section'>Home</a></li>
          <ul className='flex flex-col lg:relative'>
            <span className='cursor-pointer border-b hover:text-[#ff3654] ease-in-out duration-300 ' onClick={handleOptions}>
              Menu
            </span>
            <div
              className={`${
                showOptions ? 'block' : 'hidden'
              } lg:absolute left-0 top-8 bg-principal p-2 w-[100%] lg:w-[200px] lg:border-2 border-black animation-nav`}
            >
              <li className='lg:border-b border-white-500 hover:text-[#ff3654] ease-in-out duration-300 lg:w-fit'><a onClick={handleClose} href='/H-L_landingPage#our_app_section'>Our App</a></li>
              <li className='lg:border-b border-white-500 hover:text-[#ff3654] ease-in-out duration-300 lg:w-fit'><a onClick={handleClose} href='/H-L_landingPage#second_section'>About Us</a></li>
              <li className='lg:border-b border-white-500 hover:text-[#ff3654] ease-in-out duration-300 lg:w-fit'><a onClick={handleClose} href='/H-L_landingPage#what_we_offer_section'>What we offer</a></li>
            </div>
          </ul>
          <li className='border-b border-white-500 hover:text-[#ff3654] ease-in-out duration-300 w-fit'><Link url='/blog' text='Blog'/></li>
          <li className='border-b border-white-500 hover:text-[#ff3654] ease-in-out duration-300 w-fit'><a onClick={handleClose} href='/H-L_landingPage#support_section'>Support</a></li>
          <li>
            <div className='flex lg:hidden'>
              <button className='flex bg-white font-bold text-black rounded-xl border-2 border-black py-1 px-4'>Go to App</button>
            </div>
          </li>
        </ul>
      </nav>
      <div className='hidden lg:flex mr-14'>
        <div className='flex bg-white font-bold text-black rounded-xl border-2 border-black py-1 px-4'>
          <Link url='/homeApp' text='Go to App'/>
        </div>
      </div>
    </header>
  )
}

export default NavBar