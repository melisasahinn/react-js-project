import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
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

    const refreshPage=() => {
        window.location.reload(false);
      }

    const AbouthandleClick =() => {
        window.scrollTo(0,1600)
    };

    const ServicehandleClick =() => {
        window.scrollTo(0,900)
    };

    const PsikologhandleClick =() => {
        window.scrollTo(0,0)
    };

    const SSShandleClick =() => {
        window.scrollTo(0,0)
    };

    const rspAbouthandleClick =() => {
        window.scrollTo(0,2000)
    };

    const rspServicehandleClick =() => {
        window.scrollTo(0,950)
   
    };


    return ( 
       <header className='w-full md:bg-transparent fixed top-0 left-0 right-0 text-black'>
        <nav className={`py-8 lg:px-14 px-4 mt-[15px] rounded-3xl ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" :""}`}>
            <div className='flex justify-between items-center text-xl gap-8'>
                <a href='/' className='text-3xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-10 inline-block items-center' /><span className='text-[#263238]'>XXXX</span></a>
                <ul className='md:flex space-x-12 hidden'>
                    
                    <li><Link to="/nasilcalisir" onClick={ServicehandleClick} > Nasıl Çalışır</Link></li>
                    <li><Link to="/hakkimizda" onClick={AbouthandleClick}>Hakkımızda</Link></li>
                    <li><Link to="/psikolog" onClick={PsikologhandleClick} >Psikolog</Link></li>
                    <li><Link to="/sss" onClick={SSShandleClick}>SSS</Link></li>

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
            <div className={`space-y-4 px-4 py-10 bg-white flex flex-col items-center h-[1000px] mt-[104px] text-base  ${isMenuOpen ? "block fixed left-0 right-0 top-0" : "hidden"}`}>
                <ul className='text-center gap-4 text-lg' onClick={refreshPage}> 
                    
                    <li><Link to="/nasilcalisir" onClick={rspServicehandleClick}> Nasıl Çalışır</Link></li>
                    <li><Link to="/hakkimizda" onClick={rspAbouthandleClick}>Hakkımızda</Link></li>
                    <li><Link to="/psikolog" onClick={PsikologhandleClick} >Psikolog</Link></li>
                    <li><Link to="/sss" onClick={SSShandleClick}>SSS</Link></li>

                </ul>   
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