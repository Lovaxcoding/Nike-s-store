"use client";

import Image from "next/image";
import { useState } from "react";

import { shoes, statistics } from "@/constants";
import { Button, ShoeCard } from "@/components";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState("/assets/images/big-shoe1.png");

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 padding-b'
    >
      <div className='relative xl:w-[40%] flex flex-col justify-center items-start w-full padding-l max-xl:padding-r pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-[30px] mt-6 mb-14 sm:max-w-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          repellendus.
        </p>

        <Button label='Shop now' iconURL='/assets/icon/arrow-right.svg' />

        <div className='flex justify-start items-start flex-wrap w-full mt-[78px] gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <Image
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          original={100}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
