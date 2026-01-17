import HeroSection from "../../sections/home/hero/heroSection";
import AboutSection from "../../sections/home/about/about";
import ListArtikelSection from "../../sections/home/listArtikel/listArtikel";
import CtaSection from "../../sections/home/cta/cta";

function homeView() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ListArtikelSection />
      <CtaSection />
    </>
  );
}
export default homeView;
