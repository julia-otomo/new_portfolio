import { useContext } from "react";
import { PortfolioContext } from "../../Providers";
import MenuMobile from "../MenuMobile";
import Home from "../Home";
import About from "../About";

const Main = () => {
  const { menu } = useContext(PortfolioContext);
  return (
    <main className="mt-20 w-fit h-fit flex flex-col ">
      {menu && <MenuMobile />}
      <Home />
      <About />
    </main>
  );
};

export default Main;
