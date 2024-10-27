"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/app/utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 md:py-5">
        Skills
      </h2>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-lg md:text-2xl text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
