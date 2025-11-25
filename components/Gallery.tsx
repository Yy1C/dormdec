import React from 'react';
import { Blueprint } from '../types';

interface GalleryProps {
  onNavigate: (page: string) => void;
}

const mockBlueprints: Blueprint[] = [
  {
    id: 1,
    title: "Minimalist Study",
    description: "Focus-oriented layout with white tones and ample lighting.",
    imageUrl: "https://picsum.photos/400/300?random=1",
    tags: ["Study", "Minimal"]
  },
  {
    id: 2,
    title: "Cozy Corner",
    description: "Warm lighting strings and soft textiles for maximum comfort.",
    imageUrl: "https://picsum.photos/400/300?random=2",
    tags: ["Cozy", "Warm"]
  },
  {
    id: 3,
    title: "Gamer's Haven",
    description: "RGB lighting setup with optimized desk space for peripherals.",
    imageUrl: "https://picsum.photos/400/300?random=3",
    tags: ["Gaming", "Tech"]
  },
  {
    id: 4,
    title: "Plant Lover",
    description: "Utilizing vertical space for greenery in small areas.",
    imageUrl: "https://picsum.photos/400/300?random=4",
    tags: ["Green", "Nature"]
  },
  {
    id: 5,
    title: "Vintage Scholar",
    description: "Dark wood tones and retro accessories.",
    imageUrl: "https://picsum.photos/400/300?random=5",
    tags: ["Vintage", "Classy"]
  },
  {
    id: 6,
    title: "Space Saver",
    description: "Maximum storage efficiency for 4-person dorms.",
    imageUrl: "https://picsum.photos/400/300?random=6",
    tags: ["Efficient", "Storage"]
  }
];

export const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  return (
    <div class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Previous Blueprints</h2>
          <p class="mt-4 text-lg text-gray-500">Explore designs we've created for students like you.</p>
        </div>
        <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockBlueprints.map((blueprint) => (
            <div key={blueprint.id} class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src={blueprint.imageUrl} alt={blueprint.title} />
              </div>
              <div class="flex-1 p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-brand-600">
                    {blueprint.tags.join(' • ')}
                  </p>
                  <div class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">{blueprint.title}</p>
                    <p class="mt-3 text-base text-gray-500">{blueprint.description}</p>
                  </div>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                     <button 
                        onClick={() => onNavigate('booking')}
                        class="text-sm font-medium text-brand-600 hover:text-brand-500"
                     >
                       I want this style &rarr;
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};