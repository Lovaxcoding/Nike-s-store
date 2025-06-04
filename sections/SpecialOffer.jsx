import Image from "next/image";

import { Button } from "@/components";

const SpecialOffer = () => {
  return (
    <section className='flex-between max-xl:flex-col-reverse gap-10 padding'>
      <div className='flex-1'>
        <Image
          src='/assets/images/offer.png'
          alt='Shoe Promotion'
          width={773}
          height={687}
          quality={100}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 font-montserrat text-lg leading-[28px] text-slate-gray'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          incidunt accusantium dolorum sed quaerat molestias provident. Ullam
          deserunt voluptatem ab amet laborum sint sed, architecto .
        </p>
        <p className='mt-6 font-montserrat text-lg leading-[28px] text-slate-gray '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          reprehenderit numquam iusto cum dolorum vel ratione tenetur doloremque
          et quisquam.
        </p>
        <div className='mt-14 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL='/assets/icon/arrow-right.svg' />
          <Button
            label='Learn more'
            backgroundColor='white'
            borderColor='slate-gray'
            textColor='slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
