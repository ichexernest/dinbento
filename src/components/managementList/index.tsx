import { useState } from "react";

function ManagementList() {

  return (
    <div className="mx-2">
      <div className="py-7 flex justify-center items-center">
        <h2 className="text-black font-bold text-2xl">DBT</h2>
      </div>
      <div className="h-[calc(100vh-7rem)] overflow-auto">
      <ul>
      <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
              <span className="text-black text-base font-bold">菜單管理</span>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
              <span className="text-black text-base font-bold">排程管理</span>
          </div>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default ManagementList;
