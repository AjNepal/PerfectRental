import Link from 'next/link';
import { FaHouse } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div className='bg-black py-3 mt-5'>
      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row gap-2 justify-between items-center'>
          <div>
            <Link
              href='/'
              className='text-xl uppercase font-light flex items-center tracking-widest'
            >
              <FaHouse className='bg-customb4 p-[5px] border-[2px] border-custom3 text-xl rounded-full mr-3 h-10 w-10' />
              <span className='w-299-hidden'>Perfect Rental</span>
            </Link>
          </div>
          <div>&copy; {new Date().getFullYear()} Ajay Sharma</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
