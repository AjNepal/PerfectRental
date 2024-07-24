import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className='mt-5 text-center'>
      <button
        className={`px-2 md:px-3 py-1 rounded-l-sm ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-custom4 text-white'
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeftLong className='inline-block' /> Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-2 md:px-3 py-1 ${
            page === currentPage ? 'bg-custom4 text-white' : 'bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        className={`px-2 md:px-3 py-1 rounded-r-sm ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-custom4 text-white'
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <FaArrowRightLong className='inline-block' />
      </button>
    </div>
  );
};
export default Pagination;
