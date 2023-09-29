import { TypeAnimation } from "react-type-animation";

import img from "../../assets/code.gif";

const Home = () => {
  return (
    <div
      id="home"
      className="h-max-fit bg-[url('assets/sparkles.gif')] bg-no-repeat bg-cover "
    >
      <div className="bg-brand-7 min-h-[600px] bg-opacity-80 flex flex-col items-center gap-[4rem] pb-[5rem] lg:flex-row lg:justify-around lg:pb-0 lg:items-start">
        <div className="flex flex-col gap-[2rem] w-4/5 pt-[5rem] lg:w-[45%]">
          <h2 className=" text-2xl font-medium text-grey-6">Olá, eu sou</h2>
          <div className=" text-brand-1 text-2xl lg:text-3xl font-bold h-[75px]  md:h-fit">
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
          <p className="text-sm text-grey-7 text-justify w-[100%] lg:max-w-[500px] lg:text-lg">
            Sejam bem-vindo(a) ao meu portfólio ! Sou ex-biomédica e
            desenvolvedora Web Full-Stack. Assim como na área da saúde, meu
            objetivo é criar aplicações que ofereçam soluções tecnológicas
            inovadoras e funcionais, proporcionando uma excelente experiência
            aos usuários. Explore meus projetos e descubra como posso agregar
            valor a suas ideias. Obrigada pela visita !
          </p>
        </div>
        <div className="flex flex-col items-center w-[60%] lg:justify-center lg:w-[35%] lg:pt-[5rem]">
          <img
            src={img}
            alt=""
            className="w-[100%] rounded-tl-[20px] rounded-br-[20px] rounded-tr-[60px] rounded-bl-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
