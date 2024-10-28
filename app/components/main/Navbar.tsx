import Image from "next/image";

const Navbar = () => {
  return (
    <div className="hidden md:block w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin hidden md:block"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Andrew
          </span>
        </a>

        <div className="w-1/2 h-full flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
          <div className="py-2 button-secondary flex justify-center items-center text-white cursor-pointer rounded-lg h-12 md:h-auto flex-grow w-full md:max-w-[200px]">
            <a href="#contact">Talk with me 👋</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
