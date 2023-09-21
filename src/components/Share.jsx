import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import qrCode from "../assets/qrCode.png";
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
let iconsClasses = "w-[35px] sm:w-[45px] lg:w-[55px]";
let url = "http://localhost:5173/";
const Share = ({ display, setDisplay }) => {
  return (
    <div
      className={`w-[100%] h-screen sm:h-[80%] sm:w-[45%] shadow-lg p-3 ${display} flex-col gap-5 rounded-lg bg-white absolute top-0 sm:top-10`}
    >
      <AiOutlineClose
        className="absolute right-3 text-3xl text-gray-700 hover:text-gray-500 hover:cursor-pointer"
        onClick={() => {
          setDisplay((display) => "hidden");
        }}
      />
      <div className="w-full flex flex-col items-center justify-center gap-10 p-5">
        <span className="text-base lg:text-2xl font-semibold">
          {" "}
          Help me to buy a coffee
        </span>
        <img src={qrCode} alt="qrCode" className="w-[50%]" />
      </div>
      <div className="w-full overflow-x-auto flex justify-center items-center gap-2">
        <WhatsappShareButton url={url}>
          <WhatsappIcon className={iconsClasses} />
        </WhatsappShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon className={iconsClasses} />
        </FacebookShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon className={iconsClasses} />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon className={iconsClasses} />
        </TelegramShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon className={iconsClasses} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default Share;
