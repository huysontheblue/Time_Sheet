import styled from "styled-components";

export const TaskContent = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid rgba(204,204,204,.35);
`;

export const TitleHeader = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #111;
  line-height: 19.8px;
  font-family: Roboto, Arial, Tahoma, sans-serif;
`;

export const AddContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Add = styled.div`
  display: flex;
  padding: 10px 25px;
  gap: 40px;
  @media (max-width: 560px) {
    flex-direction: column;
    float: left;
  };
  @media (min-width: 560px) and (max-width: 980px) {
    flex-direction: column;
    float: left;
  }
`;

export const Refresh = styled.div`
display: flex;
justify-content: flex-end;
color: #4c4c4c;
padding: none;
`;

export const ButtonRefresh = styled.div`
  display: flex;
  gap: 5px;
  background: GhostWhite;
  border: none;
  position: absolute;
  margin-top: 30px;
  z-index: 1;
  :hover {
    background: #e9e9e9;
    cursor: pointer;
  }
  width: 100px;
  height: 45px;
  overflow: auto;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;