import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center bg-white px-4 xl:px-12 py-10 xl:py-20">
      <div className="container-custom flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[26px] text-start sm:text-[26px] md:text-[30px] lg:text-[32px] xl:text-[50px] 2xl:text-[70px] font-[700] text-black">
            Our Story
          </h2>
          <p className="text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[22px] mt-[15px] text-gray-700 leading-relaxed mb-6">
            Launced in 2015, Exclusive is South Asia’s premier online shopping{' '}
            <br className="hidden xl:block" />
            makterplace with an active presense in Bangladesh. Supported{' '}
            <br className="hidden xl:block" /> by wide range of tailored
            marketing, data and service solutions,{' '}
            <br className="hidden xl:block" /> Exclusive has 10,500 sallers and
            300 brands and serves 3 <br className="hidden xl:block" /> millioons
            customers across the region.
          </p>
          <p className="text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[22px] text-gray-700 leading-relaxed">
            Exclusive has more than 1 Million products to offer, growing at a{' '}
            <br className="hidden xl:block" />
            very fast. Exclusive offers a diverse assortment in categories{' '}
            <br className="hidden xl:block" />
            ranging from consumer.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[400px] xl:w-[650px] flex justify-end lg:justify-end">
          <div className="w-full flex justify-end">
            <Image
              src="/images/SideImageaboutpage.svg"
              alt="About Hero"
              className="w-full lg:w-[600px] xl:w-[650px] h-auto xl:h-[600px]  object-cover rounded-md"
              priority
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
