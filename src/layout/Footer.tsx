import type { FooterContactProps } from "../types/FooterContact";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = ({ contact }: FooterContactProps) => {
  return (
    <>
      <footer className="min-h-screen pb-[100px] bg-[url(public/img/footer/footer-bg.png)] w-full bg-cover bg-fixed bg-no-repeat bg-center">
        <h2 className="md:text-[100px] text-4xl md:py-[140px] py-[100px] text-center">NFT Marketplace</h2>
        <div className="grid md:grid-cols-4 grid-cols-3 md:px-[150px] px-4 place-items-center ">
          <img src="/public/img/footer/footer-logo.png" className="hidden md:block" alt="" />
          {contact.map((contact) => (
            <div key={contact.title} className="flex flex-col gap-12">
              <h2 className="md:text-3xl text-lg font-bold ">{contact.title}</h2>
              <ul className="text-xs flex flex-col gap-6 md:pl-7 p-0">
                <li>
                  <a href="#">{contact.link1} </a>
                </li>
                <li>
                  <a href="#">{contact.link2} </a>
                </li>
                <li>
                  <a href="#">{contact.link3} </a>
                </li>
                <li>
                  <a href="#">{contact.link4} </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2">
          <div className="md:col-span-3"></div>
          <div className="md:pt-[150px] pt-[100px]">
            <h1 className="text-2xl md:text-3xl pb-5 pl-15">Follow Us</h1>
            <div className="flex gap-5">
              <div className="w-[50px] h-[50px] rounded-full bg-gradient-circle relative">
                <a href="#">
                  <FaFacebookSquare className="text-2xl absolute top-3 left-[13px]" />
                </a>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#261437] relative">
                <a href="">
                  <FaInstagram className="text-2xl absolute top-3 left-[13px]" />
                </a>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#261437] relative">
                <a href="">
                  <CiLinkedin className="text-2xl absolute top-3 left-[13px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
