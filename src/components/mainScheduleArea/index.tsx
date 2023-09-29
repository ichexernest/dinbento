import { useState } from "react";
import Button from "../base.button";

function MainScheduleArea() {
  const toggleModal: React.MouseEventHandler<Element> = (event) => {
    alert("ddd");
  };

  return (
    <div className="">
      <div className="px-2 py-1 flex justify-end items-center border-b border-b-slate-200">
        <Button clickEvent={toggleModal}>刪除</Button>
        <Button clickEvent={toggleModal}>確認</Button>
      </div>

      <div className="border-b border-b-slate-200 ">
        <div className="pt-7 pb-2 px-2">
          <span className="text-black  text-lg font-bold">基本排程資訊</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
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
          <label className="block mx-2 mt-3">
            <span className="block text-sm font-medium text-slate-700">
              訂購人
            </span>
            <input className="border p-1 w-full border-slate-200 rounded-md bg-white placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
          </label>
        </div>
        <div className="p-5 flex justify-end">
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="inline-block pl-[0.15rem] hover:cursor-pointer text-black">
          啟動
        </label>
        </div>
      </div>
      <div>
        <div className="pt-7 pb-2 px-2">
          <span className="text-black  text-lg font-bold">已訂</span>
        </div>
        <ul className=" h-96 overflow-auto">
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">AAA: 古早味排骨飯餐盒 $100</span>
            <div className="flex gap-2">
              <label htmlFor="">
                <input type="checkbox" name="已繳錢" id="" />
                已繳錢
              </label>
              <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
                x
              </button>
            </div>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">AAA: 古早味排骨飯餐盒 $100</span>
            <div className="flex gap-2">
              <label htmlFor="">
                <input type="checkbox" name="已繳錢" id="" />
                已繳錢
              </label>
              <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
                x
              </button>
            </div>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">AAA: 古早味排骨飯餐盒 $100</span>
            <div className="flex gap-2">
              <label htmlFor="">
                <input type="checkbox" name="已繳錢" id="" />
                已繳錢
              </label>
              <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
                x
              </button>
            </div>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">AAA: 古早味排骨飯餐盒 $100</span>
            <div className="flex gap-2">
              <label htmlFor="">
                <input type="checkbox" name="已繳錢" id="" />
                已繳錢
              </label>
              <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
                x
              </button>
            </div>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">AAA: 古早味排骨飯餐盒 $100</span>
            <div className="flex gap-2">
              <label htmlFor="">
                <input type="checkbox" name="已繳錢" id="" />
                已繳錢
              </label>
              <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
                x
              </button>
            </div>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">AAA: 古早味排骨飯餐盒 $100</span>
            <div className="flex gap-2">
              <label htmlFor="">
                <input type="checkbox" name="已繳錢" id="" />
                已繳錢
              </label>
              <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
                x
              </button>
            </div>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">AAA: 古早味排骨飯餐盒 $100</span>
            <div className="flex gap-2">
              <label htmlFor="">
                <input type="checkbox" name="已繳錢" id="" />
                已繳錢
              </label>
              <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
                x
              </button>
            </div>
          </li>
          <li className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">AAA: 古早味排骨飯餐盒 $100</span>
            <div className="flex gap-2">
              <label htmlFor="">
                <input type="checkbox" name="已繳錢" id="" />
                已繳錢
              </label>
              <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
                x
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainScheduleArea;
