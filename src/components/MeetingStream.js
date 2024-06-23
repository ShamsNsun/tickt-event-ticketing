// src/components/MeetingStream.js
import { FaVideo } from 'react-icons/fa';

export default function MeetingStream() {
  return (
    <div className="bg-white shadow rounded-xl p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Meeting Stream</h3>
      <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
        <FaVideo className="text-gray-500 text-4xl" />
      </div>
    </div>
  );
}