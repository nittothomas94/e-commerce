import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { BiHeadphone } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';

const benefits = [
  {
    id: 1,
    icon: <FaShippingFast size={24} className="text-white" />,
    title: 'FREE AND FAST DELIVERY',
    desc: 'Free delivery for all orders over $140',
  },
  {
    id: 2,
    icon: <BiHeadphone size={24} className="text-white" />,
    title: '24/7 CUSTOMER SERVICE',
    desc: 'Friendly 24/7 customer support',
  },
  {
    id: 3,
    icon: <BsShieldCheck size={24} className="text-white" />,
    title: 'MONEY BACK GUARANTEE',
    desc: 'We return money within 30 days',
  },
];

const Benefits = () => {
  return (
    <section className="container-custom flex justify-center xl:mb-[20px]">
      <div className="container-custom flex flex-col gap-[30px] md:flex-row items-center justify-evenly py-[40px] md:py-[50px] lg:py-[60px]">
        {benefits.map(item => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <h3 className="text-sm xl:text-base font-bold">{item.title}</h3>
            <p className="text-xs xl:text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
