import { useState } from "react";
import ReservationList from "../components/reservationList";
import ManagementList from "../components/managementList";
import MainScheduleArea from "../components/mainScheduleArea";
import ManagementDetailList from "../components/managementDetailList";
import MainArea from "../components/mainArea";
import MainMenuArea from "../components/mainMenuArea";
import DetailArea from "../components/detailArea";

function ManagementSchedule() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [sumModalOpen, setSumModalOpen] = useState(false);
  const [imgModalOpen, setImgModalOpen] = useState(false);

  return (
    <>
        <div className=" w-1/4  overflow-y-auto h-full border-r border-r-slate-200">
          <ManagementDetailList />
        </div>
        <div className="main w-2/3 overflow-y-auto h-full border-r border-r-slate-200">
          <MainScheduleArea />
        </div>
    </>
  );
}

export default ManagementSchedule;
