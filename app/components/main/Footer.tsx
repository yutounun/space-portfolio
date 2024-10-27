import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-top justify-start md:justify-around flex-wrap px-6 md:px-0">
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start">
            <div className="mb-2 font-bold text-[16px]">Community</div>
            <div className="flex flex-col gap-1">
              <Link
                href="https://github.com/yutounun"
                className="flex flex-row items-center cursor-pointer z-40"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/yuto-ichihara/"
                className="flex flex-row items-center cursor-pointer z-40"
              >
                <AiOutlineLinkedin />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </Link>
            </div>
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
          <div className="min-w-[200px] h-auto flex flex-col items-start justify-start md:my-0 my-20">
            <div className="mb-2 font-bold text-[16px]">About</div>
            <div className="flex flex-col gap-1">
              <p className="flex flex-row items-center cursor-pointer">
                <span className="text-[15px]">Vancouver, BC, Canada</span>
              </p>
              <p className="flex flex-row items-center cursor-pointer">
                <span className="text-[15px]">geek.yuto@gmail.com</span>
              </p>
              <Link
                href="https://docs.google.com/document/d/1xhEG11q_Up7wxHzwTpavkERgkRyAQp3pcHVgJm1s0vY/edit?usp=sharing"
                className="flex flex-row items-center cursor-pointer z-40"
              >
                <span className="text-[15px]">frontend developer Resume</span>
              </Link>
              <Link
                href="https://docs.google.com/document/d/1lc4C0wmIL6yxHdORQzHE6e8x5Rt5XyaMHY06kSFzGgc/edit?usp=sharing"
                className="flex flex-row items-center cursor-pointer z-40"
              >
                <span className="text-[15px]">fullstack developer Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
