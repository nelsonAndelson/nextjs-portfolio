import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/banner";
import BrandSlider from "@/components/Brand/brand";
import About from "@/components/About/about";
import ServiceList from "@/components/Service/service";
import SkillList from "@/components/Skills/skill";
import Intrested from "@/components/Intrested/intrested";
import Work from "@/components/Work/work";
import Testimonial from "@/components/Testimonial/testimonial";
import Contact from "@/components/Contact/contact";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Banner />
        <BrandSlider />
        <About />
        <ServiceList />
        <SkillList />
        <Intrested />
        <Work />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
