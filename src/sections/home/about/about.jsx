import Card from "./card";

const AboutSection = () => {
  return (
    <section class="grid grid-cols-3 xl:grid-cols-5 gap-16 px-5 md:px-10 xl:px-20 py-16 text-gray-800">
      <div class="col-span-3 xl:col-span-2 flex items-center text-center rounded-xl bg-white shadow-xl/20 border-r-8 border-r-prestige-gold border border-prestige-gold px-10 py-14">
        <div class="text-center mx-auto">
          <div class="flex items-center justify-center gap-6">
            <hr class="border-3 border-prestige-gold w-9 md:w-10 lg:w-16" />

            <div class="flex flex-col items-center">
              {/* <img src="{{ asset('images/logo.png') }}" alt="" class="w-16 h-16" /> */}
              <h3 class=" font-extralight text-md lg:text-xl font-serif tracking-widest text-prestige-gold uppercase">
                KuniVerse
              </h3>
              <h2 class="text-lg font-medium ">Layanan</h2>
            </div>
            <hr class="border-3 border-prestige-gold w-9 md:w-10 lg:w-16" />
          </div>
          <p class="mt-5">
            Melalui{" "}
            <span className="font-extralight font-serif tracking-widest text-prestige-gold uppercase">
              KuniVerse
            </span>
            , Anda dapat menjelajahi wisata Kuningan, menemukan kuliner khas,
            serta mendukung produk UMKM lokal dalam satu platform digital.
          </p>
        </div>
      </div>
      <div class="hidden md:grid grid-cols-3 col-span-3 gap-2">
        <div className="hidden md:grid grid-cols-3 col-span-3 gap-2">
          <Card
            image="https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/0896b65a-6d1e-4583-b60c-573359528121_Go-Biz_20220218_132132.jpeg"
            title="Kuliner Khas"
          />

          <Card
            image="https://i.pinimg.com/736x/14/ad/31/14ad3171038b99261210a9fbe6785d41.jpg"
            title="Wisata Kuningan"
          />

          <Card
            image="https://pdbifiles.nos.jkt-1.neo.id/files/2018/08/05/oskm18_sappk_adriel_595839a1be7662943bad20c349ee8fa2ac09666f.jpg"
            title="UMKM Lokal"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
