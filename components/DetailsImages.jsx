import { Item } from 'react-photoswipe-gallery';
const DetailsImages = ({ property }) => {
  return (
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
  );
};
export default DetailsImages;
