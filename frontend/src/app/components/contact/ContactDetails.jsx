import React from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-[300px] rounded-sm duration-300 my-[50px] mb-[80px] py-[20px]">
      <div className="w-full">
        {/* Call Section */}
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white">
            <FiPhoneCall size={18} />
          </span>
          <h3 className="font-[700] text-[18px] sm:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[30px]">
            Call To Us
          </h3>
        </div>

        <p className="mt-4 text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] text-gray-600">
          We are available 24/7, 7 days a week.
        </p>
        <p className="mt-2 text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] text-gray-600">
          Phone: +8801611112222
        </p>
      </div>
      <hr className="my-6  lg:my-[35px] border-gray-300" />
      {/* Write Section */}
      <div className="">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white">
            <FiMail size={18} />
          </span>
          <h3 className="font-[700] text-[18px] sm:text-[20px] lg:text-[25px] xl:text-[28px] 2xl:text-[22]">
            Write To US
          </h3>
        </div>

        <p className="mt-4 text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] text-gray-600">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="mt-2 text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] text-gray-600">
          Emails: customer@exclusive.com
        </p>
        <p className="mt-1 text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] text-gray-600">
          Emails: support@exclusive.com
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
