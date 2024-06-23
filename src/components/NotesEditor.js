// src/components/NotesEditor.js
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';

export default function NotesEditor() {
  return (
    <div className="bg-white shadow rounded-xl p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Meetly Log / Kickstart Your Meeting with Meetly</h3>
      <div className="text-gray-600 mb-4">
        <p>Date: <span className="font-semibold">23rd June 2024</span></p>
        <p>Time Left for Meeting: <span className="font-semibold">44 mins</span></p>
      </div>
      <textarea className="w-full h-48 p-4 border border-gray-300 rounded-lg mb-4" placeholder="Write your notes here..."></textarea>
      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          <FaUserCircle className="text-gray-300 text-4xl" />
          <FaUserCircle className="text-gray-300 text-4xl" />
          <FaUserCircle className="text-gray-300 text-4xl" />
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg shadow flex items-center">
          Send <FaPaperPlane className="ml-2" />
        </button>
      </div>
    </div>
  );
}