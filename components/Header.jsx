'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaHouse, FaBars, FaXmark } from 'react-icons/fa6';

const Header = () => {
  const pathname = usePathname();
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobNavOpen(true);
      } else {
        setIsMobNavOpen(false);
      }
    };
    // Set the initial value based on the current window width
    handleResize();
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDivHidden = () => {
    if (window.innerWidth < 640) {
      setIsMobNavOpen(false);
    }
  };

  return (
    <div className='bg-black'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between min-h-20 mx-4 relative'>
          <div className='absolute right-0 sm:hidden'>
            {!isMobNavOpen ? (
              <FaBars
                className='text-white w-6 h-6'
                onClick={() => setIsMobNavOpen(true)}
              />
            ) : (
              <FaXmark
                className='text-white w-6 h-6'
                onClick={() => setIsMobNavOpen(false)}
              />
            )}
          </div>
          <div>
            <Link
              href='/'
              className='text-2xl uppercase font-light flex items-center tracking-widest'
            >
              <FaHouse className='bg-customb4 p-[5px] border-[2px] border-custom3 text-4xl rounded-full mr-3 h-12 w-12' />
              <span className='w-299-hidden'>Perfect Rental</span>
            </Link>
          </div>
          {isMobNavOpen && (
            <div className='absolute w-full -bottom-full bg-custom2 sm:relative sm:w-auto sm:-bottom-auto sm:bg-black z-10'>
              <Link
                href='/'
                className={`${
                  pathname === '/' ? 'nav_link_active' : ''
                }  nav_link mr-0 sm:mr-3`}
                onClick={handleDivHidden}
              >
                Home
              </Link>
              <Link
                href='/properties'
                className={`${
                  pathname === '/properties' ? 'nav_link_active' : ''
                } nav_link ml-0 sm:ml-3`}
                onClick={handleDivHidden}
              >
                Properties
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
