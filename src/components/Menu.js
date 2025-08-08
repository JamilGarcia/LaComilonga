"use client";
import { useState } from 'react';
import Image from 'next/image';
import menuData from '../data/menu.json';
import Link from 'next/link'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = Array.from(new Set(menuData.map(item => item.category)));

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 mb-8">Nuestro Menú</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
           className={`px-4 py-2 rounded-full ${
              activeCategory === null
                ? 'bg-red-800 text-white'
               : 'bg-orange-200 text-red-800'
            }`}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full ${activeCategory === cat ? 'bg-red-800 text-white' : 'bg-orange-200 text-red-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData
            .filter(item => (activeCategory ? item.category === activeCategory : true))
            .map(item => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="mt-2 text-gray-800">{item.description}</p>
                <p className="mt-2 font-bold text-red-800">{item.price}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}