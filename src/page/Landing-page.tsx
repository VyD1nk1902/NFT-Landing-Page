import Banner from "../layout/Banner";
import Collection from "../layout/Collection";
import Header from "../layout/Header";
import ModalHeader from "../layout/ModalHeader";
import Story from "../layout/Story";
import LiveAcution from "../layout/LiveAcution";
import Creator from "../layout/Creators";
import Feature from "../layout/Feature";

const DataCollection = [
  {
    img: "/public/img/collection/Ava-1.png",
    name: "Bored Ape Yacht Club",
    icon: "/public/img/collection/collectionIcon.png",
    volumn: "230.38",
    volumnChange: 50.2,
    floor: "12.38",
    floorChange: 50.2,
    items: "138",
  },
  {
    img: "/public/img/collection/Ava-2.png",
    name: "Mutant Ape Yacht Club",
    icon: "/public/img/collection/collectionIcon.png",
    volumn: "138.38",
    volumnChange: 28.2,
    floor: "76.38",
    floorChange: 70.1,
    items: "122",
  },
  {
    img: "/public/img/collection/Ava-3.png",
    name: "Otherdeed for Otherside",
    icon: "/public/img/collection/collectionIcon.png",
    volumn: "80.18",
    volumnChange: 50.2,
    floor: "91.38",
    floorChange: 32.2,
    items: "192",
  },
  {
    img: "/public/img/collection/Ava-4.png",
    name: "Pudgy Penguins",
    icon: "/public/img/collection/collectionIcon.png",
    volumn: "291.38",
    volumnChange: -49.2,
    floor: "61.38",
    floorChange: 60.2,
    items: "22,000",
  },
  {
    img: "/public/img/collection/Ava-5.png",
    name: "Quirkies Originals",
    icon: "/public/img/collection//collectionIcon.png",
    volumn: "81.38",
    volumnChange: -15.2,
    floor: "23.12",
    floorChange: 50.2,
    items: "2,321",
  },
  {
    img: "/public/img/collection/Ava-6.png",
    name: "Doodle",
    icon: "/public/img/collection/collectionIcon.png",
    volumn: "340.21",
    volumnChange: 50.2,
    floor: "12.38",
    floorChange: -21.1,
    items: "2,721",
  },
  {
    img: "/public/img/collection/Ava-7.png",
    name: "Quirkies Originals",
    icon: "/public/img/collection/collectionIcon.png",
    volumn: "263.82",
    volumnChange: 42.2,
    floor: "45.35",
    floorChange: -13.13,
    items: "712",
  },
];

const AcutionData = [
  {
    background: "/public/img/acution/bg-1.png",
    bid: "7.8",
    title: "Golden Hour",
    creator: "John Doe",
    ava0: "/public/img/acution/ava-live-1-1.png",
    ava1: "/public/img/acution/ava-live-1-2.png",
    ava2: "/public/img/acution/ava-live-1-2.png",
    ava3: "/public/img/acution/ava-live-1-2.png",
  },
  {
    background: "/public/img/acution/bg-2.png",
    bid: "3.9",
    title: "Blue Panda",
    creator: "lkema sjakw",
    ava0: "/public/img/acution/ava-live-2-1.png",
    ava1: "/public/img/acution/ava-live-2-2.png",
    ava2: "/public/img/acution/ava-live-2-2.png",
    ava3: "/public/img/acution/ava-live-2-2.png",
  },
  {
    background: "/public/img/acution/bg-3.png",
    bid: "2.5",
    title: "colourfull cat",
    creator: "Dmd Gahn",
    ava0: "/public/img/acution/ava-live-3-1.png",
    ava1: "/public/img/acution/ava-live-3-2.png",
    ava2: "/public/img/acution/ava-live-3-2.png",
    ava3: "/public/img/acution/ava-live-3-2.png",
  },
];

const CreatorData = [
  {
    img: "/public/img/creator/Ellipse 94.png",
    name: "Emerson Philips",
    value: "3.2",
  },
  {
    img: "/public/img/creator/Ellipse 94.png",
    name: "Emerson Philips",
    value: "3.2",
  },
  {
    img: "/public/img/creator/Ellipse 94.png",
    name: "Emerson Philips",
    value: "3.2",
  },
  {
    img: "/public/img/creator/Ellipse 94.png",
    name: "Emerson Philips",
    value: "3.2",
  },
  {
    img: "/public/img/creator/Ellipse 94.png",
    name: "Emerson Philips",
    value: "3.2",
  },
  {
    img: "/public/img/creator/Ellipse 94.png",
    name: "Emerson Philips",
    value: "3.2",
  },
];

const LandingPage = () => {
  return (
    <>
      <div>
        <Header />
        <ModalHeader />
        <Banner />
        <Story />
        <Collection collections={DataCollection} />
        <LiveAcution cardInfo={AcutionData} />
        <Creator creator={CreatorData} />
        <Feature />
      </div>
    </>
  );
};

export default LandingPage;
