import styled from 'styled-components';

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  //background-color: #f6f8fa;
 // padding: 0 16px;
  border-bottom:1px solid grey;
  margin:20px;
 width:100%;

  & > button {
   

   // cursor: pointer;
   background-color: transparent;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding: 7px 16px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    transition: background-color 0.2s ease-in-out;
    border:none;

    &:hover {
     // background-color: #22863a;
      border-bottom:2px solid orange;
    }

    &:active {
    
      border-bottom:2px solid orange;
     
    }

    &:focus {
      outline: none;
    
    }
  }
`;

