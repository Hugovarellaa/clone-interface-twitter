import React from "react";
import Feed from "../Feed";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from "./styles";

export const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined> Editar perfil</EditButton>
        <h1>Hugo Alves Varella</h1>
        <h2>@hugovarellaa</h2>

        <p>
          Developer at{" "}
          <a href="https://app.rocketseat.com.br/me/hugo-alves-varella-09688">
            @Rocketseat
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Brasilia-DF, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 02 de Dezembro de 1987
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>93</strong>
          </span>
          <span>
            <strong>762</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};
