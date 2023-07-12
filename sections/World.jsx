"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { exploreWorlds } from "../constants/index";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col `}
      >
        <TypingText
          title="| People around the world"
          textStyles="text-center"
        />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world.
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>

          {/* <div className="absolute top-20 right-40 justify-start w-[200px] flex-col bg-[rgba(0,0,0,0.5)] rounded-[10px] overflow-hidden">
            <img src="planet-04.png" alt="planet" />
            <h2 className=" text-center text-white font-bold background: rgba(149, 66, 232, 0.35)">
              The Upside Down
            </h2>
          </div>

          <div className="absolute top-[280px] bottom-70 justify-start w-[200px] flex-col bg-[rgba(0,0,0,0.5)] rounded-[10px] overflow-hidden">
            <img src="planet-05.png" alt="planet" />
            <h2 className=" text-center text-white font-bold background: rgba(149, 66, 232, 0.35)">
              The Hawkins Lab
            </h2>
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
