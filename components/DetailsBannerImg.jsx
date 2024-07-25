import Image from 'next/image';
const DetailsBannerImg = ({ property }) => {
  return (
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
  );
};
export default DetailsBannerImg;
