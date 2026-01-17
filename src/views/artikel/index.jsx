import ArtikelHero from "../../sections/artikel/artikelHero";
import ArtikelVideo from "../../sections/artikel/artikelVidio";
import ArtikelList from "../../sections/artikel/artikelList";
import ArtikelPagination from "../../sections/artikel/artikelPagination";

const Artikel = () => {
  return (
    <>
      <section className="container mx-auto grid xl:grid-cols-4 gap-10 pt-26 px-5">
        <ArtikelHero />
        <ArtikelVideo />
      </section>

      <section className="container mx-auto mt-10 px-5">
        <ArtikelList />
        <ArtikelPagination />
      </section>
    </>
  );
};

export default Artikel;
