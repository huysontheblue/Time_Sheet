import styled from "styled-components";

export const StyleCheckBox = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const LoginTimesheet = styled.div`
  background: #00bcd4;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 560px) {
    margin-left: 112px;
  }
`;

export const TitleLogin = styled.div`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  color: rgb(85, 85, 85);
`;

export const MyTimesheet = styled.div`
  width: 26.5%;
  @media (max-width: 560px) {
    padding-right: 240px;
    text-align: center;
  }
`;

export const TitleError = styled.div`
  color: red;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  width: 310px;
  height: 230px;
  gap: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  margin-bottom: 30px;
`;