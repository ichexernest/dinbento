import { useState } from "react";

function ReservationList() {
  const [count, setCount] = useState(0);
  

  return (
    <div className="mx-2">
      <div className="py-7 flex justify-center items-center">
        <h2 className="text-black font-bold text-2xl">DBT</h2>
      </div>
      <div className="h-[calc(100vh-7rem)] overflow-auto">
      <span className="text-black text-xs">進行中訂單</span>
      <ul>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-green-400 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-green-400 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-green-400 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
      </ul>
      <span className="text-black text-xs">過往訂單</span>
      <ul>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-slate-600 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-slate-600 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-slate-600 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-slate-600 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-slate-600 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 py-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mx-5 bg-slate-600 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-slate-600 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center bg-white rounded-md my-2 p-3 hover:bg-slate-300 transition duration-100">
            <div className="w-3 h-3 mr-5 bg-slate-600 rounded-2xl"></div>
            <div className="flex flex-col">
              <span className="text-black text-base font-bold">09/01</span>
              <span className="text-black text-xs">10:30 結單</span>
            </div>
          </div>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default ReservationList;
