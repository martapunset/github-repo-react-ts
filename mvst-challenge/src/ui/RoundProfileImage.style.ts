import styled from "styled-components"

interface Props {
  imageUrl: string;
  isMobile:boolean;
}

export const RoundProfileImage = styled.div<Props>`

  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: ${(props) => (props.isMobile ? '150px': '300px')};
  height: ${(props) => (props.isMobile ? '150px': '300px')};
`;