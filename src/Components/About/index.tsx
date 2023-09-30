import wavet from "../../assets/wavet.svg";
import waveb from "../../assets/waveb.svg";
import photo from "../../assets/80zr0o.gif";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-max-fit flex flex-col items-center" id="about">
      <div className="w-full">
        <img src={wavet} alt="" className="" />
      </div>
      <div className="w-4/5 py-[5rem] flex flex-col gap-[3rem]">
        <div className="flex flex-row gap-[1rem] items-center">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-brand-1 text-2xl font-semibold lg:text-3xl">
            Sobre mim
          </h2>
          <FaReact className="animate-spin animate-infinite animate-duration-[4000ms] fill-brand-1 w-8 h-8" />
        </div>

        <div className="self-center flex items-center justify-center w-[13rem] h-[13rem] bg-gradient-to-r from-violet-500 to-brand-1 rounded-[20%] animate-gradient">
          <img
            src={photo}
            alt=""
            className="w-[12rem] h-[12rem] object-cover object-top rounded-[20%]"
          />
        </div>

        <p className="text-grey-7 text-sm text-justify lg:text-lg">
          Desde a infância, nutro uma paixão inabalável pela tecnologia, ao
          desfrutar tanto de jogos virtuais como dos sistemas de informação.
          Embora minha formação seja em Biomedicina, encontrei minha verdadeira
          afinidade no universo da programação. Meu propósito agora é
          aperfeiçoar-me incessantemente, explorando novas tecnologias para
          criar aplicações que facilitem a vida das pessoas. Além disso,
          acredito na importância da colaboração e do trabalho em equipe, pois
          sei que, juntos, podemos alcançar resultados ainda mais
          extraordinários. Estou aberta a novas parcerias e pronta para
          compartilhar conhecimentos, pois acredito que o conhecimento se
          multiplica quando é compartilhado ❤️.
        </p>
      </div>
      <div className="w-full">
        <img src={waveb} alt="" />
      </div>
    </div>
  );
};

export default About;
