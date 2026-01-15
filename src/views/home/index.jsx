import HeroSection from "../../sections/home/hero/heroSection";
import AboutSection from "../../sections/home/about/about";
import ListArtikelSection from "../../sections/home/listArtikel/listArtikel";

function homeView() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ListArtikelSection />
    </>
  );
}
export default homeView;
