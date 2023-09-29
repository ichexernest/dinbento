import { useState } from "react";
import Button from "../base.button";

function MainMenuArea() {
  
  const toggleModal: React.MouseEventHandler<Element> = (event) => {
    alert("ddd")
  };

  return (
    <div className="">
      <div className="px-2 py-1 flex justify-end items-center border-b border-b-slate-200">
        <Button clickEvent={toggleModal}>刪除</Button>
        <Button clickEvent={toggleModal}>確認</Button>
      </div>
      <div className="border-b border-b-slate-200 flex">
        <div className=" p-2 flex flex-grow flex-col">
          <label className="block mx-2 mt-3">
            <span className="block text-sm font-medium text-slate-700">
              訂購人
            </span>
            <input className="border p-1 w-full border-slate-200 rounded-md bg-white placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
          </label>
          <label className="block mx-2 mt-3">
            <span className="block text-sm font-medium text-slate-700">
              備註
            </span>
            <input className="border p-1 w-full border-slate-200 rounded-md bg-white placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
          </label>
          <label className="block mx-2 mt-3">
            <span className="block text-sm font-medium text-slate-700">
              訂購人
            </span>
            <input className="border p-1 w-full border-slate-200 rounded-md bg-white placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
          </label>
        </div>
        <div
          data-type={"i"}
          className="w-60 h-60 bg-black flex justify-center items-center relative "
          onClick={toggleModal}
        >
          <div className="w-full h-full bg-slate-800 opacity-0 z-50 absolute hover:opacity-60 transition duration-300 flex justify-center items-center text-white cursor-pointer">
            <span className="pointer-events-none text-xl">放大查看</span>
          </div>
          <img src="https://www.bossfanyen.com.tw/archive/image/article4/7ddd6ce05d6b48b3.jpg" />
        </div>
      </div>
      <div>
        <div className="pt-7 pb-2 px-2">
          <span className="text-black  text-lg font-bold">菜單</span>
        </div>
        <ul className=" h-96 overflow-auto">
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative hover:bg-slate-300">
            <span className="">古早味排骨飯餐盒 $100</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainMenuArea;
