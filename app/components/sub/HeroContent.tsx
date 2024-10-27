import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-8 md:px-12 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto">
        <motion.div
          variants={slideInFromTop}
          className="hidden md:flex Welcome-box py-[8px] px-[20px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            FullStack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <div>
            <p className="leading-10 md:leading-normal text-transparent text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Andrew Ichihara
            </p>
            <p className="mt-2 text-xl md:text-4xl">Fullstack Engineer</p>
          </div>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 my-5 max-w-[600px] text-start"
        >
          I am Andrew, a skilled Web developer with a strong focus on Frontend
          development, while also having expertise in Backend. With over 4 years
          of experience, I have worked on a variety of projects, from e-commerce
          websites to AI chatbots. Take a look at my projects and skills!
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary flex justify-center items-center text-white cursor-pointer rounded-lg h-12 md:h-auto flex-grow w-full md:max-w-[200px]"
        >
          <a href="#skills">Learn More!</a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:block w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          width={650}
          height={650}
          alt="work icons"
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
