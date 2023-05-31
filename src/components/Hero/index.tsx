import * as C from "./style";
import mobile from "../../../public/mobile.jpeg";
import Container from "../Container";
const Hero = () => {
  return (
    <C.Container>
      <Container>
        <div className="content">
          <C.ImageContainer>
            <C.ImageFlip className="flip-card-inner">
              <div className="flip-card-front">
                <C.ImageHero
                  src={mobile}
                  width={280}
                  height={289}
                  alt="imagem de brigadeiros"
                />
              </div>
              <div className="flip-card-back">
                <C.ImageHero
                  src={mobile}
                  width={280}
                  height={289}
                  alt="imagem de brigadeiros"
                />
              </div>
            </C.ImageFlip>
          </C.ImageContainer>

          <C.ContentContainer>
            <h2>Os Melhores doces de Araraquara</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
              nostrum repellendus reiciendis
            </p>
            <a type="button" href="#">
              Compre Agora
            </a>
          </C.ContentContainer>
        </div>
      </Container>
    </C.Container>
  );
};

export default Hero;
