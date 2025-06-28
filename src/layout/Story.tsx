import Button from "../components/Buttons";

const Story = () => {
  return (
    <section className="pt-[150px] relative isolate">
      <div className="w-[407px] h-[612px] blur-[175px] absolute bg-[#2A3E84] top-36 right-0 -z-10"></div>
      <img src="/public/img/Star 1.png" alt="star" className="absolute left-[68%] top-[18%]" />
      <img src="/public/img/Star 2.png" alt="star" className="absolute left-[86%] top-[45%]" />
      <div className=" md:max-w-[1360px] m-auto">
        <div className="hero-wrapper flex gap-40">
          <div className="w-[480px]">
            <img src="/public/img/story/StoryImg.png" alt="Story Image" />
          </div>
          <div className="w-[713px]">
            <h1 className="text-5xl pb-7">NFT's Story</h1>
            <p className="text-3xl pb-12 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <Button className="relative w-52 group overflow-hidden rounded-2xl py-2" type="button" link="">
              <div className="absolute inset-0 bg-gradient-1 transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="absolute inset-0 bg-gradient-reversed opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <span className="relative text-2xl">Learn more</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
