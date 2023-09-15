import { Link } from "react-scroll";

type TMenuItem = {
  title: string;
  target: string;
};

const MenuItem = ({ title, target }: TMenuItem) => {
  return (
    <Link
      to={target}
      smooth="true"
      duration={1000}
      offset={0}
      className="relative group"
    >
      <span className="text-grey-5">{title}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-grey-5 transition-all delay-150 group-hover:w-full"></span>
    </Link>
  );
};

export default MenuItem;
