import styled from "styled-components"

interface Props {
  imageUrl: string;
  size: string;
}

export const RoundProfileImage = styled.div<Props>`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
`;