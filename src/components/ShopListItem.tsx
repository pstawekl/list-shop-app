import { FC, memo } from 'react';

import { Shop } from '../types/Shop';
import { parseAddress } from '../utils/parseAddress';

type Props = { shop: Shop };

export const ShopListItem: FC<Props> = memo(({ shop }) => {
  const { street, city } = parseAddress(shop.address);

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
        <span className="text-xs text-white bg-blue-500 rounded px-2 py-0.5 w-fit mt-1">
          {shop.type}
        </span>
      </div>
    </li>
  );
});
