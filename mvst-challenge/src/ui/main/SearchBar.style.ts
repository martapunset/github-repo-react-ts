import styled from 'styled-components';

interface SearchBarProps {
  isMobile: boolean;
}

export const SearchBar = styled.input<SearchBarProps>`
  padding: 14px 16px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #f2f2f2;
  font-size: ${(props) => (props.isMobile ? '15px' : '18px')};
  width: ${(props) => (props.isMobile ? '200px' : '500px')};
  margin-right: ${(props) => (props.isMobile ? '0' : '16px')};
  margin:10px;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #5a5a5a;
  }
`;
