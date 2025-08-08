'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { HiMenu } from 'react-icons/hi';
import './globals.css';

export default function ClientLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-full">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-white shadow p-4">
          <h1 className="text-xl font-bold text-red-800">La Comilonga</h1>
          <button
            onClick={() => setOpen(true)}
            className="p-2 hover:bg-gray-200 rounded"
          >
            <HiMenu size={24} className="text-gray-800" />
          </button>
        </header>

        <main className="flex-1 overflow-auto p-4">{children}</main>

        <footer className="hidden lg:block bg-white border-t p-4 text-center text-sm text-gray-500">
          © 2025 La Comilonga
        </footer>
      </div>
    </div>
  );
}
