import { FC, memo } from 'react';

import { Shop } from '../types/Shop';
import { parseAddress } from '../utils/parseAddress';

type Props = { shop: Shop };

export const ShopListItem: FC<Props> = memo(({ shop }) => {
  const { street, city } = parseAddress(shop.address);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`;

  return (
    <li className="flex gap-4 p-4 border-b items-center w-full h-full hover:bg-gray-100 transition-colors duration-200">
      <img
        src={shop.imageUrl}
        alt={`Shop ${shop.id}`}
        loading="lazy"
        className="w-20 h-20 object-cover rounded shadow-md shrink-0"
      />
      <div className="flex flex-col text-sm">
        <span className="text-gray-600">ID: {shop.id}</span>
        <span className="font-semibold">{street}</span>
        <span className="text-gray-500">{city}</span>
        <div className="flex gap-2 mt-1">
          <span className="text-xs text-white bg-blue-500 rounded px-2 py-0.5 w-fit">
            {shop.type}
          </span>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white bg-green-600 rounded px-2 py-0.5 flex items-center hover:bg-green-700 transition-colors"
            aria-label="Zobacz na mapie"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Mapa
          </a>
        </div>
      </div>
    </li>
  );
});
