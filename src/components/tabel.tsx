// components/Tables.tsx
import React from 'react';
import { Table } from '../types';

type Props = {
  tables: Table[];
  onTableSelect: (table: Table) => void;
};

const Tables: React.FC<Props> = ({ tables, onTableSelect }) => {
  return (
    <div className='h-[90vh] bg-slate-300 w-[75vw] rounded-md text-white mt-2 mr-2'>
      <div className='h-[5vh] bg-slate-200 flex justify-center items-center font-bold text-cyan-700 text-xl'>
        tabel
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


// mport React from 'react'

// function SelectionDex() {
//   return (
//     <div className='h-[90vh] bg-slate-300 w-[75vw] rounded-md text-white mt-2 mr-2'>
// <div className='h-[5vh] bg-slate-200 flex justify-center items-center font-bold text-cyan-700 text-xl'>
//     tabel
// </div>
//       <div className='grid gap-5 grid-cols-5 w-[100%] h-[10vh] p-4'>
//         <div className=' bg-orange-300 flex justify-center items-center h-[180px]  font-bold'>
//             1
//         </div>
//         <div className='bg-orange-300 flex justify-center items-center h-[180px]  font-bold'>
// 2
//         </div>
//         <div className='bg-orange-300 flex justify-center items-center h-[180px]  font-bold'>
// 3
//         </div>
//         <div className='bg-orange-300 flex justify-center items-center  h-[180px] font-bold'>
// 4
//         </div>
//         <div className='bg-orange-300 flex justify-center items-center h-[180px]  font-bold'>
// 5
//         </div>
//         <div className=' bg-orange-300 flex justify-center items-center h-[180px]  font-bold'>
//             6
//         </div>
//         <div className='bg-orange-300 flex justify-center items-center h-[180px]  font-bold'>
// 7
//         </div>
//         <div className='bg-orange-300 flex justify-center items-center h-[180px]  font-bold'>
// 8
//         </div>
//         <div className='bg-orange-300 flex justify-center items-center h-[180px]  font-bold'>
// 9
//         </div>
//         <div className='bg-orange-300 flex justify-center items-center h-[180px]  font-bold'>
// 10
//         </div>
//       </div>
//     </div>
//   )
// }

