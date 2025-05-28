import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;

  return (
    <section className="bg-background py-16" id="pricing">
      <div className="container mx-auto px-4 text-primary">
        <h1 className="text-5xl font-bold text-center mb-8">{title}</h1>
        <div className="h-1 mx-auto bg-primary w-24 opacity-25 rounded my-4"></div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 mt-12">
          {items.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col w-full max-w-sm mx-auto lg:mx-0 bg-white shadow-md rounded-lg overflow-hidden 
                transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer ${
                  index === 1 ? 'border-2 border-primary' : ''
                }`}
            >
              <div className="p-6 border-b text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  {plan.name}
                </h2>
              </div>

              <ul className="text-center text-sm text-gray-700 divide-y px-6">
                {plan.features.map((feature) => (
                  <li key={`${plan.name}-${feature}`} className="py-4">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-background mt-auto text-center">
                <div className="text-3xl font-bold text-gray-800">
                  {plan.price}
                  <span className="text-base font-medium text-gray-600 ml-1">
                    {plan.priceDetails}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
