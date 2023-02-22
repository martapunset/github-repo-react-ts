
import React from 'react';
import styled from 'styled-components';
import { RoundProfileImage } from '../ui/RoundProfileImage';

interface Props{
  isMobile: boolean;
  imageUrl: string;
 // children: React.ReactNode;
}


const SidebarContent = styled.div`
grid-area:sidebar;
  padding: 16px;
  padding-top:100px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;


export const SidebarComponent: React.FC<Props> = ({ isMobile, imageUrl } ) => {
  console.log("sidebarcomp", isMobile)
  return (

    <SidebarContent><RoundProfileImage isMobile={isMobile} imageUrl={imageUrl } ></RoundProfileImage></SidebarContent>

  );
}

