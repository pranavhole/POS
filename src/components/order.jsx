import React from 'react';
import { OrderedItem } from '../types';


const OrderedItems= ({
  tableNumber,
  orderedItems,
  onRemoveFromOrder,
  onPrintBill,
  onSelectOrderType,
  onBilling
}) => {
  const handleOrderTypeSelect = (orderType) => {
    onSelectOrderType(orderType);
  };

  return (
    <div className='w-[25vw]'>
      <div className='w-[100%] h-10 flex border-b-2 border-zinc '>
        <button className=' text-green-500 px-5 py-2 ' onClick={() => handleOrderTypeSelect('dine-in')}>Dine-In</button>
        <button className=' text-green-500 px-5 py-2 ' onClick={() => handleOrderTypeSelect('pickup')}>Pickup</button>
        <button className=' text-green-500 px-5 py-2 ' onClick={() => handleOrderTypeSelect('quick-bill')}>Quick Bill</button>
      </div>
      <div className='w-[100%] h-10 flex border-b-2 border-zinc '>
        <button className=' text-green-500 px-5 py-2 '>Order/KOT</button>
        <button className=' text-green-500 px-5 py-2 '>Billing</button>
      </div>

      <h2 className='w-[100%] bg-green-900 h-11 text-white flex items-center pl-3'> Table {tableNumber}</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-sm">
          <th className="border border-gray-200 px-4 py-2"></th>
            <th className="border border-gray-200 px-4 py-2">Item Name</th>
            <th className="border border-gray-200 px-4 py-2">Quantity</th>
            <th className="border border-gray-200 px-4 py-2">Amount</th>
             {/* Added a column for action */}
          </tr>
        </thead>
        <tbody>
          {orderedItems.map((orderedItem, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-200 px-4 py-2">
                <button className="bg-red-500 hover:bg-red-700 text-white border-r-[50%] font-bold py-2 px-4 rounded" onClick={() => onRemoveFromOrder(index)}>X</button>
              </td>
              <td className="border border-gray-200 px-4 py-2">{orderedItem.menuItem.name}</td>
              <td className="border border-gray-200 px-4 py-2"><span onClick={()=> onRemoveFromOrder(index)}>-</span>{orderedItem.quantity}<span onClick={()=> onRemoveFromOrder(index)}>+</span></td>
              <td className="border border-gray-200 px-4 py-2">${orderedItem.menuItem.price * orderedItem.quantity}</td>
              
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={onPrintBill}>Print Bill</button>
      <div>
      </div>
    </div>
  );
};

export default OrderedItems;
