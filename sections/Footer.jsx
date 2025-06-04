import Image from "next/image";
import Link from "next/link";

import { footerLinks, socialMedia } from "@/constants";

const Footer = () => {
  return (
    <footer className='bg-black padding-x padding-t pb-8'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <Link href='/'>
            <Image
              src='/assets/images/footer-logo.svg'
              alt='logo'
              width={150}
              height={46}
              quality={100}
              className='m-0'
            />
          </Link>
          <p className='mt-6 text-base leading-[28px] font-montserrat text-white sm:max-w-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fuga
            consectetur quaerat inventore accusamus praesentium!
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white hover:text-slate-gray'
                    key={link.name}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer'>
          <Image
            src='/assets/icon/copyright-sign.svg'
            alt='copyright sign'
            width={20}
            height={20}
            quality={100}
            className='rounded-full m-0'
          />
          <p>Copyright.All right reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Term & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
