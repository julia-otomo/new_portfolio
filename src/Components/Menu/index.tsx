import MenuItem from "./MenuItem";

const Menu = () => {
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
    <div className="hidden lg:block">
      <ul className="flex flex-row gap-8">
        {items.map((item) => (
          <MenuItem title={item.title} target={item.target} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
