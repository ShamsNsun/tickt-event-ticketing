// src/components/Header.js
import { FaMeetup } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-primary text-white shadow p-6 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaMeetup className="text-4xl mr-2" />
          <div>
            <h1 className="text-3xl font-bold">Meetly Dashboard</h1>
            <h2 className="text-lg">Kickstart work on Meetly</h2>
          </div>
        </div>
      </div>
    </header>
  );
}