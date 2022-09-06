import styled from "styled-components";

export const style = {
    position: "absolute" as "absolute",
    width: 400,
    top: "50%",
    left: "50%",
    p: 4,
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
    background: "#fff"
  };
  
  export const Form = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  
  export const TextTitle = styled.div`
    font-family: Roboto, Arial, Tahoma, sans-serif;
    font-size: 27px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
    padding-top: 17px;
    margin-bottom: 15px;
  `;
  
  export const TextName = styled.div`
    font-family: Roboto, Arial, Tahoma, sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 20px;
    color: rgba(0, 0, 0, 0.64);
  `;
  
  export const ArchiveButton = styled.div`
    display: flex;
    gap: 10px;
  `;