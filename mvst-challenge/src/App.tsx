import { useState, useEffect} from "react";
import styled from "styled-components";
import { getUserInfo } from "./api/getUserInfo";
import { SearchBarComponent } from "./components/SearchBar";
import {
  Container,
  Header,
  Main,
} from "./ui/page-layout-grid/GridLayout.style";
import { SidebarComponent } from "./components/SidebarComponents";
import { TopBar } from "./ui/main/TopBar.style";

const App: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange(): void {
    setWidth(window.innerWidth);
  }


  const [user, setUser] = useState({
    avatar_url: "",
    name: "",
    login: "",
    html_url: "",
    bio: "",
    followers: 0,
    following: 0,
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserInfo("martapunset");
      setUser(response);
    };

    fetchData();
  }, []);


  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [window.innerWidth]);
  let isMobile: boolean = width <= 800;


  return (
    <>
      <div className="App">
        <Container isMobile={isMobile}>
          <Header>
            <H1>GitReview</H1>
          </Header>

          <SidebarComponent user={user} isMobile={isMobile}></SidebarComponent>
          <Main>
            <TopBar>
              <button>Overview</button>
              <button>Repositories</button>
              <button>Projects</button>
            </TopBar>
            <SearchBarComponent isMobile={isMobile} />
          </Main>
        </Container>
      </div>
    </>
  );
};

export default App;

export const H1 = styled.h1`
  font-size: 4rem;
  text-align: center;
  position: absolute;
  top: 21px;
  left: 60px;
`;
