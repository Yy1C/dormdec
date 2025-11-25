import React from 'react';
import { ServiceType } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceType) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <div class="py-12 bg-white" id="services">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-brand-600 font-semibold tracking-wide uppercase">Our Offerings</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple Pricing, Stunning Results
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the level of help you need to upgrade your dormitory.
          </p>
        </div>

        <div class="mt-10">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
            
            {/* Service 1 */}
            <div class="relative p-8 bg-brand-50 rounded-2xl border border-brand-100 hover:shadow-lg transition-shadow">
              <div class="absolute top-0 right-0 -mt-4 mr-4 bg-brand-600 rounded-full px-4 py-1 text-white font-bold text-sm shadow">
                10 CNY
              </div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7m0 0L9 4" />
                </svg>
              </div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Online Blueprint Design</h3>
              <p class="mt-2 text-base text-gray-500">
                Send us your room dimensions and preferences. We provide a customized digital layout plan, product list, and style guide.
              </p>
              <button 
                onClick={() => onSelectService(ServiceType.ONLINE_DESIGN)}
                class="mt-6 w-full bg-white text-brand-600 border border-brand-600 hover:bg-brand-50 px-4 py-2 rounded-md font-medium"
              >
                Get Blueprint
              </button>
            </div>

            {/* Service 2 */}
            <div class="relative p-8 bg-white rounded-2xl border-2 border-brand-500 shadow-sm hover:shadow-lg transition-shadow">
              <div class="absolute top-0 right-0 -mt-4 mr-4 bg-gray-900 rounded-full px-4 py-1 text-white font-bold text-sm shadow">
                60 CNY
              </div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-brand-600 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Door-to-Door Decoration</h3>
              <p class="mt-2 text-base text-gray-500">
                Sit back and relax. Our team comes to your dorm to organize, install decor, and arrange furniture according to the plan.
              </p>
              <button 
                onClick={() => onSelectService(ServiceType.ONSITE_DECO)}
                class="mt-6 w-full bg-brand-600 text-white hover:bg-brand-700 px-4 py-2 rounded-md font-medium"
              >
                Book Full Service
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};