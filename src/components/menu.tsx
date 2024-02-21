// components/MenuItems.tsx
import React from 'react';
import { MenuItem } from '../types';

type Props = {
  menuItems: MenuItem[];
  onMenuItemSelect: (menuItem: MenuItem) => void;
  onOrder: () => void;
};

const MenuItems: React.FC<Props> = ({ menuItems, onMenuItemSelect , onOrder}) => {
  return (
    <div className='h-[90vh] bg-slate-300 w-[75vw] rounded-md text-white mt-2 mr-2'>
      <div className='h-[5vh] bg-slate-200 flex justify-center items-center font-bold text-cyan-700 text-xl'>
        Menu Item
      </div>
      <ul className='grid gap-5 grid-cols-5 w-[100%] h-[10vh] p-4 cursor-pointer'>
        {menuItems.map((menuItem) => (
          <li className='bg-orange-300 flex justify-center items-center h-[180px]  hover:bg-orange-500 font-bold' key={menuItem.id} onClick={() => {onMenuItemSelect(menuItem); onOrder()}} >
            {menuItem.name} - ${menuItem.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
