import React from "react";
import { SearchBar } from "../ui/main/SearchBar.style";
import { useState, useEffect } from "react";
import { getRepositoriesByUser } from "../api/getRepositories";
import styled from "styled-components";
import { StarButton } from "../ui/page-layout-grid/Button.style";
import { daysAgo } from "../helpers/daysAgoFunction";
import { FaStar} from "react-icons/fa";
import { Repos } from "../interfaces/types";  


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

  /**
   * The function updates searchTerm useState when the event is triggered 
   * @param event comes from an input search bar
   */

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  /**
   * The function filters repos array including searchTerm in its name
   */
  const filteredRepos = repos.filter((repos) =>
    repos.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 

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
      </div>

      <div>
        {filteredRepos.length === 0 && <ContainerRepo><h2>No results found</h2></ContainerRepo>}

        {!searchTerm
          ? repos.map((item) => (
              <ContainerRepo key={item.id}>
                <a href={item.html_url}>
                  <div>
                    <StyledH2>{item.name}</StyledH2>
                    <p>{item.description}</p>
                    <div>
                      <StyledSpan>
                        <strong>{item.language}</strong>
                      </StyledSpan>
                      <StyledSpan>
                        Modified {daysAgo(item.updated_at)} days ago{" "}
                      </StyledSpan>
                    </div>
                    <StarButton>{<FaStar></FaStar>}</StarButton>
                  </div>
                </a>
              </ContainerRepo>
            ))
          : filteredRepos.map((item) => (
              <ContainerRepo key={item.id}>
                <a href={item.html_url}>
                  <div>
                    <StyledH2>{item.name}</StyledH2>
                    <p>{item.description}</p>
                    <div>
                      <StyledSpan>
                        <strong>{item.language}</strong>
                      </StyledSpan>
                      <StyledSpan>
                        Modified {daysAgo(item.updated_at)} days ago
                      </StyledSpan>
                    </div>
                    <StarButton>{<FaStar></FaStar>}</StarButton>
                  </div>
                </a>
              </ContainerRepo>
            ))}
      </div>
    </>
  );
};

const StyledSpan = styled.span`
  padding-right: 5px;
  color: black;
`;

const StyledH2 = styled.h2`
  padding: 0;
  color: #006eff;
`;
const ContainerRepo = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 20px;
  align-items: flex-start;
  border-top: 1px solid #b0abab;
  position: relative;
  color: black;
  max-width: 1400px;
  font-size: 14px;

  &  p {
    color:black;
  }
`;
