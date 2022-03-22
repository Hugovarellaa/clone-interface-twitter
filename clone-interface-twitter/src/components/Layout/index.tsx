import { Main } from "../Main";
import MenuBar from "../MenuBar";
import { Container, Wrapper } from "./styles";
import { SideBar } from "../SiderBar";

export function Layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
}
