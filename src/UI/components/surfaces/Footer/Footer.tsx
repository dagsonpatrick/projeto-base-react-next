import { Box, List, Typography } from "@mui/material";
import Link from "UI/components/navigation/Link/Link";
import {
  FooterContainer,
  FooterGrid,
  FooterTitle,
  FooterListItem,
  SocialContainer,
  AppList,
  FooterSocialList,
  SocialButton,
} from "./Footer.style";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <FooterTitle>Menu</FooterTitle>
          <List>
            <FooterListItem>
              <Link
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >
                Encontrar um Produto
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >
                Suporte Técnico
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Por que usar o Vision?
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Principais Dúvidas
              </Link>
            </FooterListItem>
          </List>
        </div>

        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
          Empresa focada no desenvolvimento de soluções inovadoras para diversos segmentos, 
          como manufatura, logística, saúde, varejo e serviços. 
          Atualmente conta com a plataforma SMART com três módulos: SMART TRACK, SMART SAFETY e VISION. 
          Uma plataforma com Inteligência Artificial onde é possível transformar o negócio em uma operação altamente eficiente e segura.
          </Typography>
        </Box>
        <SocialContainer>
          <div>
            <FooterTitle>Baixe nossos aplicativos</FooterTitle>
            <AppList>
              <li>
                <a
                  href=""
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <img src={"/img/logos/app-store.png"} alt={"AppStore"} />
                </a>
              </li>
              <li>
                <a
                  href=""
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <img src={"/img/logos/google-play.png"} alt={"Google Play"} />
                </a>
              </li>
            </AppList>
          </div>
          <div>
            <FooterTitle>Redes Sociais</FooterTitle>
            <FooterSocialList>
              <FooterListItem>
                <SocialButton href="https://www.facebook.com/A4Solutionsbr">
                  <i className="twf-facebook-f" />
                </SocialButton>
              </FooterListItem>
              <FooterListItem>
                <SocialButton href="https://www.instagram.com/a4solutions/">
                  <i className="twf-instagram" />
                </SocialButton>
              </FooterListItem>
              <FooterListItem>
                <SocialButton href="https://www.youtube.com/@a4solutions401/about">
                  <i className="twf-youtube" />
                </SocialButton>
              </FooterListItem>
            </FooterSocialList>
          </div>
        </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
