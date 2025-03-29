import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white dark:bg-gray-800 shadow-md flex justify-between">
      <h1 className="text-lg font-bold">Zithara</h1>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
