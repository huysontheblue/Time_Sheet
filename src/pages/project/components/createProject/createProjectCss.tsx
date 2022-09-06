import styled from "styled-components";

export const TitleHeader = styled.div`
font-size: 30px;
font-weight: bold;
line-height: 48px;
z-index: 1;
color: rgba(0, 0, 0, 0.87);
font-family: Roboto, Arial, Tahoma, sans-serif;
margin-bottom: 10px;
margin-top: 20px;
`;

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(204,204,204,.35);
`;

export const NewProject = styled.div`
display: flex;
padding: 10px 25px;
gap: 250px;
`;

export const ButtonNewProject = styled.div`
display: flex;
justify-content: flex-end;
gap: 20px;
margin-right: 17px;
padding-top: 25px;
`;

export const ListTab = styled.div`
overflow-y: auto;
width: 100%;
height: 423px;
&::-webkit-scrollbar {
  width: 10px;
}
&::-webkit-scrollbar-track {
  background: #f1f1f1;
}

&::-webkit-scrollbar-thumb {
  background: #888;
}
&::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;
