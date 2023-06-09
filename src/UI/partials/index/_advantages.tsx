import { Container, ListItem, ListItemAvatar } from "@mui/material";
import React from "react";
import {
  GradientBackground,
  SectionTitle,
  ListStyle,
  AvatarStyled,
  ListItemTextStyled,
  ListDivider,
} from "./_advantages.style";
const Advantages = () => {
  const advantagesList = [
    {
      icon: "twf-woman",
      title: "Diversidade",
      description: "São mais de 20 soluções inplantadas esperando por você!",
    },
    {
      icon: "twf-certificate",
      title: "Confiabilidade",
      description: "Todos os profissionais são capacitados para customização da solução conforme sua necessidades",
    },
    {
      icon: "twf-search-2",
      title: "Rastreabilidade",
      description: "Você pode acessar todo o histórico de eventos com fotos e videos",
    },
    {
      icon: "twf-frame-broken",
      title: "Segurança",
      description: "Garantir segurança sobre os processos que sua empresa possui",
    },
    {
      icon: "twf-payment",
      title: "Controle",
      description:
        "O pagamento é realizado somente quando a solução está implantada e adequada para seu negócio",
    },
    {
      icon: "twf-calendar",
      title: "Experiência",
      description: "Mais de 50 Clientes atendidos",
    },
  ];

  return (
    <GradientBackground>
      <Container>
        <SectionTitle>Por que usar o Vision?</SectionTitle>
        <ListStyle>
          {advantagesList.map((item, index) => {
            return (
              <React.Fragment key={item.icon}>
                {index !== 0 && <ListDivider />}
                <ListItem>
                  <ListItemAvatar>
                    <AvatarStyled>
                      <i className={item.icon} />
                    </AvatarStyled>
                  </ListItemAvatar>
                  <ListItemTextStyled
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              </React.Fragment>
            );
          })}
        </ListStyle>
      </Container>
    </GradientBackground>
  );
};

export default Advantages;
