import { useEffect } from "react";
import Rellax from "rellax";

export const JumboTron = () => {
  useEffect(() => {
    const rellax = new Rellax(".rellax", {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    return function cleanListeners() {
      rellax.destroy();
    };
  }, []);
  return (
    <section className="relative pt-20 sm:pt-15 jumbotron rellax">
      <div className="background"></div>
      <div className="h-16" />
      <h1 className="relative z-30 text-6xl font-bold tracking-wide text-center uppercase text-alabaster font-josephin">
        Aishwarya Joshi
      </h1>
      <div className="h-3 " />
      <h1 className="relative z-30 font-sans text-xl tracking-wide text-center uppercase md:tracking-wider text-powder-blue-dark">
        UI UX Designer
      </h1>

      <div
        className="absolute left-0 bottom-24 md:bottom-0 clouds bg-powder-blue rellax"
        data-rellax-speed={2}
        data-rellax-xs-speed={2}
        data-rellax-mobile-speed={2}
        data-rellax-tablet-speed={4}
        data-rellax-desktop-speed={4}
      />
      <div className="absolute top-0 left-0 illustration rellax" />

      <style jsx>{`
        .background {
          position: absolute;
          top: 0;
          left: 0;
          height: calc(var(--vh, 1vh) * 80);
          background: var(--powder-blue);
          width: 100%;
          z-index: -1;
        }

        .jumbotron {
          height: calc(calc(var(--vh, 1vh) * 100) + 12rem);
        }

        .clouds {
          width: 100%;
          height: calc(calc(var(--vh, 1vh) * 100) - 3.75rem);
          margin-top: 12rem;
          background-color: transparent;
          background-image: url(/images/desktop/clouds.png);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          z-index: 11;
        }

        .illustration {
          width: 60vw;
          height: 70vh;
          background-color: var(--powder-blue);
          background-image: url(/images/desktop/headeImage.png);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 80%;
          top: 48%;
          left: 48%;
          transform: translate(-50%, -50%) !important;
          z-index: 10;
        }

        @media (min-width: 640px) {
          .illustration {
            top: 50%;
            background-size: 45%;
          }
        }
      `}</style>
    </section>
  );
};
