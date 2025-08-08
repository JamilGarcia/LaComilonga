import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="La Comilonga"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          La Comilonga
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl drop-shadow">
          El sabor que abraza cada plato
        </p>
        <Link
          href="/menu"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-lg font-medium text-white 
                     hover:bg-secondary transition-colors"
        >
          Ver nuestro menú
        </Link>
        <Link
          href="/gallery"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-lg font-medium text-white 
                     hover:bg-secondary transition-colors"
        >
          Galerias
        </Link>
        <Link
          href="/testimonials"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-lg font-medium text-white 
                     hover:bg-secondary transition-colors"
        >
          Testimonios
        </Link>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-lg font-medium text-white 
                     hover:bg-secondary transition-colors"
        >
          Contáctanos / Pide con nosotros
        </Link>
      </div>
    </section>
  )
}
