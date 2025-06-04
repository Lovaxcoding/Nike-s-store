import Image from "next/image";

import { Button } from "@/components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex-between max-lg:flex-col gap-10 w-full padding'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-[28px]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ad iusto quos minus. Expedita consequatur magnam non ipsa in
          voluptatem voluptas labore unde et, veritatis .
        </p>
        <p className='mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-[28px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, fugiat?
        </p>
        <div className='mt-14'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex-center'>
        <Image
          src='/assets/images/shoe8.png'
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
