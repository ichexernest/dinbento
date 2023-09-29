import { useState } from "react";

function ManagementMenuList() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-2">
      <div className="py-7 flex justify-start items-center">
        <h2 className="text-black font-bold text-2xl">菜單管理</h2>
        <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
          +
        </button>
      </div>
      <div className="h-[calc(100vh-7rem)] overflow-auto">
        <ul>
        <li>
            <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
                <span className="text-black text-base font-bold">菜單1</span>
            </div>
          </li>
          <li>
            <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
                <span className="text-black text-base font-bold">菜單2</span>
            </div>
          </li>
          <li>
            <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
                <span className="text-black text-base font-bold">菜單3</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ManagementMenuList;
