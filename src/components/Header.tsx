import disableScroll from "disable-scroll";
import { useEffect, useState } from "react";

export const HeaderWeb = () => (
  <header className="fixed top-0 left-0 z-10 hidden w-full text-sm tracking-wide uppercase border-b-2 border-white header bg-white-70 h-15 sm:block">
    <nav className="h-full">
      <ul className="flex items-center justify-center w-full h-full space-x-36">
        <li className="relative">
          <a href="#projects">Projects</a>
        </li>
        <li className="relative">
          <a
            href="https://drive.google.com/file/d/1Fg2I2eu0Ru6D-3eFzVcnDX0b4hUrAuUQ/view?usp=drive_link"
            target="__blank"
          >
            Resume
          </a>
        </li>
        <li className="relative">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      .header {
        backdrop-filter: blur(3px);
      }

      li:before {
        position: absolute;
        bottom: 1px;
        content: "";
        width: 0;
        height: 8px;
        background: var(--powder-blue);
        z-index: -1;
        transition: all 0.2s ease-in;
      }

      li:hover:before {
        width: 100%;
      }
    `}</style>
  </header>
);

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((isOpen) => !isOpen);

  useEffect(() => {
    if (isSidebarOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [isSidebarOpen]);

  return (
    <div className="relative sm:hidden">
      <button className="bg-white-70" onClick={toggleSidebar}>
        <span className={`hamburger ${isSidebarOpen ? "open" : ""}`}>
          &nbsp;
        </span>
      </button>

      <div className={`sidebar bg-white-70 ${isSidebarOpen ? "open" : ""}`}>
        <nav className="h-full">
          <ul className="flex flex-col items-center justify-center h-full text-sm tracking-wide uppercase space-y-18">
            <li>
              <a href="#projects" onClick={toggleSidebar}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="/files/Resume.pdf"
                target="__blank"
                onClick={toggleSidebar}
              >
                Resume
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleSidebar}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        button {
          backdrop-filter: blur(3px);
          opacity: 0.75;
          height: 42px;
          width: 42px;
          position: fixed;
          top: 1rem;
          right: 1rem;
          border-radius: 50%;
          z-index: 2001;
          box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
          text-align: center;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button:focus {
          outline: none;
        }

        .hamburger {
          margin-top: -8px;
          position: relative;
          width: 1rem;
          height: 2px;
          background: #707070;
          transition: all 0.2s;
        }

        .hamburger:after {
          content: "";
          position: absolute;
          top: 8px;
          left: 0;
          width: 100%;
          height: 100%;
          background: #707070;
          transition: all 0.2s;
        }

        .hamburger.open {
          margin-top: -6px;
          transform: rotate(45deg) translate(2px, 2px);
          top: 0;
          left: 0;
        }

        .hamburger.open:after {
          transform: rotate(-90deg) translate(8px, 0px);
        }

        .sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 15rem;
          height: 100vh;
          height: calc(100vh - 60);
          height: calc(var(--vh, 1vh) * 100);
          backdrop-filter: blur(3px);
          z-index: 2000;
          transform: translateX(15rem);
          transition: all 0.3s ease-out;
        }

        .sidebar.open {
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export const Header = () => (
  <>
    <HeaderWeb />
    <Sidebar />
  </>
);
