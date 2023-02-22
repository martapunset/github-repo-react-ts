import React from 'react'
import { SearchBar } from '../ui/SearchBar.style'
import { useState, useEffect } from 'react';
import { getRepositoriesByUser } from '../api/getRepositories';
import styled from "styled-components"
interface Repos{
  id?: number;
  name: string;
  html_url: string;
    description: string;
    language: string;
    updated_at: string;
}

const ContainerRepo = styled.div`


 //border: 1px solid black;
 
  width:80%;
  height: 100px;
  margin:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding:20px;
`;

export const SearchBarComponent: React.FC = () => {
  const [repos, setrepos] = useState<Repos[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRepositoriesByUser("martapunset");
     // const responseData = await response.json();
      setrepos(response);
    };

    fetchData();
  }, []);
  console.log("holidata", repos)

  const reposId:Repos[]=repos.map((item, index) => ({ id: index + 1, ...item }));


  return (
    <>
    <SearchBar isMobile={true} placeholder="Search" />    
    <div>
      {reposId.map((item) => (
        <ContainerRepo key={item.id}><h2>{item.name}</h2><hr /></ContainerRepo>
        
        
      ))}
    </div>
    
    </>



    
  )
  
}

