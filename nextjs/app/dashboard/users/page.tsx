'use client'

import React from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import MainContent from '@/app/dashboard/_components/MainContent'
import Table from '@/app/_components/table/Table'

const Users: React.FC = () => {

  const handleEdit = () => {
    console.log('Edit')
  }

  const handleDelete = () => {
    console.log('Delete')
  }

  return (
    <MainContent title="Users" className="relative">
      <div className="flex justify-end items-center gap-4 absolute top-0 right-0">
        <button className="btn btn-primary">Add User</button>
        <input
          type="text"
          placeholder="Search user"
          className="input input-primary"
        />
      </div>
      <div className="h-[calc(100vh-6rem)] overflow-y-auto relative">
        <Table
          columns={[
            { key: 'No', title: 'No.' },
            { key: 'name', title: 'Name' },
            { key: 'email', title: 'Email' },
            { key: 'availablePoints', title: 'Available Points' },
            { key: 'transferablePoints', title: 'Transferable Points' },
            { key: 'actions', title: '' },
          ]}
          data={undefined}
          classNameTable="w-full"
        />
      </div>
    </MainContent>
  )
}

export default Users

// // Data for the table is generated using Array.from({ length: 50 }, (_, index) => ({}))
// data={Array.from({ length: 50 }, (_, index) => ({
//   keyId: index,
//   columns: {
//     No: {
//       components: index + 1,
//       styles: 'text-center w-24',
//     },
//     name: {
//       components: `User ${index + 1}`,
//     },
//     email: {
//       components: `user${index + 1}@example.com`,
//       styles: 'w-44',
//     },
//     availablePoints: {
//       components: (index + 1) * 100,
//       styles: 'text-center w-44',
//     },
//     transferablePoints: {
//       components: (index + 1) * 50,
//       styles: 'text-center w-48',
//     },
//     actions: {
//       components: (
//         <div className="flex justify-center gap-2">
//           <FiEdit className="text-gift_drak_light cursor-pointer hover:text-gift_red_light w-6"
//             onClick={handleEdit}
//           />
//           <FiTrash2 className="text-gift_drak_light cursor-pointer hover:text-gift_red_light w-6" 
//             onClick={handleDelete}
//           />
//         </div>
//       ),
//       styles: 'text-center w-24',
//     },
//   },
// }))}