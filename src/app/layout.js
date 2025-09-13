import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Rojgar Updates - ASRS",
  description: "Daily Sarkari Naukri Updates in Hindi and English",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="font-sans bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
