'use client';
import DetailsBannerImg from '@/components/DetailsBannerImg';
import DetailsDescription from '@/components/DetailsDescription';
import DetailsAmenities from '@/components/DetailsAmenities';
import DetailsImages from '@/components/DetailsImages';
import DetailsSidebar from '@/components/DetailsSidebar';
import Spinner from '@/components/Spinner';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import { FaArrowLeftLong } from 'react-icons/fa6';
import { Gallery } from 'react-photoswipe-gallery';

const PropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

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
      } finally {
        setLoading(false); // Set loading to false after data fetching
      }
    }
    getProperties();
  }, []);

  const { id } = useParams();
  const property = properties.find((item) => item._id === id);

  if (!property && !loading) {
    return <div>Property not found</div>;
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
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
              <DetailsBannerImg property={property} />
            </section>
            <section className='bg-white md:pr-6'>
              <div className='container m-auto py-10 px-6'>
                <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
                  <main>
                    <DetailsDescription property={property} />
                    <DetailsAmenities property={property} />
                    <DetailsImages property={property} />
                  </main>
                  <DetailsSidebar property={property} />
                </div>
              </div>
            </section>
          </Gallery>
        </>
      )}
    </>
  );
};

export default PropertyPage;
