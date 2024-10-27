"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/app/utils/motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { career } from "@/app/constants";

const Career = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen w-full h-full px-10 md:px-40"
      ref={ref}
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:py-5">
        Experience
      </h2>

      <div className="flex flex-col gap-10 w-auto h-auto z-[20] text-gray-200 mt-10 md:mt-20">
        {career.map((c, idx) => (
          <motion.div
            key={c.title}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromLeft(0.5 + idx * 0.5)}
            transition={{ delay: idx * 0.5 }}
            className="flex flex-col md:flex-row gap-10 justify-center"
          >
            {/* {inView && <h1>inview</h1>} */}
            <div className="col-3 size-10 md:size-20 hidden md:block">
              <Image
                src={c.srcImg}
                alt="Career"
                width={70}
                height={70}
                className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] object-contain"
              />
            </div>

            <div className="career-container flex flex-col">
              <h3 className="font-bold text-xl">{c.title}</h3>
              <p className="mb-3">{c.year}</p>
              <ul>
                {c.description.map((d) => (
                  <li className="text-gray-300" key={d}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Career;
