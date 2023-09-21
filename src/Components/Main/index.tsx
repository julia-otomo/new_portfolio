import { useContext } from "react";
import { PortfolioContext } from "../../Providers";
import MenuMobile from "../MenuMobile";
import Home from "../Home";

const Main = () => {
  const { menu } = useContext(PortfolioContext);
  return (
    <main className="mt-20 w-fit h-fit flex flex-col ">
      {menu && <MenuMobile />}
      <Home />
    </main>
  );
};

export default Main;
