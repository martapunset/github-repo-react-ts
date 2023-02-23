import { useState, useEffect, useContext } from "react";

import "./App.css";
import { getRepositoriesByUser } from "./api/getRepositories";
import { getUserInfo } from "./api/getUserInfo";
import { RoundProfileImage } from "./ui/RoundProfileImage.style";
import { SearchBarComponent } from "./components/SearchBar";
import { Container, Header,  Main } from "./ui/GridLayout.style";
import { SidebarComponent } from "./components/SidebarComponents";
import { AppContext } from "./AppContext/AppProvider";
import { H1 } from "./ui/Text.style";
import { TopBar } from "./ui/TopBar.style";



const App: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange(): void {
    setWidth(window.innerWidth);
  }
  interface User {
    avatar_url: string;
    name: string|null;
    login: string;
    html_url: string;
    bio: string;
    followers: number;
    following: number;
    email: string;

}

  const [user, setUser] = useState({
    avatar_url: '',
    name: '',
    login: '',
    html_url: '',
    bio: '',
    followers: 0,
    following: 0,
    email: ''
  });
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserInfo("martapunset");
     // const responseData = await response.json();
      console.log(response)
      setUser(response);
    };

    fetchData();
  }, []);
  console.log("holidata", user)


  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [window.innerWidth]);
  let isMobile: boolean = width <= 800;
  //getUserInfo("martapunset")
  console.log(isMobile, user);
  return (
    <>
      <div className="App">
        <Container isMobile={isMobile}>
          <Header>
            <H1>GitReview</H1>
           
          </Header>

          <SidebarComponent
            user={user}
            isMobile={isMobile}
           
          ></SidebarComponent>
          <Main>
            <TopBar><button>Overview</button>
        <button>Repositories</button>
        <button>Projects</button>
        <button>Edit Profile</button></TopBar>
            <SearchBarComponent isMobile={isMobile } />
            
          </Main>
        </Container>
      </div>
    </>
  );
};

export default App;
