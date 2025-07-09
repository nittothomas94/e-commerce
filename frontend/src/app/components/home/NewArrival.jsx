import React from 'react';

const products = [
  {
    id: 1,
    title: 'PlayStation 5',
    description: 'Black and White version of the PS5 coming out on sale.',
    image: '/images/playstation5_scaled.svg',
    className: 'row-span-2 col-span-2',
  },
  {
    id: 2,
    title: 'Women’s Collections',
    description: 'Featured woman collections that give you another vibe.',
    image: '/images/womens-collection.svg',
    className: 'col-span-2',
  },
  {
    id: 3,
    title: 'Speakers',
    description: 'Amazon wireless speakers',
    image: '/images/speekers.png',
    className: '',
  },
  {
    id: 4,
    title: 'Perfume',
    description: 'GUCCI INTENSE OUD EDP',
    image: '/images/prfume.png',
    className: 'hidden md:block',
  },
];

const NewArrival = () => {
  return (
    <section className="w-full px-[5px]">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8 gap-[10px] md:[15px]">
          <span className="text-sm text-red-500 font-semibold">Featured</span>
          <h2 className="text-3xl xl:text-4xl font-bold">New Arrival</h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 xl:gap-6 py-6 xl:py-[20px] xl:h-[750px]">
          {products.map(product => (
            <div
              key={product.id}
              className={`relative overflow-hidden rounded-xl ${product.className}`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain z-10"
              />
              <div className="absolute inset-0 bg-black opacity-80 flex flex-col justify-end p-4"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="text-white text-base sm:text-lg xl:text-xl font-semibold">
                  {product.title}
                </h3>
                <p className="text-white text-sm xl:text-base">
                  {product.description}
                </p>
                <button className="mt-2 text-white underline text-sm text-start xl:text-base">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
