import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      id: 1,
      src: "/1.png",
      alt: "Partner 1",
      width: 160,
      height: 100,
      category: "standard",
    },
    {
      id: 2,
      src: "/2.png",
      alt: "Hey Anon",
      width: 60,
      height: 60,
      category: "extra-small",
    },
    {
      id: 3,
      src: "/3.png",
      alt: "Virtuals",
      width: 160,
      height: 100,
      category: "standard",
    },
    {
      id: 4,
      src: "/mode.png",
      alt: "Mira Network",
      width: 20,
      height: 200,
      category: "extra-large",
    },
    {
      id: 5,
      src: "/5.png",
      alt: "Mode Network",
      width: 20,
      height: 200,
      category: "extra-large",
    },
    {
      id: 6,
      src: "/6.png",
      alt: "Borgpad",
      width: 140,
      height: 115,
      category: "medium",
    },
    {
      id: 7,
      src: "/either.png",
      alt: "Aethir",
      width: 150,
      height: 80,
      category: "small",
    },
    {
      id: 8,
      src: "/8.png",
      alt: "SendAI",
      width: 160,
      height: 100,
      category: "extra-small",
    },
  ];

  const getPartnerStyles = (category: string) => {
    switch (category) {
      case "extra-small":
        return {
          container:
            "flex items-center justify-center px-4 py-4 rounded-lg backdrop-blur-sm w-[140px] h-[150px] md:w-[160px] md:h-[170px]",
          image: "w-full h-auto object-contain max-h-[60px]",
        };
      case "small":
        return {
          container:
            "flex items-center justify-center px-4 py-5 rounded-lg backdrop-blur-sm w-[160px] h-[150px] md:w-[180px] md:h-[170px]",
          image: "w-full h-auto object-contain max-h-[80px]",
        };
      case "medium":
        return {
          container:
            "flex items-center justify-center px-4 py-7 rounded-lg backdrop-blur-sm w-[200px] h-[150px] md:w-[220px] md:h-[170px]",
          image: "w-full h-auto object-contain max-h-[115px]",
        };
      case "large":
        return {
          container:
            "flex items-center justify-center px-4 py-8 rounded-lg backdrop-blur-sm w-[220px] h-[170px] md:w-[220px] md:h-[170px]",
          image: "w-full h-auto object-contain max-h-[180px]",
        };
      case "extra-large":
        return {
          container:
            "flex items-center justify-center px-4 py-10 rounded-lg backdrop-blur-sm w-[260px] h-[150px] md:w-[280px] md:h-[170px]",
          image: "w-full h-auto object-contain max-h-[200px]",
        };
      default: // standard
        return {
          container:
            "flex items-center justify-center px-4 py-6 rounded-lg backdrop-blur-sm w-[180px] h-[120px] md:w-[200px] md:h-[170px]",
          image: "w-full h-auto object-contain max-h-[100px]",
        };
    }
  };

  return (
    <section className="w-full bg-black py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Partners Heading */}
        <h2 className="text-white text-lg md:text-xl font-semibold mb-8 text-center">
          Partners
        </h2>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-4 md:space-x-6 items-center">
            {/* Render partners multiple times for seamless loop */}
            {[...Array(3)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex space-x-4 md:space-x-6 min-w-max items-center"
              >
                {partners.map((partner) => {
                  const styles = getPartnerStyles(partner.category);
                  return (
                    <div
                      key={`${setIndex}-${partner.id}`}
                      className={styles.container}
                    >
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={partner.width}
                        height={partner.height}
                        className={styles.image}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
