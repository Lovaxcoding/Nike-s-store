import { products } from "@/constants";
import { NextPrev, PopularProductCard } from "@/components";

const PopularProducts = () => {
  return (
    <section id='services' className='padding max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-[18px]'>
        <h2 className='text-4xl font-palanquin'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-4 font-montserrat text-slate-gray'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum hic
          a quo minima aliquam autem iusto.
        </p>
      </div>

      <NextPrev />

      <div className='mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
