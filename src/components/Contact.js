import { HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-red-800 mb-6">Encuéntranos</h2>
          <div className="aspect-video w-full rounded overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.1692653613832!2d-87.23676708588062!3d14.057176009014245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6f97989d202525%3A0xd83c6fe1a877985a!2sLa%20Comilonga!5e0!3m2!1ses!2shn!4v1754627910345!5m2!1ses!2shn" 
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
          <p className="mt-4 text-gray-700">
            📍 Col.Los Robles al llegar al parque a mano izquierda media cuadra arriba frente a mercadito Diego<br />
            🕒 Lun–Sáb: 7:30am – 8:00pm<br />
            🕒 Dom: 7:30am – 5:00pm
          </p>
          <a
              href="tel:+50489867943"
              className="flex items-center space-x-2 text-red-800 hover:underline"
            >
              <HiPhone className="h-6 w-6" />
              <span>+504 8986 7943</span>
            </a>
            <br />
          <div className="flex space-x-4">
            <a
              href="https://wa.me/50489867943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition-colors"
            >
              <FaWhatsapp className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
            <br />
            <a
              href="https://www.facebook.com/p/La-Comilonga-100063457724115/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              <FaFacebook className="mr-2 h-5 w-5" />
              Facebook
            </a>
            <br />
            <a
              href="https://www.instagram.com/la_comilonga/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
            >
              <FaInstagram className="mr-2 h-5 w-5" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
