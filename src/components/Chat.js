// src/components/Chat.js
import { FaPaperPlane } from 'react-icons/fa';

export default function Chat() {
  return (
    <div className="bg-white shadow rounded-xl p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Chat</h3>
      <div className="space-y-4 text-gray-600">
        <div>Sunny created this event</div>
        <div>Sunny added a description to this event</div>
      </div>
      <textarea className="w-full h-20 p-4 border border-gray-300 rounded-lg mt-4" placeholder="Send a message..."></textarea>
      <button className="bg-primary text-white px-4 py-2 rounded-lg shadow mt-4 flex items-center">
        Send <FaPaperPlane className="ml-2" />
      </button>
    </div>
  );
}