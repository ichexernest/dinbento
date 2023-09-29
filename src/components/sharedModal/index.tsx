import { Children, useState } from "react";

function SharedModal({ id,title, children, clickEvent}: {id:string,title:string,children:React.ReactNode, clickEvent: React.MouseEventHandler}) {

  return (
    <div
    id={id}
    className="absolute w-screen h-screen flex justify-center items-center bg-black bg-opacity-60 transition duration-100 z-50"
  >
    <div className="w-1/3 h-2/3 bg-white rounded-xl shadow-lg p-3">
      <div className="flex justify-between items-center">
        <span className="px-2 text-black font-bold text-xl">
          {title}
        </span>
        <button
          className="bg-black text-white w-8 h-8 rounded-full"
          data-type="x"
          onClick={clickEvent}
        >
          x
        </button>
      </div>
    {children}
    </div>
  </div>
  );
}

export default SharedModal;
