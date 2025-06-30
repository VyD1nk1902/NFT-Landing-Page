const Feature = () => {
  return (
    <div className="relative w-full md:max-h-[528px]  md:aspect-[16/9] aspect-[4/3] overflow-hidden">
      <img
        src="/public/img/feature/Frame.png"
        className="w-full object-cover md:max-h-[528px] max-h-[350px] md:aspect-[16/9] aspect-[4/3] absolute inset-0 "
        alt=""
      />
      <div className="absolute inset-0">
        <img
          src="/public/img/feature/Model.png"
          className="absolute md:-top-8 md:w-[450px] w-[150px] top-10 left-0"
          alt=""
        />
        <div className="absolute md:w-[541px] w-[200px] left-[45%] md:left-[55%] md:top-40 top-5">
          <h2 className="text-2xl md:text-5xl pb-8 md:pb-12">Why choose us?</h2>
          <p className="text-xs md:text-xl">
            Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim
            ultrices isque et quis ctumst. Feugiat amet velit faucibus amet <br /> <br /> Eu feugiat adipiscing
            viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
