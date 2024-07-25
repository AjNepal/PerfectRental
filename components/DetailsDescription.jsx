import {
  FaXmark,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaLocationDot,
} from 'react-icons/fa6';

const DetailsDescription = ({ property }) => {
  return (
    <>
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
            <div className='text-gray-500 mr-2 font-bold'>Nightly</div>
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
            <div className='text-gray-500 mr-2 font-bold'>Monthly</div>
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
        <p className='text-gray-500 mb-4 text-center'>{property.description}</p>
      </div>
    </>
  );
};

export default DetailsDescription;
