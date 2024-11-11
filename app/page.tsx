
import HomeHero from "./components/ui/home-hero";
import Navbar from "./components/ui/Navbar";
import SecondSection from "./components/ui/second-section";
import ContactCTA from "./components/ui/contact-cta";
import Testimonials from "./components/ui/testimonial-section";
import ContactForm from "./components/ui/contact-us";
import Footer from "./components/ui/footer";
import Featured from "./components/featured";
import FRQ from "./components/ui/FRQ";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

      <Navbar />
      <HomeHero />
      <SecondSection />
      <ContactCTA />
      <Featured />
      {/* 
      <AllServices /> */}
      <Testimonials />
      <FRQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
