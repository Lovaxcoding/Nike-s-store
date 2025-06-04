import Image from "next/image";

const ReviewCard = ({ imgURL, customerName, rating }) => {
  return (
    <div className='flex-center flex-col'>
      <Image
        src={imgURL}
        alt='customer'
        width={120}
        height={120}
        original={100}
        className='rounded-full'
      />
      <p className='mt-6 font-montserrat max-w-sm text-center text-slate-gray text-lg leading-7'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit
        soluta ea dolorum repellat consectetur atque ex corporis minus maiores?
      </p>
      <div className='mt-3 flex-center gap-[10px]'>
        <Image
          src='/assets/icon/star.svg'
          alt='rating star'
          width={24}
          height={24}
          original={100}
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
