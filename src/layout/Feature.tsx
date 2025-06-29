const Feature = () => {
  return (
    <div className="relative ">
      <img
        src="/public/img/feature/Frame.png"
        className="w-full absolute aspect-[16/9] max-h-[528px] inset-0 "
        alt=""
      />
      <div className="absolute inset-0">
        <img
          src="/public/img/feature/Model.png"
          className=" absolute -top-8"
          alt=""
        />
        <div className="absolute w-[541px] left-[55%] top-40">
          <h2 className="text-5xl pb-12">Why choose us?</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
            semper. Eros suspendisse varius enim ultrices isque et quis ctumst.
            Feugiat amet velit faucibus amet <br /> <br /> Eu feugiat adipiscing
            viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid
            ultrices vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
