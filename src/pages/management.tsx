import { useState } from "react";
import ManagementList from "../components/managementList";
import {
  Outlet,
} from "react-router-dom";
import ManagementSchedule from './managementSchedule.tsx';
import ManagementNew from "./managementNew.tsx";

function Management() {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [sumModalOpen, setSumModalOpen] = useState(false);
  const [imgModalOpen, setImgModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-grow bg-white relative">
        <div className="list w-1/6  overflow-y-auto h-full border-r border-r-slate-200">
          <ManagementList />
        </div>
        <Outlet />
      </div>

    </>
  );
}

export default Management;
