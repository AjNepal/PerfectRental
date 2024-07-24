const SearchForm = ({
  propertyType,
  setPropertyType,
  uniquePropertyTypes,
  city,
  setCity,
  uniqueCities,
}) => {
  return (
    <div className='bg-custom4 px-4 md:px-8 pt-6 py-6 flex flex-col md:flex-row items-center justify-center gap-5 mt-8'>
      <select
        className='block w-full md:w-[250px] lg:w-[350px] focus:outline-none px-4 py-3 rounded-sm focus:ring focus:ring-custombg1'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value='All'>All Cities</option>
        {uniqueCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select
        className='block w-full md:w-[250px] lg:w-[350px] focus:outline-none px-4 py-3 rounded-sm focus:ring focus:ring-custombg1'
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value='All'>All Types</option>
        {uniquePropertyTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SearchForm;
