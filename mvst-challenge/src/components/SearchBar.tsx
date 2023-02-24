import React from "react";
import { SearchBar } from "../ui/main/SearchBar.style";
import { useState, useEffect } from "react";
import { getRepositoriesByUser } from "../api/getRepositories";
import styled from "styled-components";
import { StarButton } from "../ui/page-layout-grid/Button.style";
import { SearchButton } from "../ui/page-layout-grid/Button.style";
import { daysAgo } from "../helpers/daysAgoFunction";
interface Repos {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
}
interface Props {
  isMobile: boolean;
}



export const SearchBarComponent: React.FC<Props> = ({ isMobile }) => {
  const [repos, setrepos] = useState<Repos[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRepositoriesByUser("martapunset");
      setrepos(response);
    };

    fetchData();
  }, []);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };
  const filteredUsers = repos.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  let data: Repos;


  return (
    <>
      <div>
        <SearchBar
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          isMobile={isMobile}
          placeholder="Find a repository..."
        />
        <SearchButton>All</SearchButton>
      </div>

      <div>
        {filteredUsers.length === 0 && <p>No results found.</p>}

        {!searchTerm
          ? repos.map((item) => (
            <ContainerRepo key={item.id}>
              <a href={item.html_url }>
                <div>
                  <StyledH2>{item.name}</StyledH2>
                  <p>{item.description}</p>
                  <div>
                    <StyledSpan>{item.language}</StyledSpan>
                    <StyledSpan>Modified {
     daysAgo(item.updated_at) 
    
  } days ago </StyledSpan>
                  </div>
                 <StarButton>Star</StarButton>
                </div></a>
              </ContainerRepo>
            ))
          : filteredUsers.map((item) => (
            <ContainerRepo key={item.id}>
               <a href={item.html_url }>
                <div>
                  <StyledH2>{item.name}</StyledH2>
                  <p>{item.description}</p>
                  <div>
                    <StyledSpan>{item.language}</StyledSpan>
                    <StyledSpan>Modified {
     daysAgo(item.updated_at) 
    
  } days ago</StyledSpan>
                  </div>
                 <StarButton>Star</StarButton>
                </div></a>
              </ContainerRepo>
            ))}
      </div>
    </>
  );
};

const StyledSpan = styled.span`
  padding-right: 5px;
  color:black;
`;

const StyledH2 = styled.h2`
  padding: 0;
  color: #006eff;
`;
const ContainerRepo = styled.div`

  margin: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: flex-start;
  border-top: 1px solid #b0abab;
  position: relative;
  color: black;
 
`;
