import { useContext } from "react";
import MenuList from "../Menu/MenuList";
import { PortfolioContext } from "../../Providers";
import { motion, AnimatePresence } from "framer-motion";

const MenuMobile = () => {
  const { menu } = useContext(PortfolioContext);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          className="fixed lg:hidden w-[80%] max-w-[300px] bg-brand-5 rounded-br-lg bg-opacity-90"
          initial="closed"
          animate={menu ? "open" : "closed"}
          exit="closed"
          variants={menuVariants}
        >
          <MenuList />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuMobile;
