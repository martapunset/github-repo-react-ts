import React from "react";
import styled from "styled-components";
import { RoundProfileImage } from "../ui/RoundProfileImage.style";
import { SidebarContent } from "../ui/GridLayout.style";
interface User {
  avatar_url: string |null;
  name: string|null;
  login: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  email: string;

}
interface Props {
  isMobile: boolean;
  imageUrl: string;
  user: User;
  // children: React.ReactNode;
}

export const SidebarComponent: React.FC<Props> = ({ user, isMobile, imageUrl }) => {
  console.log("sidebarcomp",user, isMobile);
  return (
    <SidebarContent   user={user}  isMobile={isMobile}> 
      <RoundProfileImage
        isMobile={isMobile}
        imageUrl={imageUrl}
      ></RoundProfileImage>

      {user.login}
  
    </SidebarContent>
  );
};
