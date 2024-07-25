import { FaCheck } from 'react-icons/fa6';
const DetailsAmenities = ({ property }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
      <h3 className='text-lg font-bold mb-6'>Amenities</h3>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none'>
        {property.amenities.map((amenity, index) => (
          <li key={index}>
            <FaCheck className='text-green-600 mr-2 inline-block' /> {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailsAmenities;
