import styled from 'styled-components';


interface Props {
 
    children: React.ReactNode;
 
  }

interface ContainerProps {
    isMobile: boolean;
    children: React.ReactNode;
   
  }
export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-areas:${ (props) => (props.isMobile ? 
  
  `'header header header header'
    'sidebar sidebar sidebar sidebar'
   ' main main main main';`
    :
    `'header header header header'
    'sidebar main main main'
    'sidebar main main main'
    ;`) };
    
  grid-template-columns: 390px 1fr 1fr 1fr;
  grid-template-rows: 100px 1fr 1fr;
  min-height: 100vh;
  max-width:1500px;
  max-height:1200px;
 margin: 0 auto;
`;

export const Header = styled.header<Props>`
  grid-area: header;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
`;

export const Sidebar = styled.aside<Props>`
  //grid-area: sidebar;
  background-color: #f2f2f2;
  padding: 16px;
`;

export const Main = styled.main<Props>`
  grid-area: main;
  background-color: #fff;
  padding: 16px;
  padding-top: 100px;
 
`;
