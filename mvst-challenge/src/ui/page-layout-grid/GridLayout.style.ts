import styled from "styled-components";
import { User } from "../../interfaces/types";

interface Props {
  children: React.ReactNode;
  isMobile?: boolean;
  user?: User;
  imageUrl?: string;
}

interface ContainerProps {
  isMobile: boolean;
  children: React.ReactNode;
}
export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-areas: ${(props) =>
    props.isMobile
      ? `'header '
    'sidebar '
   ' main ';`
      : `'header header header'
    'sidebar main main'
    'sidebar main main'
    ;`};

  grid-template-columns: ${(props) =>
    props.isMobile ? `100vw` : `1fr 1fr 1fr;`};
  grid-template-rows: 80px 1fr;
  // min-height: 100vh;
`;

export const Header = styled.header<Props>`
  grid-area: header;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const SidebarContent = styled.div<Props>`
  grid-area: sidebar;
  padding: 16px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;

  align-items: center;
  height: ${(props) => (props.isMobile ? `470px` : `100%`)};
  
`;

export const Main = styled.main<Props>`
  grid-area: main;
  background-color: #fff;
  padding: 16px;
  min-height:500px;
  //padding-top: 50px;
`;
