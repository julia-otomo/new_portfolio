import wavet from "../../assets/wavet.svg";
import waveb from "../../assets/waveb.svg";

const About = () => {
  return (
    <div className="h-max-fitb flex flex-col items-center" id="about">
      <div className="w-screen">
        <img src={wavet} alt="" className="" />
      </div>
      <div className="w-4/5 py-[5rem]">
        <h2>Sobre mim</h2>
        <p>
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
      <div className="w-screen">
        <img src={waveb} alt="" />
      </div>
    </div>
  );
};

export default About;
