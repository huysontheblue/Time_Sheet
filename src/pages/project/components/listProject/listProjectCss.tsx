import styled from "styled-components";

export const ContentTable = styled.div`
padding: 10px 25px;
`;

export const ListItemOne = styled.div`
background: #2e95ea;
border-radius: 10px;
padding: 2px 3px;
color: #fff;
font-weight: bold;
font-size: 12px;
`;

export const ListItemTwo = styled.div`
background: #f44336;
border-radius: 10px;
padding: 2px 3px;
color: #fff;
font-weight: bold;
font-size: 12px;
`;

export const ListItemThree = styled.div`
background: #f89c26;
border-radius: 10px;
padding: 2px 3px;
color: #fff;
font-weight: bold;
font-size: 12px;
`;

export const ListItemFour = styled.div`
background: #4caf50;
border-radius: 10px;
padding: 2px 3px;
color: #fff;
font-weight: bold;
font-size: 12px;
`;

export const StyleInactive = styled.button`
  display: inline;
  background-color: rgb(158, 158, 158, 158);
  border: none;
  border-radius: 3px;
  height: 21px;
  margin-top: 5px;
  margin-right: 8px;
  & h6 {
  font-family: Roboto, Arial, Tahoma, sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: white;
  margin: 0;
  }
`;
export const StyleActive = styled.button`
display: inline;
background-color: #4caf50;
border: none;
border-radius: 3px;
height: 21px;
margin-top: 5px;
margin-right: 8px;
& h6 {
  font-family: Roboto, Arial, Tahoma, sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: white;
  margin: 0;
}
`;

export const ItemName = styled.div`
color: rgb(85, 85, 85);
font-family: Roboto, Arial, Tahoma, sans-serif;
font-size: 14px;
`;