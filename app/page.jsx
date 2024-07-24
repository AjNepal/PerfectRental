'use client';
import HomeBaner from '@/components/HomeBanner';
import PropertyCard from '@/components/PropertyCard';
import { FaPhone, FaRegEnvelope, FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(function () {
    async function getProperties() {
      try {
        const response = await fetch(
          'https://ajnepal.github.io/property/fake_data.json'
        );
        const data = await response.json();
        setProperties(data);
      } catch {
        alert('There was a problem loading the data');
      }
    }
    getProperties();
  }, []);

  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-70/30'>
        <HomeBaner />
        <div className='bg-custom4 px-4 md:px-8 py-6 pt-8 lg:pt-6 border-t-[1px] border-custom3 flex items-center justify-center'>
          <div className='text-white border-2 border-custom3 rounded-lg px-5 py-3 relative'>
            <h2 className='absolute w-[150px] left-[50%] -top-4 -translate-x-[50%] text-center text-lg uppercase tracking-widest bg-custom4'>
              Contact
            </h2>
            <h3 className='mt-3 font-bold tracking-widest'>The Manager</h3>
            <h6 className='mt-3 flex'>
              <FaLocationDot className='inline-block pr-3 text-3xl' />
              1/450 THAMEL, KATHMANDAU, NEPAL
            </h6>
            <h5 className='mt-3 flex'>
              <FaRegEnvelope className='inline-block pr-3 text-3xl' />{' '}
              recental@gmail.com
            </h5>
            <h5 className='mt-3 flex'>
              <FaPhone className='inline-block pr-3 text-3xl' /> +977 1 5555555
            </h5>
          </div>
        </div>
      </section>
      <section className='py-8 pb-12 px-4 bg-white mt-8 rounded-sm'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-custom4 mb-6 text-center'>
            Recent Properties
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {recentProperties == 0 ? (
              <p>No Recent Properties Found</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>
      <section className='m-auto max-w-lg my-10 px-6'>
        <Link
          href='/properties'
          className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomePage;
