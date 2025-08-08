import ClientLayout from './ClientLayout';

export const metadata = {
  title: 'La Comilonga',
  description: 'El sabor que abraza cada plato',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
