const DetailsSidebar = ({ property }) => {
  return (
    <aside className='space-y-4'>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <h3 className='text-xl font-bold mb-6'>Contact Property Owner</h3>
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
  );
};

export default DetailsSidebar;
