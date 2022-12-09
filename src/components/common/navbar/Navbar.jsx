import React, { useState } from 'react'
import Button from './Button';

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"ABOUT",link:"/about"},
      {name:"PORTFOLIO",link:"/portfolio"},
      {name:"CONTACT",link:"/contact"},
      {name:"RESUME",link:"/resume"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-[#121212] py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Aboreto-Regular] 
      text-white'>
        <span className='text-3xl text-white mr-1 pt-2'>
        <ion-icon name="triangle-outline"></ion-icon>
        </span>
        Foster Thomas
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#121212] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        {/* <Button>
          Get Started
        </Button> */}
      </ul>
      </div>
    </div>
  )
}

export default Navbar
// export default Navbar;

// return (
//   //     <section className="nav">
//   //   <Link to="/" className="nav-item">Home</Link>
//   //   <Link to="/about" className="nav-item">About</Link>
//   //   <Link to="/portfolio" className="nav-item">Portfolio</Link>
//   //   <Link to="/contact" className="nav-item">Contact</Link>
//   //   <Link to="/resume" className="nav-item">Resume</Link>

//   // </section>
//     <div className='shadow-md w-full fixed'
  
//   )