import type { TopCollectionProps } from "../types/CollectionDataType";
import Button from "../components/Buttons";
import { useActiveTab } from "../stores/activeTab";

const Collection = ({ collections }: TopCollectionProps) => {
  const {activeTab, setTab} = useActiveTab();

  return (
   
    <section className="hero-wrapper pt-64">
      <div className="flex justify-center items-center gap-9">
        <img src="/public/img/collection/Line 1.png" alt="" />
        <h1 className="text-5xl">Top Collections</h1>
        <img src="/public/img/collection/Line 2.png" alt="" />
      </div>

      <div className="flex gap-12 py-12">
        {["24h", "7D", "All time"].map((tab) => (
          <Button
            key={tab}
            type="button"
            link=""
            onClick={() => setTab(tab)}
            className={`text-2xl px-10 py-4 rounded-[25px]  ${tab ===  activeTab ? "bg-fourth hover:bg-pink-200" : "bg-secondary hover:bg-third"}`}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b text-2xl border-[#505050]">
        <div>Collections</div>
        <div className="text-right">Volume</div>
        <div className="text-right">Floor Price</div>
        <div className="text-right">Items</div>
      </div>

      {collections.map((col, index) => (
        <div key={index} className="grid grid-cols-[2fr_1fr_1fr_1fr] pt-7">
          {/* Collection Column */}
          <div className="flex gap-7 items-center">
            <span className="text-fourth font-kite text-3xl">{index + 1}</span>
            <img src={col.img} alt="" />
            <span className="text-2xl">{col.name}</span>
            <img src={col.icon} className="ml-auto" alt="" />
          </div>

          {/* Volumn Column */}
          <div className="flex flex-col items-end justify-center gap-2.5 ">
            <span className="text-2xl">{col.volumn} ETH</span>
            <span className={`text-xl ${col.volumnChange >= 0 ? "text-green" : "text-red"}`}>
              {col.volumnChange >= 0 ? "+" : ""}
              {col.volumnChange}%
            </span>
          </div>

          {/* Floor Column */}
          <div className="flex flex-col items-end justify-center gap-2.5 ">
            <span className="text-2xl">{col.floor} ETH</span>
            <span className={`text-xl ${col.floorChange >= 0 ? "text-green" : "text-red"}`}>
              {col.floorChange >= 0 ? "+" : ""}
              {col.floorChange}%
            </span>
          </div>

          {/* Items Column */}
          <div className="flex flex-col items-end justify-center gap-2.5 ">
            <span className="text-2xl">{col.items}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Collection;
