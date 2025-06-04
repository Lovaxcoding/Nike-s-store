import Image from "next/image";

import { navLinks } from "@/constants";

const Nav = () => {
  return (
    <header className='absolute w-full z-10'>
      <nav className='flex-between padding-x py-8'>
        <a href='/'>
          <Image
            src='/assets/images/header-logo.svg'
            alt='logo'
            width={129}
            height={29}
            className='m-0'
          />
        </a>
        <ul className='flex-1 flex-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden xl:pr-20'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <Image
            src='/assets/icon/hamburger.svg'
            alt='hamburger icon'
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
