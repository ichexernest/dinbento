import { Children, useState } from "react";

function Button({ children, clickEvent }: {children:String, clickEvent: React.MouseEventHandler}) {

  return (
      <button className="rounded-lg m-2 p-2 bg-black text-white text-base font-bold hover:bg-slate-800 transition duration-100" onClick={clickEvent}>
            {children}
      </button>
  );
}

export default Button;
