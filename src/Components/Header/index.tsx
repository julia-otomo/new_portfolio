import Menu from "../Menu";

const Header = () => {
  return (
    <header className="w-full bg-brand-5 h-20 fixed top-0 flex flex-col items-center z-10">
      <div className="w-4/5  h-full flex flex-row items-center justify-between">
        <h1 className="text-grey-5 font-bold text-lg">Julia Duarte</h1>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
