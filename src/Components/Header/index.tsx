import { useContext } from "react";
import { PortfolioContext } from "../../Providers";
import Menu from "../Menu";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { menu, setMenu } = useContext(PortfolioContext);

  return (
    <header className="w-full bg-brand-5 h-20 fixed top-0 flex flex-col items-center z-10 shadow-sm shadow-grey-5 bg-opacity-90">
      <div className="w-4/5  h-full flex flex-row items-center justify-between">
        <h1 className="text-grey-5 font-bold text-lg">Julia Duarte</h1>
        <Menu />

        <button
          className="bg-transparent border-none lg:hidden"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <AiOutlineClose className="fill-grey-5 h-5 w-5 cursor-pointer lg:hidden" />
          ) : (
            <SlMenu className="fill-grey-5 h-5 w-5 cursor-pointer " />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
