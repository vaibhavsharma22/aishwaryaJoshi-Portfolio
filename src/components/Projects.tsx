import Image from "next/image";
import Link from "next/link";
import { DownArrow } from "./DownArrow";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Government Website",
    imageUrl: "/images/projects/governmentWebsite.png",
    projectUrl:
      "https://www.behance.net/gallery/208028265/Government-Website-Redesign",
    color: "#181818",
  },
  {
    title: "BarDoc",
    imageUrl: "/images/projects/Bardoc.png",
    projectUrl: "https://www.behance.net/gallery/208026121/BarDoc",
    color: "#4D5BA7",
  },
  {
    title: "W.O.W.",
    imageUrl: "/images/projects/wow.png",
    projectUrl: "https://www.behance.net/gallery/208027817/Worms-Of-Wisdom",
    color: "#2C6DEF",
  },
  {
    title: "SeeYaa",
    imageUrl: "/images/projects/SeeYaa.png",
    projectUrl:
      "https://www.behance.net/gallery/198782409/Travel-App-Visual-Design-SeeYaa",
    color: "#77928E",
  },
  {
    title: "Bricks Back",
    imageUrl: "/images/projects/BrickReclamation.png",
    projectUrl: "https://www.behance.net/gallery/208027183/BrickBack",
    color: "#14A2E9",
  },
  {
    title: "Trick of trades",
    imageUrl: "/images/projects/TrickOfTrade.png",
    projectUrl:
      "https://www.behance.net/gallery/198781667/Trading-Courses-Website",
    color: "White",
  },
  {
    title: "BSS",
    imageUrl: "/images/projects/BSS.png",
    projectUrl: "https://www.behance.net/gallery/198764109/Housing-Project-UI",
    color: "#858585",
  },
];

const Project = ({
  project: { title, imageUrl, projectUrl, color },
}: {
  project: {
    title: string;
    imageUrl: string;
    projectUrl: string;
    color: string;
  };
}) => {
  return (
    <Link href={projectUrl}>
      <a target="_blank" rel="noopener noreferrer">
        <div
          className="relative h-0 group aspect-auto projectContainer"
          style={{ paddingBottom: "80%" }} // Maintain aspect ratio
        >
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className=""
            loading="eager"
          />
          <div className={`absolute inset-0 projectDetails`}>
            <div className="absolute text-4xl font-bold tracking-wide uppercase break-words bottom-10 left-10 font-josephin">
              {title}
            </div>
          </div>
          <style jsx>{`
            .projectContainer {
              overflow: hidden;
            }

            .projectDetails {
              /* prettier-ignore */
              background-color: rgba(255,255,255,0.8);
              transform: scaleX(0); /* Initial scale to 0, hidden */
              transform-origin: left;
              transition: transform 0.3s ease-in-out;
              color: ${color};
              border: 6px solid ${color};
            }

            .projectContainer:hover .projectDetails {
              /* prettier-ignore */
              transform: scaleX(1);
            }
          `}</style>
        </div>
      </a>
    </Link>
  );
};

export const Projects = () => (
  <section
    id="projects"
    className="pt-14 mt-14 sm:pt-8 pb-18 sm:pb-24 bg-alabaster scroll-margin-top-15"
  >
    <SectionHeading>Projects</SectionHeading>
    <div className="h-3"></div>
    <DownArrow />

    <div className="h-10 sm:h-16"></div>
    {/* Projects */}
    <div className="grid grid-cols-1 gap-4 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <Project key={project.projectUrl} project={project} />
      ))}
    </div>
    <div className="h-16"></div>
    <div className="flex justify-center ">
      <a
        href="https://www.behance.net/aishwaryaj4581"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="relative px-8 py-6 font-sans text-base tracking-widest uppercase bg-white border hover-bg-animation-dark border-powder-blue-dark focus:outline-none hover:text-white">
          View All
        </button>
      </a>
    </div>
  </section>
);
