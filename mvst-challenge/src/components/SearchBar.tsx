import React from "react";
import { SearchBar } from "../ui/SearchBar.style";
import { useState, useEffect } from "react";
import { getRepositoriesByUser } from "../api/getRepositories";
import styled from "styled-components";
import { StarButton } from "../ui/Button.style";
import { SearchButton } from "../ui/Button.style";
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


export const SearchBarComponent: React.FC<Props> = ({isMobile}) => {
  const [repos, setrepos] = useState<Repos[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRepositoriesByUser("martapunset");
      setrepos(response);
    };

    fetchData();
  }, []);
  console.log("holidata", repos);

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
    <><div><SearchBar
    type="text"
    value={searchTerm}
    onChange={handleSearchInputChange}
    isMobile={isMobile}
    placeholder="Find a repository..."
  /><SearchButton>Type All</SearchButton></div>
      
      
      <div>
        {filteredUsers.length === 0 && <p>No results found.</p>}

        {!searchTerm
          ? repos.map((item) => (
              <ContainerRepo key={item.id}>
                <div>
                  <StyledH2>{item.name}</StyledH2>
                  <p>{item.description}</p>
                  <div>
                    <StyledSpan>{item.language}</StyledSpan>
                    <StyledSpan>Modified {item.updated_at}</StyledSpan>
                </div>
                <StarButton>Star</StarButton>
                </div>
              </ContainerRepo>
            ))
          : filteredUsers.map((item) => (
              <ContainerRepo key={item.id}>
                <div>
                  <StyledH2>{item.name}</StyledH2>
                  <p>{item.description}</p>
                  <div>
                    <StyledSpan>{item.language}</StyledSpan>
                    <StyledSpan>{item.updated_at}</StyledSpan>
                </div>
                <StarButton>Star</StarButton>
                
               
              </div>
            
              
              </ContainerRepo>
            ))}
      </div>
    </>
  );
};



const StyledSpan = styled.span`
  padding-right: 10px;
`;

const StyledH2 = styled.h2`
  padding: 0;
  color: blue;
`;
const ContainerRepo = styled.div`
  
  height: 80px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: flex-start;
  background-color: light-grey;
  border-top: 1px solid grey;
  position:relative;
`;

