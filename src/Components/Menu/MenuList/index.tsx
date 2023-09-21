import MenuItem from "../MenuItem";

const MenuList = () => {
  const items = [
    {
      title: "Início",
      target: "home",
    },
    {
      title: "Sobre",
      target: "about",
    },
    {
      title: "Competências",
      target: "skills",
    },
    {
      title: "Experiência",
      target: "experience",
    },
    {
      title: "Projetos",
      target: "projects",
    },
    {
      title: "Contato",
      target: "contact",
    },
  ];

  return (
    <ul className="flex flex-col bg-opacity-90 lg:bg-opacity-100 lg:bg-transparent lg:flex-row lg:gap-8">
      {items.map((item) => (
        <MenuItem title={item.title} target={item.target} />
      ))}
    </ul>
  );
};

export default MenuList;
