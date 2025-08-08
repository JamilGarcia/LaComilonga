import Image from 'next/image';
import galleryData from '../data/gallery.json';

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Nuestros Momentos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {galleryData.map(item => (
             <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}              
                height={500}              
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300" // h-64 en vez de h-48
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}