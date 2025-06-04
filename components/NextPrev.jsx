import Image from "next/image";

const NextPrev = () => {
  return (
    <div className='flex justify-end gap-[14px]'>
      <button>
        <Image
          src='/assets/icon/chevron-left.svg'
          alt='chevron left'
          width={48}
          height={48}
          className='max-sm:w-8'
        />
      </button>
      <button>
        <Image
          src='/assets/icon/chevron-right.svg'
          alt='chevron right'
          width={48}
          height={48}
          className='max-sm:w-8'
        />
      </button>
    </div>
  );
};

export default NextPrev;
