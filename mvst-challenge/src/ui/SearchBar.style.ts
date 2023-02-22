import styled from 'styled-components';

interface SearchBarProps {
  isMobile: boolean;
}

export const SearchBar = styled.input<SearchBarProps>`
  padding: ${(props) => (props.isMobile ? '8px 12px' : '12px 16px')};
  border: none;
  border-radius: 20px;
  background-color: #f2f2f2;
  font-size: ${(props) => (props.isMobile ? '16px' : '20px')};
  width: ${(props) => (props.isMobile ? '300px' : '300px')};
  margin-right: ${(props) => (props.isMobile ? '0' : '16px')};
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #5a5a5a;
  }
`;
