import ArrowLeft from "../assets/Icons/ArrowLeft";
import ArrowRight from "../assets/Icons/ArrowRight";
import type { CardAcutionProps } from "../types/CardAcutionProps";
import CardAcution from "../components/Card";
import Marquee from "react-fast-marquee";

const LiveAcution = ({ cardInfo }: CardAcutionProps) => {
  return (
    <section className="md:max-w-[1360px]  m-auto pt-[150px]">
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl">Live Acution</h1>
        <p className="text-base pt-5">
          The largest and unique Super rare NFT marketplace <br /> For crypto-collectibles
        </p>
      </div>
      <div className="mt-12 relative ">
        <button className="absolute hidden md:block left-0 top-1/2 z-10  ">
          <ArrowLeft />
        </button>
        <div className="flex justify-center">
          <Marquee speed={100} pauseOnClick className="overflow-hidden">
            <CardAcution cardInfo={cardInfo} />
          </Marquee>
        </div>

        <button className="absolute hidden md:block -right-5 top-1/2 z-10 ">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default LiveAcution;
