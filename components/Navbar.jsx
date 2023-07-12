"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

//inset is same as absolute. instead of specifying all top, right, bottom ,left, we can do it in one line in inset
const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[34px] text-white">
          METAVERSUS
        </h2>
        <img src="/menu.svg" alt="menu" className="w-[24px] object-contain" />
      </div>
    </motion.nav>
  );
};
export default Navbar;
