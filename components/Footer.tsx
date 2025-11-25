import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex justify-center space-x-6 md:order-2">
            <span class="text-gray-400 hover:text-gray-300">WeChat: QiwujiSupport</span>
            <span class="text-gray-400 hover:text-gray-300">Email: contact@qiwuji.com</span>
          </div>
          <div class="mt-8 md:mt-0 md:order-1">
            <p class="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} 栖物集 Qiwuji Dorm Decor Service. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};