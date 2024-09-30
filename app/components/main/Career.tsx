"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/app/utils/motion";
import Image from "next/image";
import { career } from "@/app/constants";

const Career = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen w-full h-full px-10 md:px-40"
    >
      <div className="w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Experience
        </motion.div>
      </div>

      <div className="flex flex-col gap-10 w-auto h-auto z-[20] text-gray-200 mt-20">
        {career.map((c, idx) => (
          <motion.div
            key={c.title}
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(idx * 0.5)}
            className="flex flex-col md:flex-row gap-10 justify-center"
          >
            <Image
              src={c.srcImg}
              alt="Career"
              width={100} // これはnext/image用でsrcSetなどがあるがTailwindでの調整には関係しない
              height={100}
              className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] object-contain"
            />

            <div className="career-container flex flex-col">
              <h3 className="font-bold text-xl">{c.title}</h3>
              <p>{c.year}</p>
              {c.description.map((d) => (
                <p key={d}>{d}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Career;
