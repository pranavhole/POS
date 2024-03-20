import React from 'react';
import { Table } from '../types';


const Tables = ({ tables, onTableSelect }) => {
  return (
    <div className='h-[90vh] bg-slate-300 w-[75vw] rounded-md text-white mt-2 mr-2'>
      <div className='h-[5vh] bg-slate-200 flex justify-center items-center font-bold text-cyan-700 text-xl'>
        Table
      </div>
      <ul className='grid gap-5 grid-cols-5 w-[100%] h-[10vh] p-4'>
        {tables.map((table) => (
          <li className='bg-orange-300 flex justify-center items-center h-[180px]  font-bold' key={table.id} onClick={() => onTableSelect(table)}>
            {table.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tables;