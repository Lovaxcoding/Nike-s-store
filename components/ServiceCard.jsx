import Image from "next/image";

const ServiceCard = ({ imgURL, label }) => {
  return (
    <div className='flex-1 sm:max-w-[350px] max-w-full sm:min-w-[350px] min-w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-[44px] h-[44px] flex-center bg-coral-red rounded-full'>
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal'>{label}</h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
    </div>
  );
};

export default ServiceCard;
