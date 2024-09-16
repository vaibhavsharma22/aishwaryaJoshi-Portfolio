import { url } from "inspector";

const BackToTop = () => (
  <button
    id="scroll-to-top"
    className="absolute bottom-0 right-0 px-4 py-3 text-white uppercase border border-white mr-14 sm:mr-18 focus:outline-none hover-bg-animation-light"
    onClick={() => {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
  >
    <div className="flex justify-center mb-2 transform rotate-180">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8">
        <path
          d="M.015.606c-.406.93 6.9 7.37 7.969 7.394s8.672-6.718 7.969-7.394S.422-.324.015.606z"
          fill="currentColor"
        />
      </svg>
    </div>
    Top
  </button>
);

const socialLinks = [
  {
    name: "Behance",
    url: "https://www.behance.net/aishwaryaj4581",
    color: "#99BCFA",
  },
  // { name: "Dribbble", url: "https://dribbble.com/aishwarya", color: "#FFB8D3" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aishwarya-joshi-01b63b263/",
    color: "#A3E0FF",
  },
  {
    name: "Email",
    url: "mailto:aishwarya.joshi0697@gmail.com",
    color: "#FFA299",
  },
];

export const Footer = () => (
  <footer className="relative flex items-center justify-center py-20 bg-powder-blue-dark sm:py-27 ">
    <ul className="flex flex-col space-y-10 text-2xl font-bold tracking-wide text-center text-white sm:text-left sm:text-3xl sm:flex-row sm:space-x-16 sm:space-y-0 ">
      {socialLinks.map((link) => {
        return (
          <li key={link.name}>
            <a
              // @ts-expect-error
              style={{ "--hover-color": link.color }}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              +{link.name}
            </a>
          </li>
        );
      })}
    </ul>
    <BackToTop />
    <style jsx>{`
      a {
        position: relative;
        display: inline-block;
        color: white;
        overflow: hidden;
        background: linear-gradient(
          to right,
          var(--hover-color),
          var(--hover-color) 50%,
          white 50%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;
        transition: background-position 200ms ease;
      }

      a:hover {
        background-position: 0 100%;
      }
    `}</style>
  </footer>
);
