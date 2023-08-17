import Link from "next/link";
import { AppContextProvider } from "./context/theme";
import "./globals.css";
export const metadata = {
  title: "Learn next.js",
  description: "Discovery of next.js step by step",
};

export default function RootLayout({ children }) {
  const links = [
    { path: "/", name: "Home" },
    { path: "/cv", name: "Cv" },
    { path: "/contact", name: "Contact" },
    { path: "/jeu", name: "Jeu" },
    { path: "/users", name: "Users" },
    { path: "/music", name: "Music" },
  ];
  return (
    <html lang="en" className="light">
      <AppContextProvider>
        <body>
          <nav className="bg-white border-b border-gray-200 shadow-lg shadow-gray-100 ">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize ">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-gray-800  border-b-2 border-transparent active:border-blue-500 mx-1.5 sm:mx-6"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
          <main className="container px-3 mt-5 lg:px-0">{children}</main>
        </body>
      </AppContextProvider>
    </html>
  );
}
