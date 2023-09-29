import { useState , useRef} from "react";
import ReservationList from "../components/reservationList";
import {
  Outlet,
  Link,
  useLoaderData,
} from "react-router-dom";
import SharedModal from "../components/sharedModal";
import MainArea from "../components/mainArea";
import DetailArea from "../components/detailArea";
import Input from "../components/base.input";

function Reservation() {
  //const { contacts } = useLoaderData();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [sumModalOpen, setSumModalOpen] = useState(false);
  const [imgModalOpen, setImgModalOpen] = useState(false);
  let mealRef = useRef<HTMLInputElement>(null);
  let priceRef = useRef<HTMLInputElement>(null);


  const toggleModal: React.MouseEventHandler<Element> = (event) => {
    const type = event.currentTarget.getAttribute("data-type");
    if (type === "x") {
      setAddModalOpen(false);
      setSumModalOpen(false);
      setImgModalOpen(false);
    }
    if (type === "a") setAddModalOpen(!addModalOpen);
    else if (type === "s") setSumModalOpen(!sumModalOpen);
    else if (type === "i") setImgModalOpen(!imgModalOpen);
  };


  return (
    <>
      <div className="flex flex-grow bg-white relative">
        <div className="list w-1/6  overflow-y-auto h-full border-r border-r-slate-200">
          <ReservationList />
        </div>
        <div className="main w-2/3 overflow-y-auto h-full border-r border-r-slate-200">
          <MainArea toggleModal={toggleModal} />
        </div>
        <div className=" w-1/4  overflow-y-auto h-full">
          <DetailArea toggleModal={toggleModal} />
        </div>      
      </div>
      {sumModalOpen && (
            <SharedModal id={"ss"} title={"訂購明細"} clickEvent={toggleModal}>
            <ul className="h-96 overflow-auto my-5">
              <li className="mx-2 px-2 text-black bg-slate-300 rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
              <li className="mx-2 px-2 text-black bg-white rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
              <li className="mx-2 px-2 text-black bg-slate-300 rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
              <li className="mx-2 px-2 text-black bg-white rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
              <li className="mx-2 px-2 text-black bg-slate-300 rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
              <li className="mx-2 px-2 text-black bg-white rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
              <li className="mx-2 px-2 text-black bg-slate-300 rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
              <li className="mx-2 px-2 text-black bg-white rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
              <li className="mx-2 px-2 text-black bg-slate-300 rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
              <li className="mx-2 px-2 text-black bg-white rounded-md h-12 flex justify-between items-center">
                <span className="">陳逸哲 古早味排骨飯餐盒 $100</span>
                <span className="">已繳費</span>
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-black text-lg font-bold">
                  總金額: 975元
                </span>
                <span className="text-black text-lg font-bold">
                  已訂餐: 15人
                </span>
              </div>
              <button className="rounded-lg m-2 p-2 bg-black text-white text-base font-bold hover:bg-slate-800 transition duration-100">
                確認
              </button>
            </div>
            </SharedModal>
      )}
      {addModalOpen && (
            <SharedModal id={"aa"} title={"自行輸入餐點"} clickEvent={toggleModal}>
              <Input label="餐點名稱" name="meal" ref={mealRef} value={""}></Input>
              <Input label="價格" name="price" ref={priceRef} value={""}></Input>
            <button className="rounded-lg m-2 p-2 bg-black text-white text-base font-bold hover:bg-slate-800 transition duration-100">
              確認
            </button>
            </SharedModal>
      )}
      {imgModalOpen && (
        <div
        onClick={toggleModal}
          id="ii"
          data-type={'x'}
          className="absolute w-screen h-screen flex justify-center items-center bg-black bg-opacity-60 transition duration-100 z-50"
        >
          <img
            src="https://www.bossfanyen.com.tw/archive/image/article4/7ddd6ce05d6b48b3.jpg"
            className="w-2/3"
          />
        </div>
      )}
    </>
  );
}

export default Reservation;
