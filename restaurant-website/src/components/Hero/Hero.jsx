import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const SlideUp = (delay) => {
  return {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

function Hero() {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap12 lg:gap-24 place-items-center justify-between">
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0 ">
            <motion.h1
              variants={SlideUp(0.5)}
              initial="initial"
              whileInView="animate"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              Yummy
            </motion.h1>
            <motion.h1
              variants={SlideUp(1)}
              initial="initial"
              whileInView="animate"
              className="text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"
            >
              BREAKFAST
            </motion.h1>
            <motion.p
              variants={SlideUp(1.5)}
              initial="initial"
              whileInView="animate"
              className="text-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eum quas sequi nostrum distinctio facere vero ipsam
              cum, cumque velit harum maiores magnam, natus sit, et similique?
              Earum, magnam facere!
            </motion.p>
            <motion.button
              variants={SlideUp(2)}
              initial="initial"
              whileInView="animate"
              className="btn-primary py-1.5 flex align-middle"
            >
              <IoCartOutline />
              Order Now
            </motion.button>
          </div>
          <div>
            <motion.img
              initial={{ opacity: 0, rotate: 20, x: 200, y: 100 }}
              whileInView={{ opacity: 1, rotate: 0, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              src="https://cdn.pixabay.com/photo/2023/08/12/02/56/sushi-8184633_1280.png"
              className="w-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
