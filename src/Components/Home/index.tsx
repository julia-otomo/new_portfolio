import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      id="home"
      className="w-screen bg-[url('assets/sparkles.gif')] bg-no-repeat bg-cover "
    >
      <div className="w-screen bg-brand-7 bg-opacity-80 flex flex-col items-center">
        <div className="flex flex-col gap-[2rem] w-4/5 min-h-[600px] py-[5rem]">
          <h2 className=" text-2xl font-medium text-grey-6">Olá, eu sou</h2>
          <div className=" text-brand-2 text-2xl lg:text-3xl font-bold h-[75px]  md:h-fit">
            <TypeAnimation
              sequence={[
                "Desenvolvedora Full-Stack",
                1000,
                "Desenvolvedora Front-End",
                1000,
                "Desenvolvedora Back-End",
                1000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-sm text-grey-7 text-justify w-[100%] lg:max-w-[500px]">
            Sejam bem-vindo(a) ao meu portfólio ! Sou ex-biomédica e
            desenvolvedora Web Full-Stack. Assim como na área da saúde, meu
            objetivo é criar aplicações que ofereçam soluções tecnológicas
            inovadoras e funcionais, proporcionando uma excelente experiência
            aos usuários. Explore meus projetos e descubra como posso agregar
            valor a suas ideias. Obrigada pela visita !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
