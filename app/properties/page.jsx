'use client';
import PropertyCard from '@/components/PropertyCard';
import Pagination from '@/components/Pagination';
import SearchForm from '@/components/SearchForm';
import { useEffect, useState } from 'react';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [propertyType, setPropertyType] = useState('All');
  const [city, setCity] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 6;

  useEffect(() => {
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

  // const filteredProperties = properties.filter(
  //   (property) => propertyType === 'All' || property.type === propertyType
  // );

  const filteredProperties = properties.filter(
    (property) =>
      (propertyType === 'All' || property.type === propertyType) &&
      (city === 'All' ||
        property.location.city.toLowerCase().includes(city.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredProperties.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentItems = filteredProperties.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const uniquePropertyTypes = [
    ...new Set(properties.map((property) => property.type)),
  ];
  const uniqueCities = [
    ...new Set(properties.map((property) => property.location.city)),
  ];

  return (
    <>
      <SearchForm
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        uniquePropertyTypes={uniquePropertyTypes}
        city={city}
        setCity={setCity}
        uniqueCities={uniqueCities}
      />
      <div className='py-8 pb-12 px-4 bg-white mt-8 rounded-sm'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {currentItems.length === 0 ? (
            <p className='text-xl pb-10'>
              In <span className='text-custom3'>{city}</span> No{' '}
              <span className='text-custom3'>{propertyType}</span> Found
            </p>
          ) : (
            currentItems.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Properties;
