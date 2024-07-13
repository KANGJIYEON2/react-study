import { motion } from "framer-motion";
import { IoCartOutline } from "react-icons/io5";

const NavMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Contact us",
    path: "/contact",
    delay: 0.5,
  },
];

const SlideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
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

function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between items-center font-notosans">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-20"
          src="https://cdn.pixabay.com/photo/2018/12/28/10/03/noodle-3899206_1280.png"
          alt="food"
        />
        <div>
          <ul className="flex gap-6">
            {NavMenu.map((menu) => {
              return (
                <motion.li
                  variants={SlideDown(menu.delay)}
                  initial="initial"
                  animate="animate"
                  key={menu.id}
                  className="nav-menu"
                  data-delay={menu.delay}
                >
                  <a
                    href={menu.path}
                    className="inline-block px-2 py-2 text-2xl"
                  >
                    {menu.title}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
        <motion.div variants={SlideDown(1)} initial="initial" animate="animate">
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-black">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
