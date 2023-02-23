import React from "react";
import { SearchBar } from "../ui/SearchBar.style";
import { useState, useEffect } from "react";
import { getRepositoriesByUser } from "../api/getRepositories";
import styled from "styled-components";
interface Repos {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
}

const StyledSpan = styled.span`
  padding-right: 10px;
`;

const StyledH2 = styled.h2`
  padding: 0;
`;
const ContainerRepo = styled.div`

  width: 80%;
  height: 100px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  //justify-content: space-around;
  padding: 20px;
  align-items: flex-start;
  width: 80%;
  background-color: light-grey;
  border-top: 1px solid grey;
`;

export const SearchBarComponent: React.FC = () => {
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
    <>
      <SearchBar
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChange}
        isMobile={true}
        placeholder="Search"
      />
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
                    <StyledSpan>{item.updated_at}</StyledSpan>
                  </div>
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
                </div>
              </ContainerRepo>
            ))}
      </div>
    </>
  );
};
