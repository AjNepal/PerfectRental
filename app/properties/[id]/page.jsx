'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaArrowLeftLong,
  FaXmark,
  FaCheck,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaLocationDot,
} from 'react-icons/fa6';
import { Gallery, Item } from 'react-photoswipe-gallery';

const PropertyPage = () => {
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

  const { id } = useParams();
  const property = properties.find((item) => item._id === id);

  if (!property) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Gallery>
        <section className='pt-5 mb-4'>
          <div className='mx-w-7xl bg-gray-800 mx-auto py-2 px-4 sm:px-6 lg:px-8 flex flex-col'>
            <Link
              href='/properties'
              className='text-white hover:text-slate-50 flex items-center'
            >
              <FaArrowLeftLong className='mr-2' /> Back to Properties
            </Link>
          </div>
        </section>
        <section>
          <div className='container-xl m-auto'>
            <div className='grid grid-cols-1'>
              <Image
                src={`/images/properties/${property.images[0]}`}
                alt={property.name}
                className='object-cover h-[400px] w-full'
                width={0}
                height={0}
                sizes='100vw'
                priority={true}
              />
            </div>
          </div>
        </section>
        <section className='bg-white md:pr-6'>
          <div className='container m-auto py-10 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
              <main>
                <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                  <div className='text-gray-500 mb-4'>{property.type}</div>
                  <h1 className='text-3xl font-bold mb-4'>{property.name}</h1>
                  <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                    <FaLocationDot className='text-lg text-orange-700 mr-2' />
                    <p className='text-orange-700'>
                      {property.location.street} {', '} {property.location.city}
                      {', '}
                      {property.location.state}
                    </p>
                  </div>

                  <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
                    Rates & Options
                  </h3>
                  <div className='flex flex-col md:flex-row justify-around'>
                    <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
                      <div className='text-gray-500 mr-2 font-bold'>
                        Nightly
                      </div>
                      <div className='text-2xl font-bold'>
                        {property.rates.nightly ? (
                          `$${property.rates.nightly.toLocaleString()}`
                        ) : (
                          <FaXmark className='text-red-700' />
                        )}
                      </div>
                    </div>
                    <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
                      <div className='text-gray-500 mr-2 font-bold'>Weekly</div>
                      <div className='text-2xl font-bold'>
                        {property.rates.weekly ? (
                          `$${property.rates.weekly.toLocaleString()}`
                        ) : (
                          <FaXmark className='text-red-700' />
                        )}
                      </div>
                    </div>
                    <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
                      <div className='text-gray-500 mr-2 font-bold'>
                        Monthly
                      </div>
                      <div className='text-2xl font-bold'>
                        {property.rates.monthly ? (
                          `$${property.rates.monthly.toLocaleString()}`
                        ) : (
                          <FaXmark className='text-red-700' />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                  <h3 className='text-lg font-bold mb-6 text-center'>
                    Description & Details
                  </h3>
                  <div className='flex justify-center gap-4 text-custom3 mb-4 text-xl space-x-9'>
                    <p>
                      <FaBed className='inline-block mr-1' /> {property.beds}{' '}
                      <span className='hidden sm:inline'>Beds</span>
                    </p>
                    <p>
                      <FaBath className='inline-block mr-1' /> {property.baths}{' '}
                      <span className='hidden sm:inline'>Baths</span>
                    </p>
                    <p>
                      <FaRulerCombined className='inline-block mr-1' />
                      {property.square_feet}{' '}
                      <span className='hidden sm:inline'>sqft</span>
                    </p>
                  </div>
                  <p className='text-gray-500 mb-4 text-center'>
                    {property.description}
                  </p>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                  <h3 className='text-lg font-bold mb-6'>Amenities</h3>

                  <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
                    {property.amenities.map((amenity, index) => (
                      <li key={index}>
                        <FaCheck className='text-green-600 mr-2 inline-block' />{' '}
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                  <div id='map'>
                    <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5'>
                      {property.images.map((img, index) => (
                        <li key={index}>
                          <Item
                            original={`/images/properties/${img}`}
                            thumbnail={`/images/properties/${img}`}
                            width='1000'
                            height='600'
                          >
                            {({ ref, open }) => (
                              <img
                                ref={ref}
                                onClick={open}
                                src={`/images/properties/${img}`}
                                alt={`Image ${index + 1}`}
                                className='w-[200px] cursor-pointer'
                                width={0}
                                height={0}
                                sizes='100vw'
                                priority={true}
                              />
                            )}
                          </Item>
                          {/* <Image
                            src={`/images/properties/${img}`}
                            alt={`Image ${index + 1}`}
                            className='w-[200px]'
                            width={0}
                            height={0}
                            sizes='100vw'
                            priority={true}
                          /> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </main>
              <aside className='space-y-4'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                  <h3 className='text-xl font-bold mb-6'>
                    Contact Property Owner
                  </h3>
                  <div className='mb-4'>
                    <span className='inline-block text-gray-700 text-sm font-bold mr-2'>
                      Name:
                    </span>
                    {property.seller_info.name}
                  </div>
                  <div className='mb-4'>
                    <span className='inline-block text-gray-700 text-sm font-bold mr-2'>
                      Email:
                    </span>
                    {property.seller_info.email}
                  </div>
                  <div className='mb-4'>
                    <span className='inline-block text-gray-700 text-sm font-bold mr-2'>
                      Phone:
                    </span>
                    {property.seller_info.phone}
                  </div>
                  <div className='mb-4'>
                    <span className='inline-block text-gray-700 text-sm font-bold mr-2'>
                      updated At:
                    </span>
                    {property.updatedAt}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </Gallery>
    </>
  );
};

export default PropertyPage;
