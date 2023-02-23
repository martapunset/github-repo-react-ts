import React from "react";
import styled from "styled-components";
import { RoundProfileImage } from "../ui/RoundProfileImage.style";
import { SidebarContent } from "../ui/GridLayout.style";
import { FollowButton } from "../ui/Button.style";
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
interface Props {
  isMobile: boolean;

  user: User;
  children?: React.ReactNode;
}
const UserInfoDiv = styled.div`
 
 // padding: 30px;

  display: flex;
  flex-direction: column;
 
  align-items: flex-start;
  margin-top:50px;
  max-width:300px;

`;
const StyledSpan = styled.span`
  padding-right: 10px;
`;

export const SidebarComponent: React.FC<Props> = ({ user, isMobile }) => {
  
  return (
    <SidebarContent   user={user}   isMobile={isMobile}> 
      <RoundProfileImage
        isMobile={isMobile}
        imageUrl={user.avatar_url}
      ></RoundProfileImage>
      <UserInfoDiv>
        <h2>{user.name}</h2>
        <p>@{user.login}</p>
        <p>{user.bio}</p>
        <FollowButton>Follow</FollowButton>
       <div><StyledSpan><strong>{user.followers}</strong> followers</StyledSpan> .
          <StyledSpan><strong>{user.following}</strong> following</StyledSpan></div> 
        <p>{user.email}</p>
        

      </UserInfoDiv>
      
  
    </SidebarContent>
  );
};
