import ArtikelCard from "./artikelCard";

const ArtikelList = () => {
  const articles = [
    {
      image:
        "https://rsudkertosono.nganjukkab.go.id/web2/assets/images/2f27d1d5b8f3b564af48ff25bce30cd6.jpg",
      category: "Lifestyle",
      title: "Tips Hidup Sehat di Era Modern",
      desc: "Artikel ini membahas cara menjaga kesehatan tubuh dan pikiran.",
      date: "Senin, 10 November 2025",
    },
  ];

  return (
    <>
      {articles.map((item, index) => (
        <ArtikelCard key={index} {...item} />
      ))}
    </>
  );
};

export default ArtikelList;
