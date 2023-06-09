import { useEffect, useState } from "react";
import {
  ContaienerStyled,
  SectionButton,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
  SectionPictureContainer,
  BottomButton,
} from "./_presentation.styled";

const Presentation = () => {
  const [cleanerPicture, setCleanerPicture] = useState("");

  useEffect(() => {
    const newCleanPicture =
      Math.random() < 0.5
        ? "/img/home/img-vision-01.png"
        : "/img/home/img-vision-03.png";
    setCleanerPicture(newCleanPicture);
  }, []);

  return (
    <SectionContainer>
      <ContaienerStyled>
        

        <SectionSubtitle>
          São mais de <em> 20 </em> projetos esperando por você!
        </SectionSubtitle>

        <SectionButton
          href="/encontrar-diarista"
          mui={{ variant: "contained" }}
        >
          Encontrar uma solução para seu negócio
        </SectionButton>

        <SectionPictureContainer>
          <img src={cleanerPicture} alt="VISION" />
        </SectionPictureContainer>
      </ContaienerStyled>

      <BottomButton>
        <i className="twf-caret-down" />
      </BottomButton>
    </SectionContainer>
  );
};

export default Presentation;
