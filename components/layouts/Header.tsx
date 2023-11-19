import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className="z-50 flex flex-wrap w-full py-3 text-sm bg-white border-b border-gray-200 sm:justify-start sm:flex-nowrap sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <Navbar />
    </header>
  );
}
