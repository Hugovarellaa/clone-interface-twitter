import React from "react";
import List from "../List";
import { FollwSuggestion } from "../FollwSuggestion";
import StickyBox from "react-sticky-box";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";
import News from "../News";

export const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez voce curta"
            elements={[
              <FollwSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
              <FollwSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollwSuggestion
                name="Camila Magalhães"
                nickname="@camilaamgl"
              />,
            ]}
          />

          <List
            title="Talvez voce curta"
            elements={[<News />, <News />, <News />, <News />]}
          />

          <List
            title="Talvez voce curta"
            elements={[<News />, <News />, <News />, <News />]}
          />

          <List
            title="Talvez voce curta"
            elements={[<News />, <News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};
