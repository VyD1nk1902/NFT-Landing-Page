import logo from "../assets/nft-logo.svg";
import logo2x from "../assets/nft-logo.svg";
import Button from "../components/Buttons";
import WalletIcon from "../assets/Icons/WalletIcon";
import { useShowModal } from "../stores/showModal";

const navMenuData = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Explore",
    link: "#",
  },
  {
    title: "Products",
    link: "#",
  },
  {
    title: "Activity",
    link: "#",
  },
  {
    title: "Elements",
    link: "#",
  },
];

const Header = () => {
  const showModal = useShowModal((state) => state.open);
  return (
    <header className="h-[100px] fixed top-0 left-0 right-0 bg-primary shadow-md z-40">
      <div className="hero-wrapper md:justify-between h-full items-center flex justify-around ">
        <a href="#">
          <img src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} className="md:w-[180px] md:h-[50px]" alt="main-logo" />
        </a>
        <div className=" items-center hidden md:flex gap-x-[59px]">
          <ul className="flex gap-8 font-jura ">
            {navMenuData.map((item) => (
              <li key={item.title}>
                <a href={item.link} className="text-2xl hover:text-third">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <Button
            className="bg-secondary text-2xl gap-2.5 transition-colors duration-300 ease-in-out hover:bg-cyan-500 px-7 py-2.5 rounded-2xl"
            link=""
            type="button"
          >
            <WalletIcon />
            Wallet
          </Button>
        </div>
        <Button type="button" onClick={showModal} link="" className="md:hidden">
          ☰
        </Button>
      </div>
    </header>
  );
};

export default Header;
