export const Header = () => {
  return (
    <div className="fixed inset-x-0 top-3 flex justify-center items-center z-10 ">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop:blur ">
        <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          Projects
        </a>
        <a className="nav-item" href="#">
          About
        </a>
        <a
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          href="#"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
