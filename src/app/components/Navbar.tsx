'use client' 

import Dropdown from "./Dropdown";
import { useState, useEffect } from 'react';
import { setPageTitle, getPageTitle } from '../../redux/features/appSlice';
import { useAppDispatch, useAppSelector } from '@/components/redux/hooks';
import { useFetchDataFromDbQuery } from "@/components/redux/services/apiSlice";

export default function Navbar() {
   const [show, setShow] = useState<boolean>(false);
   const { data } = useFetchDataFromDbQuery();
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (data) {
      const activeBoard = data[0].boards[0];
      dispatch(setPageTitle(activeBoard.name));
      }
   }, [data, dispatch]);

   const currentBoardName = useAppSelector(getPageTitle);

   return (
      <nav className="bg-white border flex h-24">
         <div className="flex-none w-[18.75rem] border-r-2 flex items-center pl-[2.12rem]">
            <p className="font-bold text-3xl"> Kanban App </p>
         </div>

         <div className="flex justify-between w-full items-center pr-[2.12rem]">
            <p className="text-black text-2xl font-bold pl-6">{currentBoardName}</p>

            <div className="flex items-center space-x-3">
               <button className="bg-blue-500 text-black px-4 py-2 flex rounded-3xl items-center space-x-2">
               <p>+ Add New Task</p>
               </button>
               <div className="relative flex items-center">
               <button onClick={() => setShow(!show)} className="text-3xl mb-4">
                  ...
               </button>
               <Dropdown show={show} />
               </div>
            </div>
         </div>
      </nav>
   );
}
