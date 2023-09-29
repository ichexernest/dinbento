import { useMemo, useRef, useState } from "react";
import Input from "../base.input";

function DetailArea({ toggleModal }: { toggleModal: React.MouseEventHandler }) {

  let orderDetail ={
    orderer:"陳奕哲",
    orderNote:"飯少",
    orderList:[
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
      {"name":"排骨便當","price":120,"description":""},
    ]
  }
  let ordererRef = useRef<HTMLInputElement>(null);
  let noteRef = useRef<HTMLInputElement>(null);

  let totalPrice = ()=>{
    let price = 0;
    orderDetail.orderList.forEach(element => {
      price += element.price;
    });
    return price;
  }


  return (
    <div className="flex flex-col">
      <div className="my-2 py-6 flex justify-between items-center">
        <span className="px-2 text-black font-bold text-xl">訂購明細</span>
      </div>
      {orderDetail.orderList.length ?
        <ul className=" h-96 overflow-auto">
          {orderDetail.orderList.map((e,i) => (
            <li  className={`mx-2 px-2 text-black rounded-md h-12 flex justify-between items-center ${
                i % 2 === 0 ? 'bg-white' : 'bg-slate-300'
            }`}>
              <span className="">{`${i+1} ${e.name} $${e.price}`}</span>
              <button className=" rounded-full w-6 h-6 bg-black text-white text-sm flex justify-center items-center">
                x
              </button>
            </li>))}
        </ul>
        :        
        <p>
          <i className="text-black flex justify-center mt-10">No contacts</i>
        </p>
      }


      <button data-type={'a'} className="rounded-lg mx-2 my-3 p-2 border border-black text-black text-sm hover:bg-slate-100 transition duration-100" onClick={toggleModal}>
        找不到餐點？自訂
      </button>
      <hr />
     <Input label="訂購人" name="orderer" ref={ordererRef} value={orderDetail.orderer}></Input>
      <Input label="備註" name="note" ref={noteRef} value={orderDetail.orderNote}></Input>
      <div className="mx-2 mt-10 flex justify-between items-center ">
        <span className=" text-black font-bold text-xl">總計 ${totalPrice()}</span>
      </div>
      <button className="rounded-lg m-2 p-2 bg-black text-white text-base font-bold hover:bg-slate-800 transition duration-100">
        訂購
      </button>
    </div>
  );
}



export default DetailArea;
