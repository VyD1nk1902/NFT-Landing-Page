import type { CreatorProps } from "../types/Creators"
import CreatorFrame from "../assets/CreatorFrame"
const CreatorCard = ({creator}: CreatorProps ) => {
    return (
        <>
            {creator.map((person) => (
                <div key={person.name} className="relative w-full max-w-[384px] h-[100px] sm:h-[150px] md:h-[180px]">
                    <div className="absolute flex inset-0 items-center justify-around">
                        <CreatorFrame className="absolute inset-0 z-0 md:top-10 sm:top-5"/>
                        <img className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" src={person.img} alt="" />
                        <div className="z-10">
                            <p className="">{person.name}</p>
                            <p className="">{person.value} ETH</p>
                        </div>
                        <a  href="#" className="underline text-third z-10">Follow</a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CreatorCard