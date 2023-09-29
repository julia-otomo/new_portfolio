import { useContext } from "react";
import { Link } from "react-scroll";
import { PortfolioContext } from "../../../Providers";

type TMenuItem = {
  title: string;
  target: string;
};

const MenuItem = ({ title, target }: TMenuItem) => {
  const { menu, setMenu } = useContext(PortfolioContext);
  return (
    <>
      {menu ? (
        <Link
          to={target}
          smooth="true"
          duration={1000}
          offset={-54}
          className="flex flex-col justify-center h-8 py-8 px-4 hover:text-grey-6 hover:bg-brand-6 transition-colors delay-75 rounded-lg "
          onClick={() => setMenu(false)}
        >
          <span className="text-grey-7">{title}</span>
        </Link>
      ) : (
        <Link
          to={target}
          smooth="true"
          duration={1000}
          offset={-54}
          className="relative group"
        >
          <span className="text-grey-5">{title}</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-grey-5 transition-all delay-150 group-hover:w-full"></span>
        </Link>
      )}
    </>
  );
};

export default MenuItem;
