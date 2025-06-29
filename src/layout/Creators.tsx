import type { CreatorProps } from "../types/Creators"
import CreatorCard from "../components/CreatorCard"
import Button from "../components/Buttons"

const Creator = ({creator}: CreatorProps) => {
    return (
        <section className="pt-36 mb-40">
            <div className="text-center">
                <h1 className="text-5xl">Our Creater</h1>
                <p className="text-base pt-5">The largest and unique Super rare NFT marketplace <br /> For crypto-collectibles</p>
            </div>
            <div className="pt-12 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 place-items-center">
            <CreatorCard creator={creator} />
            </div>
            <Button className="mt-24 mx-auto md:w-[150px] md:h-[50px] rounded-4xl border-third border-1 text-third p-5" type="button" link="">
                Explore More
            </Button>
        </section>
    )
}


export default Creator