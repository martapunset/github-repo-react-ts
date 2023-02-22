import { useState, useEffect, useContext } from "react";

import "./App.css";
import { getRepositoriesByUser } from "./api/getRepositories";
import { getUserInfo } from "./api/getUserInfo";
import { RoundProfileImage } from "./ui/RoundProfileImage";
import { SearchBarComponent } from "./components/SearchBar";
import { Container, Header, Sidebar, Main } from "./ui/Grid.style";
import { SidebarComponent } from "./components/SidebarComponents";
import { AppContext } from './AppContext/AppProvider';

const App: React.FC = () => {
  
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange(): void {
    setWidth(window.innerWidth);
  }

 


  //getRepositoriesByUser("martapunset")
  //const { isMobile, handleWindowSizeChange } = useContext(AppContext)
  
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [window.innerWidth]);
 let isMobile: boolean = width <= 568;
  //getUserInfo("martapunset")
  console.log(isMobile);
  return (
    <>
      <div className="App">
      <Container isMobile={isMobile}>
        <Header>
          <h1>Github</h1>
        </Header>

        <SidebarComponent isMobile={isMobile} imageUrl={`https://avatars.githubusercontent.com/u/107318883?v=4`} ></SidebarComponent>
        <Main>
          <SearchBarComponent />
          <p>Main content goes here</p>
        </Main>
        </Container>
        </div>
    </>
  );
};

export default App;
