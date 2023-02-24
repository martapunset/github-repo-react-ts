import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  border-bottom: 1px solid grey;
  margin: 20px 10px 20px 10px;
  max-width: 1400px;

  & > button {
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding: 7px 10px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    transition: background-color 0.2s ease-in-out;
    border: none;

    &:hover {
      border-bottom: 3px solid orange;
    }

    &:active {
      border-bottom: 2px solid orange;
    }

    &:focus {
      outline: none;
    }
  }
`;
