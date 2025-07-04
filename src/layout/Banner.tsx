import Button from "../components/Buttons";

const Banner = () => {
  const totalBannerData = [
    {
      total: 26,
      name: "Artwork",
    },
    {
      total: 18,
      name: "Aucation",
    },
    {
      total: 8,
      name: "Artist",
    },
  ];

  return (
    <section className="pt-[100px] relative isolate">
      <div className="absolute w-[412px] h-[412px] rounded-full bg-[#2A3E84] blur-[175px] top-0 right-0"></div>
      <div className="absolute w-[412px] h-[412px] rounded-full bg-[#2A3E84] blur-[175px] top-0 left-0 -z-10"></div>
      <img src="/img/Star 1.png" alt="star" className="absolute left-[47%]" />
      <img src="/img/Star 2.png" alt="star" className="absolute left-[86%]" />
      <div className="hero-wrapper mt-[180px] flex items-center">
        <div className="max-w-[738px]">
          <h1 className="text-7xl md:text-8xl leading-snug font-jura">
            Discover
          </h1>
          <h1 className="text-7xl md:text-8xl leading-snug font-jura">
            Collect and Sell NFT.
          </h1>
          <p className="text-[30px] my-12 text-center lg:text-left">
            Explore on the world’s best largest NFT marketplace
          </p>
          <Button
            className="relative w-52 group overflow-hidden m-auto md:m-0 rounded-2xl py-2"
            type="button"
            link=""
          >
            <div className="absolute inset-0 bg-gradient-1 transition-opacity duration-500 group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-gradient-reversed opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <span className="relative text-2xl">Explore</span>
          </Button>

          <ul className="flex mt-[50px] justify-center md:justify-start gap-12">
            {totalBannerData.map((item) => (
              <li
                key={item.name}
                className="flex flex-col justify-center items-center"
              >
                <h3 className="text-4xl md:text-5xl font-jura">
                  {item.total}K+
                </h3>
                <p className="text-xl font-medium w-20">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 hidden lg:block">
          <div className="relative isolate">
            <img
              src="/img/banner/BlueLine.png"
              className="absolute -z-10 aspect-4/3 object-cover"
              alt="blue line"
            />
            <img
              srcSet="/img/banner/LogoBanner.png 2x"
              className="absolute top-[-200px] right-25 aspect-4/3 object-cover"
              alt="logo banner"
            />
            <img
              src="/img/banner/bannerImg.png"
              className=" h-[614px] w-[526px] aspect-4/3 object-cover"
              alt="banner image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
