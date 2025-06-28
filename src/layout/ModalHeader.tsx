import { useShowModal } from "../stores/showModal";

const ModalHeader = () => {
  const isOpen = useShowModal((state) => state.isOpen);
  const close = useShowModal((state) => state.close);

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

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className=" min-h-screen fixed inset-0 z-40 bg-black/60 flex items-center justify-center " onClick={close}>
        <ul className="flex flex-col items-center justify-center gap-8 font-jura" onClick={(e) => e.stopPropagation()}>
          {navMenuData.map((item) => (
            <li key={item.title}>
              <a href={item.link} className="text-xl">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalHeader;
