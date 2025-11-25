import React, { useState, useEffect } from 'react';
import { BookingFormData, ServiceType } from '../types';

interface BookingFormProps {
  initialServiceType?: ServiceType;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialServiceType }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    contact: '',
    dormLocation: '',
    serviceType: initialServiceType || ServiceType.ONLINE_DESIGN,
    preferredDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceType) {
        setFormData(prev => ({...prev, serviceType: initialServiceType}));
    }
  }, [initialServiceType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form Submitted:', formData);
    
    // Simulate API delay
    setTimeout(() => {
        setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div class="max-w-md mx-auto my-12 p-8 bg-white rounded-lg shadow-lg text-center border-t-4 border-brand-500">
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="mt-4 text-lg leading-6 font-medium text-gray-900">Booking Received!</h3>
        <p class="mt-2 text-sm text-gray-500">
          Thank you, {formData.name}. We will contact you at {formData.contact} shortly to confirm your {formData.serviceType} appointment.
        </p>
        <button 
            onClick={() => {
                setSubmitted(false);
                setFormData({
                    name: '',
                    contact: '',
                    dormLocation: '',
                    serviceType: ServiceType.ONLINE_DESIGN,
                    preferredDate: '',
                    notes: ''
                });
            }}
            class="mt-6 text-brand-600 hover:text-brand-500 font-medium"
        >
            Book another service
        </button>
      </div>
    );
  }

  return (
    <div class="bg-white py-12 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-16">
      <div class="relative max-w-xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Book Your Transformation</h2>
          <p class="mt-4 text-lg leading-6 text-gray-500">
            Fill out the details below to get started with Qiwuji.
          </p>
        </div>
        <div class="mt-12">
          <form onSubmit={handleSubmit} class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div class="sm:col-span-2">
              <label htmlFor="name" class="block text-sm font-medium text-gray-700">Full name</label>
              <div class="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  class="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label htmlFor="contact" class="block text-sm font-medium text-gray-700">WeChat / Phone Number</label>
              <div class="mt-1">
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  class="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label htmlFor="dormLocation" class="block text-sm font-medium text-gray-700">Dorm Building & Room Number</label>
              <div class="mt-1">
                <input
                  type="text"
                  name="dormLocation"
                  id="dormLocation"
                  required
                  value={formData.dormLocation}
                  onChange={handleChange}
                  placeholder="e.g., Building A, Room 302"
                  class="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label htmlFor="serviceType" class="block text-sm font-medium text-gray-700">Service Type</label>
              <div class="mt-1">
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  class="block w-full py-3 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
                >
                  <option value={ServiceType.ONLINE_DESIGN}>{ServiceType.ONLINE_DESIGN}</option>
                  <option value={ServiceType.ONSITE_DECO}>{ServiceType.ONSITE_DECO}</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-2">
               <label htmlFor="preferredDate" class="block text-sm font-medium text-gray-700">Preferred Date (for onsite service)</label>
               <div class="mt-1">
                 <input
                    type="date"
                    name="preferredDate"
                    id="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    class="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border"
                 />
               </div>
            </div>

            <div class="sm:col-span-2">
              <label htmlFor="notes" class="block text-sm font-medium text-gray-700">Additional Notes / Style Preferences</label>
              <div class="mt-1">
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  class="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>

            <div class="sm:col-span-2">
              <button
                type="submit"
                class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};