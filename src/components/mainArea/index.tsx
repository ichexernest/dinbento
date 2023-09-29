import  { useState } from "react";

function MainArea({ toggleModal }: { toggleModal: React.MouseEventHandler }) {

  let mainInfo = {
    title: "09/01",
    time: "2023/09/01 10:30:00",
    menuName:"玉女餐盒",
    address:"行善路25巷1弄7號",
    phone:"02-87901099",
    note:"今天折五塊",
    image:"https://www.bossfanyen.com.tw/archive/image/article4/7ddd6ce05d6b48b3.jpg",
    items:[
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
    ]
  }

  let sum = {
    total: 975,
    orederer:15,
  }

  const countTime = ()=>{

  }

  return (
    <div className="">
      <div className="px-2 py-1 flex justify-between items-center border-b border-b-slate-200">
        <h2 className="text-black font-bold text-3xl">{mainInfo.title}</h2>
        <div className="flex items-center bg-white rounded-md my-2 py-3">
          <div className="w-3 h-3 mx-5 bg-green-400 rounded-2xl"></div>
          <div className="flex flex-col">
            <span className="text-black text-base font-bold">開放訂餐中</span>
            <span className="text-black text-xs">
              {mainInfo.time} 結單，剩下40分鐘35秒
            </span>
          </div>
        </div>
      </div>
      <div className="border-b border-b-slate-200 flex">
        <div className=" px-2 flex flex-grow flex-col">
          <span className="text-black text-2xl font-bold  py-6">{mainInfo.menuName}</span>
          <span className="text-black text-base ">地址: {mainInfo.address}</span>
          <span className="text-black text-base ">電話: {mainInfo.phone}</span>
          <span className="text-black text-base mb-3">備註: {mainInfo.note}</span>
          <hr />
          <div className="flex justify-between items-center my-3">
            <div className="flex flex-col">
              <span className="text-black text-base ">總金額: {sum.total}</span>
              <span className="text-black text-base ">已訂餐: {sum.orederer}人</span>
            </div>
            <button data-type={'s'} className="rounded-lg mx-2  p-2 border border-black text-black text-sm hover:bg-slate-100 transition duration-100" onClick={toggleModal}>
              查看明細
            </button>
          </div>
        </div>
        <div data-type={'i'} className="w-60 h-60 bg-black flex justify-center items-center relative " onClick={toggleModal}>
          <div className="w-full h-full bg-slate-800 opacity-0 z-50 absolute hover:opacity-60 transition duration-300 flex justify-center items-center text-white cursor-pointer"><span className="pointer-events-none text-xl">放大查看</span></div>
          <img src={mainInfo.image} />
        </div>
      </div>
      <div >
      <div className="pt-7 pb-2 px-2">
        <span className="text-black  text-lg font-bold">菜單</span>
      </div>
      {mainInfo.items.length ?
        <ul className=" h-96 overflow-auto">
          {mainInfo.items.map((e,i) => (
          <li key={i} className="px-2 text-black border-b border-b-slate-200 h-12 flex justify-between items-center group relative  hover:bg-slate-300">
            <span className="">{e.name} ${e.price}</span>
            <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-100 absolute right-2 p-2 bg-black text-white text-sm rounded-lg hover:bg-slate-800">
              + 加入
            </button>
          </li>))}
        </ul>
        :
        <p>
          <i className="text-black flex justify-center mt-10">No contacts</i>
        </p>}
      </div>
    </div>
  );
}

export default MainArea;
