import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Features />
      <Stats />
      <Products />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
