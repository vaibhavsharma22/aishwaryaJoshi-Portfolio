import { Footer } from "../src/components/Footer";
import { GetInTouch } from "../src/components/GetInTouch";
import { Header } from "../src/components/Header";
import { Introduction } from "../src/components/Introduction";
import { JumboTron } from "../src/components/Jumbotron";
import { Projects } from "../src/components/Projects";

export default function IndexPage() {
  return (
    <div className="relative">
      <Header />
      <main>
        <JumboTron />
        <Introduction />
        <Projects />
        <GetInTouch />
        <Footer />
      </main>
    </div>
  );
}
