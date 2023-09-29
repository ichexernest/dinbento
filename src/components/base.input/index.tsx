import { useEffect, useState } from "react";

function Input ({label, name, ref, value}:{label:string,name:string, ref:any, value:string}){

    const [state, setState] = useState<{ [key: string]: string }>({ [name]: value });
    
    
    const update = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === name) {
            setState({ ...state, [name]: event.target.value });
        } 
    };

    return (
    <label className="block mx-2 mt-3">
        <span className="block text-sm font-medium text-slate-700">{label}</span>
        <input ref={ref} name={name}  value={state[`${name}`]} onChange={update} className="border p-1 w-full border-slate-200 rounded-md bg-white text-black placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
    </label>
    )
  }
  
export default Input;
