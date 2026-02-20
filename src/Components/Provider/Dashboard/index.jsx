import { useState } from "react";
import { FaPlus } from "react-icons/fa"; 
import { AddNewService } from "./AddNewService";

export function Dashboard() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 flex flex-col items-center">
     
      {!open && (
        <div className="w-full max-w-3xl flex justify-end">
          <button 
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 border border-blue-700 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md"
          >
            <FaPlus /> Add Service
          </button>
        </div>
      )}

    
      {open && <AddNewService setOpen={setOpen} />}
    </div>
  );
}