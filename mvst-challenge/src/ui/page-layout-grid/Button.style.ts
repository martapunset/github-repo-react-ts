import styled from "styled-components";


export const FollowButton = styled.button`
  border: 1px solid grey;
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  width: 300px;

  &:hover {
    background-color: #f6f8fa;
    border-color: #c6cbd1;
    color: #24292e;
  }

  &:active {
    background-color: grey;
    border-color: #1c7430;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
  }
 & > a{
   color:black;}
`;

export const StarButton = styled.button`
  border: 1px solid grey;
  border-radius: 10px;
  margin-top: 6px;
  margin-bottom: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 5px 9px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  width: 40px;
  height: 30px;
  position: absolute;
  right: 0px;
  top: 10px;

  &:hover {
    background-color: #f6f8fa;
    border-color: #c6cbd1;
    color: #24292e;
  }

  &:active {
    background-color: grey;
    border-color: #1c7430;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
  }
`;

export const SearchButton = styled.button`
  border: 1px solid grey;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 12.5px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  width: 80px;

  &:hover {
    background-color: #f6f8fa;
    border-color: #c6cbd1;
    color: #24292e;
  }

  &:active {
    background-color: grey;
    border-color: #1c7430;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(46, 164, 79, 0.4);
  }
`;
