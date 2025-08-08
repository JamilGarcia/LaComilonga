export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-800 mb-8 text-center">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {require('../data/testimonials.json').map(item => (
            <div
              key={item.id}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
             <p className="text-gray-800 italic mb-4">“{item.quote}”</p>
              <p className="text-red-800 font-semibold text-right">— {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}