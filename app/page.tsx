import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Masters from "../components/Masters";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Services />
      <About />
      <Gallery />
      <Masters />
      <Booking />
      <Footer />
    </main>
  );
}