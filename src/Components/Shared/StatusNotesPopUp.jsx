import { useState } from "react";

const StatusNoteModal = ({ isOpen, onClose, onSubmit, statusLabel }) => {
  const [note, setNote] = useState("");

  if (!isOpen) return null; 

  const handleSubmit = () => {
    onSubmit(note);
    setNote(""); 
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg w-[400px] max-w-full shadow-lg">
        <h2 className="text-lg font-bold mb-4">Add Note for "{statusLabel}"</h2>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note here..."
          className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
          rows={4}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusNoteModal;