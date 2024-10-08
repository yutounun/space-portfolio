import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-top justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <Link
              href="https://github.com/yutounun"
              className="flex flex-row items-center my-[15px] cursor-pointer z-40"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/yuto-ichihara/"
              className="flex flex-row items-center my-[15px] cursor-pointer z-40"
            >
              <AiOutlineLinkedin />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </Link>
          </div>
          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FiInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
          </div> */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start md:my-0 my-20">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Vancouver, BC, Canada
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">geek.yuto@gmail.com</span>
            </p>
            <Link
              href="https://docs.google.com/document/d/1xhEG11q_Up7wxHzwTpavkERgkRyAQp3pcHVgJm1s0vY/edit?usp=sharing"
              className="flex flex-row items-center my-[15px] cursor-pointer z-40"
            >
              <span className="text-[15px] ml-[6px]">
                frontend developer Resume
              </span>
            </Link>
            <Link
              href="https://docs.google.com/document/d/1lc4C0wmIL6yxHdORQzHE6e8x5Rt5XyaMHY06kSFzGgc/edit?usp=sharing"
              className="flex flex-row items-center my-[15px] cursor-pointer z-40"
            >
              <span className="text-[15px] ml-[6px]">
                fullstack developer Resume
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
