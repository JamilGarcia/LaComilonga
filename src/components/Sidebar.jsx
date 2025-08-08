'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Sidebar({ open, setOpen }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-transform ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel
            className="fixed inset-y-0 right-0 w-64 p-6 flex flex-col"
            style={{ backgroundColor: '#9C1D1D' }} 
          >
            <button
              onClick={() => setOpen(false)}
              className="self-end p-2 hover:bg-gray-700 rounded"
            >
              <HiX size={24} />
            </button>
            <nav className="mt-8 space-y-4 flex-1">
              <a href="/hero" className="block px-3 py-2 rounded hover:bg-gray-700">
                Inicio
              </a>
              <a href="/menu" className="block px-3 py-2 rounded hover:bg-gray-700">
                Menú
              </a>
              <a href="/gallery" className="block px-3 py-2 rounded hover:bg-gray-700">
                Galería
              </a>
              <a href="/testimonials" className="block px-3 py-2 rounded hover:bg-gray-700">
                Testimonios
              </a>
              <a href="/contact" className="block px-3 py-2 rounded hover:bg-gray-700">
                Contacto
              </a>
            </nav>

            <div className="mt-auto text-sm text-gray-400">
              © 2025 LaComilonga
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

