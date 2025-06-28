import type { CardAcutionProps } from "../types/CardAcutionProps";
import Ethereum from "../assets/Icons/Ethereum";
import Button from "./Buttons";
export default function CardAcution({ cardInfo }: CardAcutionProps) {
  return (
    <div className="flex gap-8">
      {cardInfo.map((card, index) => (
        <div key={index} className="relative w-[384px] h-[460px] px-4 pt-3 rounded-xl">
          <img className="absolute inset-0 w-full h-full object-cover z-0" src={card.background} />
          <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="text-sm text-black">Current bid</h3>
                <div className="flex items-center font-bold gap-1 text-third text-base">
                  <Ethereum /> {card.bid} ETH
                </div>
              </div>

              <Button className="px-5 py-2 rounded-[20px] bg-third" link="" type="button">
                Place Bid
              </Button>
            </div>

            <div>
              <h3 className="text-black">{card.title}</h3>
              <div className="flex gap-2">
                <img src={card.ava0} alt="" />
                <span className="text-[#789EAC]">{card.creator}</span>
              </div>

              <div className="absolute flex items-center -space-x-3 right-[27%] bottom-[3%]">
                <img src={card.ava1} alt="" />
                <img src={card.ava2} alt="" />
                <img src={card.ava3} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
