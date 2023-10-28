import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import {FaXing , FaBars} from 'react-icons/fa';
import LoginModel from './LoginModel';
import SignUpModel from './SignUpModel'

const Navbar = () => 
{
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const [isSticky, setIsSticky] = React.useState(false);
   const [openModel, setOpenModel] = React.useState(false);
   const [openSignUp, setOpenSignUp] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
           window.addEventListener('scroll', handleScroll); 
        };
    });

    const navItems = [
        { link:"Nasıl Çalışır", path:"home"},
        { link:"Hakkımızda", path:"service"},
        { link:"Psikologlarımız", path:"about"},
        { link:"S.S.S.", path:"product"}
    ];

    return ( 
       <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 text-black'>
        <nav className={`py-8 lg:px-14 px-4 m-2 rounded-3xl ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" :""}`}>
            <div className='flex justify-between items-center text-xl gap-8'>
                <a href='' className='text-3xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]'>XXXX</span></a>
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => 
                            <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-xl text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>
                        )
                    }
                </ul>
                <div className='space-x-12 hidden lg:flex items-center'>
                    <div>
                        <button className='hidden lg:flex items-center text-brandPrimary hover:text-gray900' onClick={() => setOpenModel(true)} >Login</button>
                        {openModel && <LoginModel closeModal={setOpenModel} /> }
                    </div>
                    <div>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey' onClick={() => setOpenSignUp(true)}>Sign Up</button>
                        {openSignUp && <SignUpModel closeModal={setOpenSignUp} /> }
                    </div>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? <FaXing className='h-6 w-6' /> : <FaBars className='h-6 w-6' />
                        }
                    </button>
                </div>   
            </div>   
            <div className={`space-y-4 px-4 py-10 bg-white flex flex-col items-center h-[450px] mt-[114px] text-base  ${isMenuOpen ? "block fixed left-0 right-0 top-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) => 
                    <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-black hover:text-brandPrimary first:font-medium'>{link}</Link>)
                }
               
                <div>
                    <button className='lg:flex items-center text-brandPrimary hover:text-gray900' onClick={() => setOpenModel(true)} >Login</button>
                    {openModel && <LoginModel closeModal={setOpenModel} /> }
                </div>
                <div>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey' onClick={() => setOpenSignUp(true)}>Sign Up</button>
                    {openSignUp && <SignUpModel closeModal={setOpenSignUp} /> }
                </div>
            </div>
        </nav>
       </header>
    )
};

export default Navbar;