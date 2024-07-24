import Link from 'next/link';
import {
  FaInstagram,
  FaFacebook,
  FaSquareTwitter,
  FaSquareYoutube,
  FaLinkedin,
} from 'react-icons/fa6';

const HomeBaner = () => {
  return (
    <div className='banner_lt grid grid-cols-3 gap-10 items-center p-8 sm:p-12'>
      <div className='col-span-full md:col-span-1 justify-self-center md:justify-self-start'>
        <img
          src='/images/darshan_babu.jpg'
          alt='Darshan Babu'
          className='rounded-full max-w-60 md:max-w-full'
        />
      </div>
      <div className='col-span-full md:col-span-2 md:px-8 lg:px-12 justify-self-center md:justify-self-start'>
        <h1 className='capitalize text-2xl sm:text-3xl text-custom4'>
          Find the perfect rental
        </h1>
        <h2 className='text-xl sm:text-2xl text-black pt-3 pb-5'>
          The Ultimate personal freedom
        </h2>
        <Link
          href='/properties'
          className='w-full block text-center bg-black py-3 mb-6 lg:mb-12 rounded-lg font-serif text-xl tracking-[2px] text-white hover:bg-custom4'
        >
          All Properties
        </Link>
        <div className='grid grid-cols-1fr-max-1fr gap-5 items-center before:block before:h-[2px] before:bg-black after:block after:h-[2px] after:bg-black'>
          <div className='text-xl'>Seen 0n</div>
        </div>
        <div className='flex justify-center items-center gap-2 sm:gap-4 lg:gap-8 mt-2'>
          <Link
            href='https://www.instagram.com/'
            target='_blank'
            className='social_links'
          >
            <FaInstagram />
          </Link>
          <Link
            href='https://www.facebook.com/'
            target='_blank'
            className='social_links'
          >
            <FaFacebook />
          </Link>
          <Link href='https://x.com/' target='_blank' className='social_links'>
            <FaSquareTwitter />
          </Link>
          <Link
            href='https://www.youtube.com/'
            target='_blank'
            className='social_links'
          >
            <FaSquareYoutube />
          </Link>
          <Link
            href='https://www.linkedin.com/'
            target='_blank'
            className='social_links'
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBaner;
